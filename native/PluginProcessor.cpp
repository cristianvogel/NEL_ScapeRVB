// Local Headers
#include "SlotName.h"
#include "UserBankManager.h"
#include "PluginProcessor.h"
#include "ViewClientInstance.h"
#include "ConvolverNode.h"
#include "Utilities.h"
#include "AudioFileLoader.h"

using Results = juce::StringPairArray;
using Props = Asset::Props;

//======= DETAIL
//=======================================================================
Processor::Processor()
    : AudioProcessor(BusesProperties()
                     .withInput("Input", juce::AudioChannelSet::stereo(), true)
                     .withOutput("Output", juce::AudioChannelSet::stereo(), true)),

      jsContext(choc::javascript::createQuickJSContext()),
      server(std::make_unique<choc::network::HTTPServer>()),
      assetManager(std::make_unique<JuceAssetManager>()),
      slotManager(std::make_unique<SlotManager>(*this)),
      fileLoader(std::make_unique<AudioFileLoader>(*this))
{
    // Initialize parameters from the manifest file
#if ELEM_DEV_LOCALHOST
    auto manifestFile = juce::URL("http://localhost:5173/manifest.json");
    auto manifestFileContents = manifestFile.readEntireTextStream().toStdString();
#else
    auto manifestFile = util::getAssetsDirectory().getChildFile("manifest.json");
    if (!manifestFile.existsAsFile())
        return;
    auto manifestFileContents = manifestFile.loadFileAsString().toStdString();
#endif

    // Populate the parameters from the manifest file
    const auto manifest = elem::js::parseJSON(manifestFileContents);
    if (!manifest.isObject())
        jassert(false);
    const auto parameters = manifest.getWithDefault("parameters", elem::js::Array());
    createParameters(parameters);
    // register audio file formats
    formatManager.registerBasicFormats();

    // Initialize JUCE-based asset management
    if (!assetManager)
        assetManager = std::make_unique<JuceAssetManager>();
    
    // run the famous CHOC WebView
    editor = new WebViewEditor(this, util::getAssetsDirectory(), 840, 480);
    // then load default audio assets
    initialiseDefaultFileAssets();
}

// Destructor
Processor::~Processor()
{
    // First explicitly close the front end, so it
    // stops sending messages to the Web Socket
    editor = nullptr;
    // Ensure clientInstance is properly released
    clientInstance.reset();
    // Ensure server is properly closed and released
    server->close();
    
    // Safely shutdown Elementary runtime
    if (elementaryRuntime) {
        elementaryRuntime.reset();
    }

    // Remove all listeners from params, standard JUCE pattern
    for (auto& p : getParameters())
    {
        p->removeListener(this);
    }
}


void Processor::clear_userFiles_in_assets_map()
{
    // Initial slot
    std::cout << "Clearing userFiles_in_assets_map for current bank " << userBankManager.getUserBank() << "..." << std::endl;
    auto slot = SlotName::LIGHT;
    while (slot != SlotName::LAST)
    {
        assetsMap[slot].clear_userfiles();
        nextSlotNoWrap(slot);
    }
    // Reset to slot 0 when clearing
    fileLoader->currentSlotIndex = 0;
}

//====HOISTED==========================================================================
// JS INITIALISATION HAPPENS HERE

void Processor::handleAsyncUpdate()
{
    // First things first, we check the flag to identify if we should initialize
    // the Elementary runtime and engine.
    if (shouldInitialize.exchange(false))
    {
        elementaryRuntime = std::make_unique<elem::Runtime<float>>(lastKnownSampleRate, lastKnownBlockSize);

        elementaryRuntime->registerNodeType("convolver",
                                            [](elem::NodeId const id, double sampleRate, int const blockSize)
                                            {
                                                return std::make_shared<ConvolverNode>(id, sampleRate, blockSize);
                                            });

        // initialise, process and load into the runtime all 4 default IR assets
        process_default_IRs();
        //
        // Check if we have any user files to restore, but don't process them here
        // They will be processed during processPersistedAssetState if needed
        bool hasUserFiles = false;
        for (const auto& [slotName, asset] : assetsMap)
        {
            if (asset.hasUserStereoFile())
            {
                hasUserFiles = true;
                break;
            }
        }
        userScapeMode = hasUserFiles;
        // Værsgo!
        initJavaScriptEngine();
        runtimeSwapRequired.store(false);
        
        // Process any pending asset state now that runtime is initialized
        // Note: Asset state is now handled by the JUCE AssetManager during setStateInformation
        
        // Restore pending slot index if fileLoader is now available
        if (fileLoader && parameterState.contains("pendingSlotIndex"))
        {
            const auto& pendingSlotValue = parameterState.at("pendingSlotIndex");
            if (pendingSlotValue.isNumber()) {
                try {
                    double numValue = static_cast<elem::js::Number>(pendingSlotValue);
                    int pendingSlotIndex = static_cast<int>(std::round(numValue));
                    if (pendingSlotIndex >= 0 && pendingSlotIndex < 4) {
                        fileLoader->currentSlotIndex = pendingSlotIndex;
                        if (assetManager)
                            assetManager->setCurrentSlotIndex(pendingSlotIndex);
                        std::cout << "Restored pending slot index to: " << pendingSlotIndex << std::endl;
                    } else {
                        std::cout << "Invalid pending slot index: " << pendingSlotIndex << ", using default 0" << std::endl;
                        fileLoader->currentSlotIndex = 0;
                        if (assetManager)
                            assetManager->setCurrentSlotIndex(0);
                    }
                } catch (const std::exception& e) {
                    std::cout << "Error restoring pending slot index: " << e.what() << ", using default 0" << std::endl;
                    fileLoader->currentSlotIndex = 0;
                    if (assetManager)
                        assetManager->setCurrentSlotIndex(0);
                }
            } else {
                std::cout << "Pending slot index is not a number, using default 0" << std::endl;
                fileLoader->currentSlotIndex = 0;
                if (assetManager)
                    assetManager->setCurrentSlotIndex(0);
            }
            parameterState.erase("pendingSlotIndex");
        }
        
        slotManager->switchSlotsTo(userScapeMode, false);
    }

    // Next we iterate over the current parameter values to update our local state
    // object, which we in turn dispatch into the JavaScript engine
    auto& params = getParameters();

    // Reduce over the changed parameters to resolve our updated processor state
    for (size_t i = 0; i < parameterReadouts.size(); ++i)
    {
        // We atomically exchange an arbitrary value with a dirty flag false,
        // because we know that the next time we exchange, if the dirty flag is
        // still false, the value can be considered arbitrary. Only when we exchange
        // and find the dirty flag true do we consider the value as having been
        // written by the processor since we last looked.
        auto& current = *std::next(parameterReadouts.begin(), i);
        const auto pr = current.exchange({0.0f, false});

        if (pr.dirty)
        {
            if (const auto* pf = dynamic_cast<juce::AudioParameterFloat*>(params[i]))
            {
                auto paramId = pf->paramID.toStdString();
                parameterState.insert_or_assign(paramId, static_cast<elem::js::Number>(pr.value));
            }
        }
    }

    parameterState.insert_or_assign(USER_BANK_KEY, static_cast<elem::js::Number>(userBankManager.getUserBank()));
    
    // Update JUCE asset manager with current state
    if (assetManager)
    {
        assetManager->setCurrentBank(userBankManager.getUserBank());
        assetManager->setCurrentSlotIndex(fileLoader->currentSlotIndex);
        assetManager->setUserScapeMode(userScapeMode);
    }
    
    // reflect the current asset data in the state
    dispatchStateChange();
}

//==============================================================================
// At initialisation, start using the assetsMap straight away
// to handle each default impulse response. On disk at public/assets/impulse-responses
// these are stereo wav files called LIGHT.wav, SURFACE.wav, TEMPLE.wav, DEEPNESS.wav
// and should be consumed in proper order. Refer to DEFAULT_SLOT_NAMES global for that.
bool Processor::initialiseDefaultFileAssets()
{
#if ELEM_DEV_LOCALHOST
    auto assetsDir =
        juce::File(juce::String("~/Programming/ProgrammingSubFolder/NEL_ScapeRVB/"
                                "public/assets/impulse-responses"));
#else
    auto assetsDir = util::getAssetsDirectory().getChildFile("assets/impulse-responses");
#endif

    try
    {
        if (assetsDir.isDirectory())
        {
            auto assets = assetsDir.findChildFiles(juce::File::findFiles, true);
            for (auto& file : assets)
            {
                if (file.getFileExtension().toLowerCase() == ".wav")
                {
                    SlotName slotName = slotname_from_string(file.getFileNameWithoutExtension().toStdString());;
                    std::vector<float> samples;
                    slotManager->populate_assetsMap_from_File(assetsMap, slotName, false, file, samples);
                }
            }
        }
    }
    catch (const std::exception& e)
    {
        std::cerr << e.what() << '\n';
        return false;
    }
    return true;
}

bool Processor::process_default_IRs()
{
    jassert(elementaryRuntime != nullptr);

    lastKnownSampleRate = getSampleRate();

    for (auto& [targetSlot, asset] : assetsMap)
    {
        if (targetSlot == SlotName::LAST ) continue;
        const juce::File& file = asset.get<juce::File>(Props::defaultStereoFile);
        // get a reader for the default file from the plugin bundle assets folder
        const auto reader = formatManager.createReaderFor(file);
        if (reader == nullptr)
        {
            dispatchError("Plugin Error:", "Please contact support");
            delete reader;
            return false;
        }

        for (int channel = 0; channel < 2; ++channel)
        {
            auto buffer = juce::AudioBuffer<float>();
            buffer.setSize(1, reader->lengthInSamples);
            reader->read(&buffer, 0, reader->lengthInSamples, 0, !channel, channel);

            int numSamples = buffer.getNumSamples();
            // fade in, less ER energy from the IR, as we have a whole ER engine already
            buffer.applyGainRamp(0, numSamples, 0.65, 1);
            // normalise the impulse response
            util::normaliseAudioBuffer(buffer, 0.8414); // -1.5 db
            // add the gain ramped impulse response to the virtual
            // file system

            // stash one channel of the normalised buffer data for Peaks in the VIEW
            // and populate all the Fcactory Default view asset data
            if (channel == 0)
            {
                std::vector<float> reducedSamples = util::reduceBufferToPeaksData(buffer);
                slotManager->populate_assetsMap_from_File(assetsMap, targetSlot, false, file, reducedSamples);
            }

            // ▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮
            juce::String vfsPathname = file.getFileNameWithoutExtension(); // "AMBIENCE.wav" -> "AMBIENCE"
            std::string name = vfsPathname.toStdString() + '_' + std::to_string(channel);
            if (elementaryRuntime)
                elementaryRuntime->updateSharedResourceMap(name, buffer.getReadPointer(0), numSamples);

            // Get the reverse from a little way, so its less dragged out
            int shorter = numSamples * 0.75;
            buffer.reverse(0, shorter);
            // add the shaped impulse response to the virtual file system
            std::string reversedName = REVERSE_BUFFER_PREFIX + name;
            // ▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮
            if (elementaryRuntime)
                elementaryRuntime->updateSharedResourceMap(reversedName, buffer.getReadPointer(0), shorter);
            // done, next channel
        }
        // done next asset
        delete reader;
    }
    //
    // notify the front end of the updated VFS keys
    inspectVFS();
    return true;
}


// todo: is this being called?
bool Processor::validateUserUpload(const juce::File& selectedFile)
{
    if (!selectedFile.existsAsFile())
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::FILE_NOT_FOUND)));
        return false;
    }

    const juce::String& file_path = selectedFile.getFullPathName();
    // const juce::String slot_as_key(toString(fromIndex(fileLoader->currentSlotIndex)));

    // Check if valid extension
    if (!selectedFile.hasFileExtension("wav;WAV;aiff;AIFF"))
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::FILETYPE_NOT_SUPPORTED)));
        return false;
    }

    // Check if file size is larger than 5MB
    if (selectedFile.getSize() > 5 * 1024 * 1024)
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::FILESIZE_EXCEEDED)));
        return false;
    }
    // Check if filename contains reserved default slot keywords
    if (selectedFile.getFileNameWithoutExtension().containsWholeWord("TEMPLE") ||
        selectedFile.getFileNameWithoutExtension().containsWholeWord("SURFACE") ||
        selectedFile.getFileNameWithoutExtension().containsWholeWord("DEEPNESS") ||
        selectedFile.getFileNameWithoutExtension().containsWholeWord("LIGHT"))
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::DO_NOT_OVERWRITE_DEFAULTS)));
        return false;
    }
    // validated
    return true;
}

bool Processor::process_user_IR(const juce::File& file, const SlotName& targetSlot)
{
    if (targetSlot == SlotName::LAST ) return false;
    if (!elementaryRuntime) {
        std::cout << "process_user_IR: Runtime not initialized, deferring processing" << std::endl;
        return false;
    }
    // first validate the upload
    if (!validateUserUpload(file)) return false;

    // Create an AudioBuffer to hold the audio data
    lastKnownSampleRate = getSampleRate();
    auto buffer1 = juce::AudioBuffer<float>();
    // Check the userCutoffChoice is set
    if (!userCutoffChoice)
    {
        userCutoffChoice = 160;
    }
    // Create a reader for the file
    const auto reader = formatManager.createReaderFor(file);
    // First checkpoint, if the reader is null, something went wrong
    if (reader == nullptr)
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::FILE_NOT_READABLE)));
        delete reader;
        return false;
    }

    const auto numChannels = reader->numChannels;

    //  TODO: add support for mono files
    if (numChannels < 2 || numChannels > 2)
    {
        dispatchError("File error:", errorStatuses(static_cast<int>(ScapeError::FILE_NOT_STEREO)));
        return false;
    }

    // As the source files are strictly stereo and the VFS is strictly
    // one channel buffers, we aim to create a VFS entry for eeach
    // state using the following naming convention:
    // ▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮
    // GENERATED VFS ASSETS FROM EACH STEREO INPUT FILE
    // USERBANK_{userBank}_{slotName}_0 :            the forward playing left channel of the stereo file
    // USERBANK_{userBank}_{slotName}_1 :            the forward playing right channel of the stereo file
    // REVERSED_USERBANK_{userBank}_{slotName}_0:   the reverse playing left channel of the stereo file
    // REVERSED_USERBANK_{userBank}_{slotName}_1 :   the reverse playing right channel of the stereo file

    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ DSP ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
    for (int channel = 0; channel < numChannels; ++channel)
    {
        auto buffer2 = juce::AudioBuffer<float>();
        buffer2.setSize(1, reader->lengthInSamples);
        reader->read(&buffer2, 0, reader->lengthInSamples, 0, !channel, channel);

        int numSamples = buffer2.getNumSamples();
        // fade in, less ER energy from the IR, as we have a whole ER engine already
        buffer2.applyGainRamp(0, numSamples, 0.65, 1);
        // normalise the impulse response
        util::normaliseAudioBuffer(buffer2, 0.8414); // -1.5 db
        // add the gain ramped impulse response to the virtual
        // file system

        // stash one channel of the normalised buffer data for Peaks in the VIEW
        // and populate all the user view asset data
        if (channel == 0)
        {
            const std::vector<float> reducedSamples = util::reduceBufferToPeaksData(buffer2);
            assetsMap.at(targetSlot).set(Props::cutOffChoice, userCutoffChoice);
            slotManager->populate_assetsMap_from_File(assetsMap, targetSlot, true, file, reducedSamples);
        }

        // apply the high pass filter
        juce::dsp::ProcessSpec spec{};
        spec.sampleRate = getSampleRate();
        spec.maximumBlockSize = numSamples;
        spec.numChannels = 1;
        stateVariableFilter.reset();
        stateVariableFilter.prepare(spec);
        stateVariableFilter.setType(juce::dsp::StateVariableTPTFilterType::highpass);
        stateVariableFilter.setCutoffFrequency(userCutoffChoice);
        auto outputBlock = juce::dsp::AudioBlock<float>(buffer2);
        juce::dsp::ProcessContextReplacing<float> context(outputBlock);
        stateVariableFilter.process(context);

        // ▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮
        auto name = prefixUserBank(slotname_to_string(targetSlot) + "_" + std::to_string(channel));
        if (elementaryRuntime)
        {
            elementaryRuntime->updateSharedResourceMap(name, buffer2.getReadPointer(0), numSamples);
        }
        const int shorter = numSamples * 0.75;
        buffer2.reverse(0, shorter);
        // add the shaped impulse response to the virtual file system
        std::string reversedName = REVERSE_BUFFER_PREFIX + name;
        // ▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮▮▮▮elem▮▮▮runtime▮▮▮
        if (elementaryRuntime)
        {
            elementaryRuntime->updateSharedResourceMap(reversedName, buffer2.getReadPointer(0), shorter);
        }
        // done, next channel
    }
    // IMPORTANT: delete the reader to avoid memory leaks
    delete reader;
    // notify the front end of the updated VFS keys
    inspectVFS();
    return true;
}

std::string Processor::prefixUserBank(const std::string& name) const
{
    return "USERBANK_" + std::to_string(userBankManager.getUserBank()) + "_" + name;
}

void Processor::pruneVFS() const
{
    if (elementaryRuntime)
        elementaryRuntime->pruneSharedResourceMap();
}

/*
 * Call the runtime to get its immutable
 * Map of audio buffer resources
 * then construct a JSON string of the keys and dispatch to view
 */
void Processor::inspectVFS()
{
    if (elementaryRuntime == nullptr)
        return;
    auto vfs = elementaryRuntime->getSharedResourceMapKeys();
    if (vfs.begin() == vfs.end()) return;
    std::vector<std::string> allKeys;
    std::vector<std::string> slotKeys;
    //=== couple the vfs keys with each slot by name
    for (auto& [slotName, asset] : assetsMap)
    {
        slotKeys.clear();
        for (const auto& path : vfs)
        {
            if (path.find(slotname_to_string(slotName)) != std::string::npos)
            {
                slotKeys.push_back(path);
                allKeys.push_back(path);
            }
        }
        asset.set(Props::vfs_keys, slotKeys);
        assetsMap.insert_or_assign(slotName, asset);
    }
    //=== dispatch all the keys as one array
    parameterState.insert_or_assign(VFS_KEYS, allKeys);
}


//=== FRONT END IS CONNECTED VIA WEBSOCKET SERVER ===
// We launch that when the WebView calls ready()
void Processor::runWebServer()
{
    auto address = "127.0.0.1";
#if ELEM_DEV_LOCALHOST
    uint16_t preferredPortNum = 13755; // dev with fixed port. 0 for random port when building
#else
    uint16_t preferredPortNum = 0;
#endif
    if (server && server->isOpen())
    {
        std::cout << "Web server was already open." << std::endl;
        return;
    }
    // <<...If you pass 0 for the port number, a free one will be automatically
    // chosen...>> as we don't want every plugin instance under the same server,
    // we use a random port and pass it over to the UI client
    bool openedOK = server->open(
        address, preferredPortNum, 0,
        // Create a new clientInstance for each connector.
        [this]() -> std::unique_ptr<choc::network::HTTPServer::ClientInstance>
        {
            clientInstance = std::make_unique<ViewClientInstance>(*this);
            return std::move(clientInstance);
        },
        // Handle some kind of server error..
        [this](const std::string& error)
        {
            /*
            ⚡︎ Undefined Behaviour ⚡︎
            js context seems to be dead
            dispatching JS error crashes BitWig but not Reaper
               // dispatchError("Error: ", error);
            */
            std::cout << "Web server error: " << error << std::endl;
        });

    if (!openedOK)
    {
        std::cout << "Error: Could not connect with UI." << std::endl;
    }

    std::cout << "Web server is running on port " << std::to_string(server->getPort()) << std::endl;
}

//==============================================================================
bool Processor::isBusesLayoutSupported(const AudioProcessor::BusesLayout& layouts) const { return true; }

void Processor::createParameters(const std::vector<elem::js::Value>& parameters)
{
    for (const auto& parameter : parameters)
    {
        if (!parameter.isObject())
            continue;

        const auto paramId = parameter.getWithDefault("paramId", elem::js::String("unknown"));
        const auto name = parameter.getWithDefault("name", elem::js::String("Unknown"));
        const auto minValue = parameter.getWithDefault("min", static_cast<elem::js::Number>(0));
        const auto maxValue = parameter.getWithDefault("max", static_cast<elem::js::Number>(1));
        const auto defaultValue = parameter.getWithDefault("defaultValue", static_cast<elem::js::Number>(0.5));
        const auto step = parameter.getWithDefault("step", static_cast<elem::js::Number>(0));

        // DEPRECATED :not using boolean host params, they were not functioning
        // as expected.
        if (parameter.getWithDefault("isBoolean", false))
        {
            auto* p =
                new juce::AudioParameterBool(juce::ParameterID(paramId, 1), name, static_cast<bool>(defaultValue));

            // Keep a map from parameter ID to the juce audio parameter
            // to avoid looping over the parameter list every time one changes
            parameterMap.insert({paramId, p});

            p->addListener(this);
            addParameter(p);

            // Push a new ParameterReadout onto the list to represent this parameter
            parameterReadouts.emplace_back(ParameterReadout{static_cast<float>(defaultValue), false});

            // Update our state object with the default parameter value
            parameterState.insert_or_assign(paramId, defaultValue);
        }
        else
        {
            auto* p = new juce::AudioParameterFloat(
                juce::ParameterID(paramId, 1), name,
                {static_cast<float>(minValue), static_cast<float>(maxValue), static_cast<float>(step)},
                static_cast<float>(defaultValue));

            // Keep a map from parameter ID to the juce audio parameter
            // to avoid looping over the parameter list every time one changes
            parameterMap.insert({paramId, p});

            p->addListener(this);
            addParameter(p);

            // Push a new ParameterReadout onto the list to represent this parameter
            parameterReadouts.emplace_back(ParameterReadout{static_cast<float>(defaultValue), true});

            // Update our state object with the default parameter value
            parameterState.insert_or_assign(paramId, defaultValue);
        }
    }
}

juce::AudioProcessorEditor* Processor::createEditor()
{
    editor = new WebViewEditor(this, util::getAssetsDirectory(), 840 * 1.25, 480 * 1.25);

    // KEYZY LICENSE ACTIVATION
    // -----------
    // semi-online license activation

    editor->handleUnlockEvent = [this](const choc::value::Value& v)
    {
        // const bool hasSerial =
        //     v.hasObjectMember("serial") && v["serial"].isString() && v["serial"].getString().length() > 0;
        // const bool shouldActivate = licenseStatus != Keyzy::LicenseStatus::VALID;

        // if (!hasSerial && shouldActivate)
        // {
        //     licenseStatus = licenseActivator.activateSemiOnline();
        // }
        // else if (hasSerial && shouldActivate)
        // {
        //     const auto serial = v["serial"].getString();
        //     licenseStatus = licenseActivator.activateSemiOnline(serial.data());
        // }

        // sendJavascriptToUI("globalThis.__onUnlock__('" + unlock::errorStatuses(licenseStatus) + "')");
        // // also send back the current host info
        // const juce::PluginHostType hostType;
        // const std::string hostDescription = static_cast<const char *>(hostType.getHostDescription());
        // sendJavascriptToUI("globalThis.__hostInfo__('" + hostDescription + "')");
    };

    editor->ready = [this]()
    {
        runWebServer();
        dispatchServerInfo();
        dispatchStateChange();
    };

    editor->pruneVFS = [this]()
    {
        pruneVFS();
        dispatchStateChange();
    };

    editor->closeServer = [this]()
    {
        server->close();
    };

    // When setting a parameter value, we simply tell the host. This will in turn
    // fire a parameterValueChanged event, which will catch and propagate through
    // dispatching a state change event
    editor->setParameterValue = [this](const std::string& paramId, float value)
    {
        if (parameterMap.contains(paramId))
        {
            std::visit(
                [this, value](auto&& param)
                {
                    using T = std::decay_t<decltype(param)>;

                    if constexpr (std::is_same_v<T, juce::AudioParameterFloat*>)
                    {
                        param->beginChangeGesture();
                        param->setValueNotifyingHost(value);
                        param->endChangeGesture();
                    }
                    else if constexpr (std::is_same_v<T, juce::AudioParameterBool*>)
                    {
                        param->beginChangeGesture();
                        param->setValueNotifyingHost(static_cast<bool>(value));
                        param->endChangeGesture();
                    }
                },
                parameterMap[paramId]);
        }
    };

#if ELEM_DEV_LOCALHOST
    editor->reload = [this]()
    {
        initJavaScriptEngine();
        dispatchStateChange();
    };

#endif

    return editor;
}

bool Processor::hasEditor() const { return true; }
const juce::String Processor::getName() const { return "NEL-ScapeSpace"; }
bool Processor::acceptsMidi() const { return false; }
bool Processor::producesMidi() const { return false; }
bool Processor::isMidiEffect() const { return false; }
double Processor::getTailLengthSeconds() const { return 3.0; }

int Processor::getNumPrograms()
{
    return 1; // NB: some hosts don't cope very well if you tell them there are 0
    // programs, so this should be at least 1, even if you're not really
    // implementing programs.
}

int Processor::getCurrentProgram() { return 0; }

void Processor::setCurrentProgram(int /* index */)
{
}

const juce::String Processor::getProgramName(int /* index */) { return {}; }

void Processor::changeProgramName(int /* index */, const juce::String& /* newName */)
{
}

// ▮▮▮▮▮▮juce▮▮▮▮▮▮elem▮▮▮▮▮▮realtime ▮▮▮▮▮▮
void Processor::prepareToPlay(double sampleRate, int samplesPerBlock)
{
    // Some hosts call `prepareToPlay` on the real-time thread, some call it on
    // the main thread. To address the discrepancy, we check whether anything has
    // changed since our last known call. If it has, we flag for initialization of
    // the Elementary engine and runtime, then trigger an async update.
    //
    // JUCE will synchronously handle the async update if it understands
    // that we're already on the main thread.
    if (sampleRate != lastKnownSampleRate || samplesPerBlock != lastKnownBlockSize)
    {
        lastKnownSampleRate = sampleRate;
        lastKnownBlockSize = samplesPerBlock;
        runtimeSwapRequired.store(true);
    }
    // Now that the environment is set up, push our current state
    triggerAsyncUpdate();
}

void Processor::releaseResources()
{
    // When playback stops, you can use this as an opportunity to free up any
    // spare memory, etc.
}

void Processor::processBlock(juce::AudioBuffer<float>& buffer, juce::MidiBuffer& /* midiMessages */)
{
    juce::ScopedNoDenormals noDenormals;
    // If the license is invalid, we clear the buffer and return
    // if (licenseStatus != Keyzy::LicenseStatus::VALID)
    // {
    //     buffer.clear();
    //     return;
    // }

    // Copy the input so that our input and output buffers are distinct
    scratchBuffer.makeCopyOf(buffer, true);

    // Process the elementary runtime
    if (elementaryRuntime != nullptr && !runtimeSwapRequired)

    {
        elementaryRuntime->process(const_cast<const float**>(scratchBuffer.getArrayOfWritePointers()),
                                   getTotalNumInputChannels(), const_cast<float**>(buffer.getArrayOfWritePointers()),
                                   buffer.getNumChannels(), buffer.getNumSamples(), nullptr);
    }
    else
    {
        // Clear the output buffer to prevent any garbage if our runtime isn't ready
        buffer.clear();
    }

    if (runtimeSwapRequired)
    {
        shouldInitialize.store(true);
        triggerAsyncUpdate();
    }
}

void Processor::parameterValueChanged(int parameterIndex, float newValue)
{
    // Mark the updated parameter value in the dirty list
    if (parameterIndex >= 0 && parameterIndex < static_cast<int>(parameterReadouts.size())) {
        auto& readout = *std::next(parameterReadouts.begin(), parameterIndex);
        readout.store({newValue, true});
        triggerAsyncUpdate();
    }
}

void Processor::parameterGestureChanged(int, bool)
{
    // Not implemented
}


// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
void Processor::initJavaScriptEngine()
{
    jsContext = choc::javascript::createQuickJSContext();

    choc::javascript::registerConsoleFunctions(jsContext);

    // Install some native interop functions in our JavaScript environment
    jsContext.registerFunction(NATIVE_MESSAGE_FUNCTION_NAME, [this](choc::javascript::ArgumentList args)
    {
        if (!elementaryRuntime || args.numArgs == 0 || args[0] == nullptr) return choc::value::Value();
        
        const auto batch = elem::js::parseJSON(args[0]->toString());
        const auto rc = elementaryRuntime->applyInstructions(batch);

        if (rc != elem::ReturnCode::Ok())
        {
            dispatchError("Runtime Error", elem::ReturnCode::describe(rc));
        }

        return choc::value::Value();
    });

    const auto dspEntryFileContents = loadDspEntryFileContents();

    if (dspEntryFileContents.has_value())
    {
        jsContext.evaluateExpression(dspEntryFileContents.value());
    }
    else
    {
        return;
    }

    // Re-hydrate from current state
    const auto expr = serialize(jsFunctions::hydrateScript, elementaryRuntime->snapshot());
    jsContext.evaluateExpression(expr);

    jsContext.registerFunction("__log__", [this](choc::javascript::ArgumentList args)
    {
        const auto* kDispatchScript = R"script(
(function() {
  console.log(...JSON.parse(%));
  return true;
})();
)script";

        // Forward logs to the editor if it's available; then logs show up in
        // one place.
        //
        // If not available, we fall back to std out.
        if (auto* editor = dynamic_cast<WebViewEditor*>(getActiveEditor()))
        {
            auto v = choc::value::createEmptyArray();

            for (size_t i = 0; i < args.numArgs; ++i)
            {
                v.addArrayElement(*args[i]);
            }

            auto expr =
                juce::String(kDispatchScript).replace("%", elem::js::serialize(choc::json::toString(v))).toStdString();
            editor->getWebViewPtr()->evaluateJavascript(expr);
        }
        else
        {
            for (size_t i = 0; i < args.numArgs; ++i)
            {
                DBG(choc::json::toString(*args[i]));
            }
        }

        return choc::value::Value();
    });

    // A simple shim to write various console operations to our native __log__
    // handler
    jsContext.evaluateExpression(R"shim(
(function() {
  if (typeof globalThis.console === 'undefined') {
    globalThis.console = {
      log(...args) {
        __log__('[embedded:log]', ...args);
      },
      warn(...args) {
          __log__('[embedded:warn]', ...args);
      },
      error(...args) {
          __log__('[embedded:error]', ...args);
      }
    };
  }
})();
    )shim");
}

// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
// Main function for dispatching state changes to the front end
// since using WebSockets to sync state, this function
// only really handles the Bypass toggles and the
// Reverse toggle. Everything else is handled by the
// WebSocket server responding to a requestState message
// from the front end.
void Processor::dispatchStateChange()
{
    auto currentStateMap = parameterState;
    currentStateMap.insert_or_assign(SAMPLE_RATE_KEY, lastKnownSampleRate);
    const auto expr = serialize(jsFunctions::dispatchStateChangeScript, currentStateMap);
    // Next we dispatch to the local engine which will evaluate any necessary
    // JavaScript synchronously here on the main thread
    try
    {
        jsContext.evaluateExpression(expr);
    }
    catch (std::exception& e)
    {
        dispatchError("DSP JS:", e.what());
    }
}

/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name dispatchServerInfo
 * @brief Dispatches the server port to the UI
 */

void Processor::dispatchServerInfo()
{
    // Retrieve the port number
    serverPort = server->getPort();
    // Convert the port number to a choc::value::Value
    const auto portValue = choc::value::createInt32(serverPort);
    // Send the server port to the UI
    const auto expr = serialize(jsFunctions::serverInfoScript, portValue, "%");
    if (!sendJavascriptToUI(expr))
        jsContext.evaluateExpression(expr);
}

/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name dispatchError
 * @brief Some error reporting facilities
 */
void Processor::dispatchError(std::string const& name, std::string const& message)
{
    const auto expr = juce::String(jsFunctions::errorScript)
                      .replace("@", elem::js::serialize(name))
                      .replace("%", elem::js::serialize(message))
                      .toStdString();
    // First we try to dispatch to the UI if it's available, because running this
    // step will just involve placing a message in a queue.
    if (!sendJavascriptToUI(expr))
    {
        if (errorLogQueue.size() == MAX_ERROR_LOG_QUEUE_SIZE)
        {
            errorLogQueue.pop();
        }
        errorLogQueue.push(expr);
    }
    // Next we dispatch to the local engine which will evaluate any necessary
    // JavaScript synchronously here on the main thread
    jsContext.evaluateExpression(expr);
}

/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name dispatchNativeLog
 * @brief Some logging facilities
 */
void Processor::dispatchNativeLog(std::string const& name, std::string const& message)
{
    const auto expr = juce::String(jsFunctions::logToUIScript)
                      .replace("@", elem::js::serialize(name))
                      .replace("%", elem::js::serialize(message))
                      .toStdString();
    if (!sendJavascriptToUI(expr))
    {
        if (errorLogQueue.size() == MAX_ERROR_LOG_QUEUE_SIZE)
        {
            errorLogQueue.pop();
        }
        errorLogQueue.push(expr);
    }
    jsContext.evaluateExpression(expr);
}

/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name loadDspEntryFileContents
 * @brief load the compiled dsp main.js file
 */
std::optional<std::string> Processor::loadDspEntryFileContents()
{
    // Load and evaluate our Elementary js main file
#if ELEM_DEV_LOCALHOST
    auto dspEntryFile = juce::URL("http://localhost:5173/dsp.main.js");
    auto dspEntryFileContents = dspEntryFile.readEntireTextStream().toStdString();
#else
    auto dspEntryFile = util::getAssetsDirectory().getChildFile(MAIN_DSP_JS_FILE);

    if (!dspEntryFile.existsAsFile())
        return std::nullopt;

    auto dspEntryFileContents = dspEntryFile.loadFileAsString().toStdString();
#endif

    return dspEntryFileContents;
}

/*▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name sendJavascriptToUI
 * @brief Execute js via global function bridging
 */

bool Processor::sendJavascriptToUI(const std::string& expr) const
{
    if (const auto* editor = dynamic_cast<WebViewEditor*>(getActiveEditor()))
    {
        editor->executeJavascript(expr);
        return true;
    }
    return false;
}

/*▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name serialize
 * @brief Serialize data for js
 */
std::string Processor::serialize(const std::string& function, const elem::js::Object& data,
                                 const juce::String& replacementChar)
{
    return juce::String(function)
           .replace(replacementChar, elem::js::serialize(elem::js::serialize(data)))
           .toStdString();
}

std::string Processor::serialize(const std::string& function, const choc::value::Value& data,
                                 const juce::String& replacementChar)
{
    return juce::String(function).replace(replacementChar, choc::json::toString(data)).toStdString();
}



// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
//
//  STORE
//  state when window closes or plugin is removed
//
// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state

void Processor::getStateInformation(juce::MemoryBlock& destData)
{
    std::cout << "Stashing state using JUCE ValueTree..." << std::endl;
    
    // Update asset manager with current session state
    if (assetManager)
    {
        assetManager->setCurrentBank(userBankManager.getUserBank());
        assetManager->setCurrentSlotIndex(fileLoader->currentSlotIndex);
        assetManager->setUserScapeMode(userScapeMode);
        
        // Migrate current assetsMap to asset manager before saving
        migrateAssetsToJuceManager();
        
        // Use JUCE serialization for asset state
        juce::MemoryBlock assetData;
        assetManager->getStateInformation(assetData);
        
        // Combine parameter state and asset state
        auto combinedState = parameterState;
        
        // Store asset data as base64 string in parameter state
        juce::String assetDataString = juce::Base64::toBase64(assetData.getData(), assetData.getSize());
        combinedState.insert_or_assign(PERSISTED_VIEW_STATE, elem::js::String(assetDataString.toStdString()));
        
        // Store bank state and current slot index in parameter state for immediate access
        combinedState.insert_or_assign("currentUserBank", static_cast<elem::js::Number>(userBankManager.getUserBank()));
        combinedState.insert_or_assign("currentSlotIndex", static_cast<elem::js::Number>(fileLoader->currentSlotIndex));
        
        // Serialize the combined state
        const auto dataToPersist = elem::js::serialize(combinedState);
        destData.replaceAll((void*)dataToPersist.c_str(), dataToPersist.size());
    }
    else
    {
        // Fallback to old method if asset manager is not available
        std::cout << "AssetManager not available, using legacy serialization" << std::endl;
        auto fallbackState = parameterState;
        if (!assetsMap.empty())
            fallbackState.insert_or_assign(PERSISTED_VIEW_STATE, assetHelpers::serialise_assets_map_entries(assetsMap));
        
        fallbackState.insert_or_assign("currentUserBank", static_cast<elem::js::Number>(userBankManager.getUserBank()));
        fallbackState.insert_or_assign("currentSlotIndex", static_cast<elem::js::Number>(fileLoader->currentSlotIndex));
        
        const auto dataToPersist = elem::js::serialize(fallbackState);
        destData.replaceAll((void*)dataToPersist.c_str(), dataToPersist.size());
    }
}

// Validate restored stateObject data to prevent bad_variant_access crashes
// Generic validation function to remove uninitialized, null, or invalid values
void Processor::validateState(elem::js::Object& stateObject)
{
    std::cout << "Running generic state validation..." << std::endl;

    // Collect keys to remove to avoid iterator invalidation
    std::vector<std::string> keysToRemove;

    // Check all stateObject entries for validity
    for (auto& [key, value] : stateObject)
    {
        bool shouldRemove = false;
        std::string reason;

        try {
            // Check for null or undefined values
            if (value.isNull() || value.isUndefined()) {
                shouldRemove = true;
                reason = "null or undefined value";
            }
            // Check for invalid numbers (NaN, infinity)
            else if (value.isNumber()) {
                double numValue = static_cast<elem::js::Number>(value);
                if (std::isnan(numValue) || std::isinf(numValue)) {
                    shouldRemove = true;
                    reason = "NaN or infinite number";
                }
            }
            // Check for empty strings (optional - uncomment if needed)
            else if (value.isString()) {
                std::string strValue = static_cast<elem::js::String>(value);
                if (strValue.empty()) {
                    shouldRemove = true;
                    reason = "empty string";
                }
            }
            // Check for empty arrays (optional - uncomment if needed)
            else if (value.isArray()) {
                elem::js::Array arrValue = static_cast<elem::js::Array>(value);
                if (arrValue.size() == 0) {
                    shouldRemove = true;
                    reason = "empty array";
                }
            }
        }
        catch (const std::exception& e) {
            shouldRemove = true;
            reason = std::string("cast exception: ") + e.what();
        }

        if (shouldRemove) {
            std::cout << "WARNING: Key '" << key << "' has " << reason << ", marking for removal" << std::endl;
            keysToRemove.push_back(key);
        }
    }

    // Remove invalid keys
    for (const auto& key : keysToRemove) {
        stateObject.erase(key);
        std::cout << "Removed invalid state key: " << key << std::endl;
    }

    std::cout << "Generic state validation completed, removed " << keysToRemove.size() << " invalid entries" << std::endl;
}

// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
//
//  RESTORE
//  state when window opens or plugin is loaded
//
// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
void Processor::setStateInformation(const void* data, int sizeInBytes)
{
    std::cout << "Recalling state using JUCE ValueTree..." << std::endl;
    elem::js::Value allStateParsed;
    
    // restore the data the host stashed previously
    const auto jsonString = std::string(static_cast<const char*>(data), sizeInBytes);
    
    // try to deserialise the whole stashed data string
    try
    {
        allStateParsed = elem::js::parseJSON(jsonString);
    }
    catch (...)
    {
        // Failed to parse the incoming state
        dispatchError("Data Error:", "Failed to restore plugin state!");
        return;
    }
    
    auto o = allStateParsed.getObject();
    juce::String assetDataString;
    
    for (auto& [key, value] : o)
    {
        bool isParam = key != PERSISTED_VIEW_STATE;

        if (isParam)
        {
            parameterState.insert_or_assign(key, value);
            
            // Restore bank state and slot index
            if (key == "currentUserBank")
            {
                if (value.isNumber()) {
                    try {
                        double numValue = static_cast<elem::js::Number>(value);
                        int bankToRestore = static_cast<int>(std::round(numValue));
                        if (bankToRestore >= 0) {
                            userBankManager.resetUserBank();
                            for (int i = 0; i < bankToRestore; i++) {
                                userBankManager.incrementUserBank();
                            }
                            std::cout << "Restored user bank to: " << userBankManager.getUserBank() << std::endl;
                        } else {
                            std::cout << "Invalid user bank value: " << bankToRestore << ", ignoring" << std::endl;
                        }
                    } catch (const std::exception& e) {
                        std::cout << "Error restoring user bank: " << e.what() << std::endl;
                    }
                } else {
                    std::cout << "Error restoring user bank: value is not a number" << std::endl;
                }
            }
            else if (key == "currentSlotIndex")
            {
                if (value.isNumber()) {
                    try {
                        double numValue = static_cast<elem::js::Number>(value);
                        int slotIndexToRestore = static_cast<int>(std::round(numValue));
                        // Only store if the value is valid
                        if (slotIndexToRestore >= 0 && slotIndexToRestore < 4) {
                            // Always defer slot index restoration to avoid crashes during preset recall
                            parameterState.insert_or_assign("pendingSlotIndex", static_cast<elem::js::Number>(slotIndexToRestore));
                            std::cout << "Deferring slot index " << slotIndexToRestore << " restoration until plugin is fully initialized" << std::endl;
                        } else {
                            std::cout << "Invalid slot index value: " << slotIndexToRestore << ", ignoring" << std::endl;
                        }
                    } catch (const std::exception& e) {
                        std::cout << "Error restoring slot index: " << e.what() << std::endl;
                    }
                } else {
                    std::cout << "Error restoring slot index: value is not a number" << std::endl;
                }
            }
        }
        else
        {
            // Extract asset state data (now stored as base64 string)
            if (value.isString())
            {
                assetDataString = juce::String(value.toString());
            }
            else
            {
                // Legacy format - try to process as elem::js::Object for backward compatibility
                try
                {
                    auto legacyAssetState = value.getObject();
                    processPersistedAssetState(legacyAssetState);
                    std::cout << "Processed legacy asset state format" << std::endl;
                }
                catch (const std::exception& e)
                {
                    std::cout << "Failed to process legacy asset state: " << e.what() << std::endl;
                }
            }
        }
    }

    // Process JUCE asset state if available
    if (assetManager && assetDataString.isNotEmpty())
    {
        try
        {
            juce::MemoryBlock assetData;
            juce::MemoryOutputStream stream(assetData, false);
            
            if (juce::Base64::convertFromBase64(stream, assetDataString))
            {
                assetManager->setStateInformation(assetData.getData(), static_cast<int>(assetData.getSize()));
                
                // Update session state from asset manager
                userBankManager.resetUserBank();
                int restoredBank = assetManager->getCurrentBank();
                for (int i = 0; i < restoredBank; i++) {
                    userBankManager.incrementUserBank();
                }
                
                // Update user scape mode
                userScapeMode = assetManager->getUserScapeMode();
                
                std::cout << "Successfully restored JUCE asset state" << std::endl;
            }
        }
        catch (const std::exception& e)
        {
            std::cout << "Error processing JUCE asset state: " << e.what() << std::endl;
        }
    }

    // just in case, remove view data from the active param state updates
    // so the view data doesn't get sent on every update
    if (parameterState.contains(PERSISTED_VIEW_STATE))
        parameterState.erase(PERSISTED_VIEW_STATE);

    // Run sanity check on restored state data
    validateState(parameterState);

    shouldInitialize.store(true);
    handleAsyncUpdate();
    dispatchStateChange();
}

void Processor::migrateAssetsToJuceManager()
{
    if (!assetManager)
        return;
    
    std::cout << "Migrating assetsMap to JuceAssetManager..." << std::endl;
    
    // Migrate all assets from the legacy assetsMap to the new asset manager
    for (const auto& [slotName, asset] : assetsMap)
    {
        if (slotName == SlotName::LAST)
            continue;
            
        assetManager->populateAssetFromAsset(slotName, asset);
    }
    
    std::cout << "Migration completed." << std::endl;
}

// todo: needs to handle a persisted HPF cutoff value
void Processor::processPersistedAssetState(const elem::js::Object& target_slot_and_serialised_asset)
{
    // Iterate through assetState to collect asset
    // Should be serialised data
    std::cout << "Processing persisted Asset State..." << std::endl;
    
    // Track which slots have been processed from saved data
    std::set<SlotName> processedSlots;
    
    for (auto& [k, v] : target_slot_and_serialised_asset)
    {
        if (k == "LAST" || k.empty() || !v.isString()) continue;

        SlotName targetSlot = slotname_from_string(k);
        processedSlots.insert(targetSlot);
        
        const auto serialisedAsset = v.toString();
        const auto incomingAsset = elem::js::parseJSON(serialisedAsset).getObject();
        Asset convertedAsset = assetHelpers::convert_to_asset(incomingAsset);
        
        // Validate that user files still exist before restoring
        bool fileProcessed = false;
        if (convertedAsset.hasUserStereoFile())
        {
            const auto& userFile = convertedAsset.get<juce::File>(Asset::Props::userStereoFile);
            if (userFile.existsAsFile())
            {
                std::cout << "Restoring user file for slot " << k << ": " << userFile.getFullPathName() << std::endl;
                // Only process user IR if runtime is initialized
                if (elementaryRuntime)
                {
                    process_user_IR(userFile, targetSlot);
                    fileProcessed = true;  // Don't overwrite the asset - it has fresh peaks data
                }
                else
                {
                    std::cout << "Runtime not initialized, user IR processing will be deferred" << std::endl;
                }
            }
            else
            {
                std::cout << "User file no longer exists for slot " << k << ", clearing user data" << std::endl;
                convertedAsset.clear_userfiles();
            }
        }
        
        // Only restore asset if we didn't just process fresh data
        if (!fileProcessed)
        {
            slotManager->populate_assetsMap_from_Asset(assetsMap, targetSlot, convertedAsset);
        }
    }
    
    // Ensure all slots have valid default data - fill any missing slots
    auto slot = SlotName::LIGHT;
    while (slot != SlotName::LAST)
    {
        if (!processedSlots.contains(slot))
        {
            std::cout << "Slot " << slotname_to_string(slot) << " not found in saved data, ensuring default asset exists" << std::endl;
            // Check if assetsMap has this slot, if not, it should have been populated during initialization
            if (!assetsMap.contains(slot))
            {
                std::cout << "ERROR: Slot " << slotname_to_string(slot) << " missing from assetsMap - this should not happen" << std::endl;
            }
        }
        nextSlotNoWrap(slot);
    }
}

//==============================================================================
// This creates new instances of the plugin..
juce::AudioProcessor*JUCE_CALLTYPE createPluginFilter() { return new Processor(); }
