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

    // Remove all listeners from params, standard JUCE pattern
    for (auto& p : getParameters())
    {
        p->removeListener(this);
    }
}


void Processor::clear_userFiles_in_assets_map()
{
    // Initial slot
    std::cout << "Clearing userFiles_in_assets_map..." << std::endl;
    auto slot = SlotName::LIGHT;
    while (slot != SlotName::LAST)
    {
        assetsMap[slot].clear_userfiles();
        nextSlotNoWrap(slot);
    }
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
        processDefaultIRs();
        //
        for (const auto& [slotName, asset] : assetsMap)
        {
            SlotName targetSlot = slotName;
            if (asset.hasUserStereoFile())
                processUserResponseFile(asset.get<juce::File>(Props::userStereoFile), targetSlot);
        }
        // Værsgo!
        initJavaScriptEngine();
        runtimeSwapRequired.store(false);
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
                state.insert_or_assign(paramId, static_cast<elem::js::Number>(pr.value));
            }
        }
    }

    state.insert_or_assign(USER_BANK_KEY, static_cast<elem::js::Number>(userBankManager.getUserBank()));
    // reflect the current asset data in the state
    updateStateFromAssetsMap();
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
                    SlotName slotName = fromString( file.getFileNameWithoutExtension().toStdString());;
                    std::vector<float> samples;
                    slotManager->populateSlotFromFileData( assetsMap, slotName, false, file, samples);
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

bool Processor::processDefaultIRs()
{
    jassert(elementaryRuntime != nullptr);

    lastKnownSampleRate = getSampleRate();

    for (auto& [targetSlot, asset] : assetsMap)
    {
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
                slotManager->populateSlotFromFileData(assetsMap, targetSlot, false, file, reducedSamples);
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
    slotManager->peaksDirty.store(true);
    inspectVFS();
    return true;
}


void Processor::updateStateFromAssetsMap()
{
    assetState.insert_or_assign(PERSISTED_ASSET_MAP, assetsMapToValue(assetsMap));
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

bool Processor::processUserResponseFile(const juce::File& file, const SlotName& targetSlot)
{
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
            slotManager->populateSlotFromFileData(assetsMap, targetSlot, true, file, reducedSamples);
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
        auto name = prefixUserBank(toString(targetSlot) + "_" + std::to_string(channel));
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
    slotManager->peaksDirty.store(true);
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
    // couple the vfs keys with each slot by name
    for (auto& [slotName, asset] : assetsMap)
    {
        slotKeys.clear();
        for (const auto& path : vfs)
        {
            if (path.find(toString(slotName)) != std::string::npos)
            {
                slotKeys.push_back(path);
                allKeys.push_back(path);
            }
        }
        asset.set(Props::vfs_keys, slotKeys);
        assetsMap.insert_or_assign(slotName, asset);
    }
    state.insert_or_assign(VFS_KEYS, allKeys);
}


//============== FRONT END IS CONNECTED VIA WEBSOCKET SERVER ================
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
        if (const auto isBoolean = parameter.getWithDefault("isBoolean", false))
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
            state.insert_or_assign(paramId, defaultValue);
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
            state.insert_or_assign(paramId, defaultValue);
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
    auto& readout = *std::next(parameterReadouts.begin(), parameterIndex);
    readout.store({newValue, true});
    triggerAsyncUpdate();
}

void Processor::parameterGestureChanged(int, bool)
{
    // Not implemented
}

// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
// Function to convert std::map<SlotName, Asset> to elem::js::Value
// do we need to stash the peaks?
elem::js::Value Processor::assetsMapToValue(const std::map<SlotName, Asset>& map)
{
    elem::js::Object obj;
    for (const auto& [key, value] : map)
    {
        obj[toString(key)] = value.toJsValue();
    }
    return elem::js::Value(obj);
}

// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
void Processor::initJavaScriptEngine()
{
    jsContext = choc::javascript::createQuickJSContext();

    choc::javascript::registerConsoleFunctions(jsContext);

    // Install some native interop functions in our JavaScript environment
    jsContext.registerFunction(NATIVE_MESSAGE_FUNCTION_NAME, [this](choc::javascript::ArgumentList args)
    {
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
    auto currentStateMap = state;
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
std::optional<std::string> Processor::loadDspEntryFileContents() const
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
    auto dataToPersist = elem::js::Object();
    dataToPersist.insert_or_assign(PERSISTED_HOST_PARAMETERS, elem::js::Value(state));
    dataToPersist.insert_or_assign(PERSISTED_ASSET_MAP, assetState);

    const auto serialized = elem::js::serialize(dataToPersist);

    destData.replaceAll((void*)serialized.c_str(), serialized.size());
}

// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
//
//  RESTORE
//  state when window opens or plugin is loaded
//
// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
void Processor::setStateInformation(const void* data, int sizeInBytes)
{
    const auto jsonString = std::string(static_cast<const char*>(data), sizeInBytes);
    try
    {
        auto parsed = elem::js::parseJSON(jsonString);
        auto persistedData = parsed.getObject();

        for (auto& [key, value] : persistedData)
        {
            if (key == PERSISTED_HOST_PARAMETERS)
            {
                for (auto& [paramId, setting] : value.getObject())
                {
                    state.insert_or_assign(paramId, setting);
                }
            }
            else if (key == PERSISTED_ASSET_MAP)
            {
                assetState = value.getObject();
                if (!assetState.empty())
                {
                    pruneVFS();
                    processPersistedAssetState(assetState);
                }
            }
            dispatchStateChange();
        }
    }

    catch (...)
    {
        // Failed to parse the incoming state, or the state we did parse was not
        // actually an object type. How you handle it is up to you.
        dispatchError("Data Error:", "Failed to restore plugin state!");
    }
}

// Function to convert elem::js::Object to std::map<SlotName, Asset>
std::map<SlotName, Asset> Processor::convertToAssetMap(const elem::js::Object& assetStateObject) const
{
    std::map<SlotName, Asset> assetMap;
    // Ensure assetStateObject contains the expected key
    if (!assetStateObject.contains(PERSISTED_ASSET_MAP))
    {
        std::cerr << "PERSISTED_ASSETMAP key not found in assetStateObject" << std::endl;
        return assetMap;
    }

    const auto& wrapper = assetStateObject.at(PERSISTED_ASSET_MAP);

    // Ensure wrapper is an object
    if (!wrapper.isObject())
    {
        std::cerr << "PERSISTED_ASSETMAP is not an object" << std::endl;
        return assetMap;
    }
    const auto& wrapperObject = wrapper.getObject();
    for (const auto& entry : wrapperObject)
    {
        const std::string& key = entry.first;
        const elem::js::Value& value = entry.second;
        SlotName slotName = fromString(key);

        Asset asset = Asset::fromJsValue(value);
        assetMap.insert_or_assign(slotName, asset);
    }
    return assetMap;
}

void Processor::processPersistedAssetState(const elem::js::Object& assetStateObject)
{
    std::map<SlotName, Asset> savedAssetMap = convertToAssetMap(assetStateObject);
    auto assetState = std::vector<Asset>();
    SlotName targetSlot = SlotName::LIGHT;
    juce::File file;

    shouldInitialize.store(true);
    handleAsyncUpdate();

    // Create a promise and future to wait for elementaryRuntime to be initialized
    std::promise<void> promise;
    std::future<void> future = promise.get_future();

    // Launch a thread to check for elementaryRuntime initialization
    std::thread([this, &promise]()
        {
            while (elementaryRuntime == nullptr)
            {
                std::this_thread::sleep_for(std::chrono::milliseconds(10)); // Sleep for a short duration
            }
            promise.set_value(); // Set the promise value once elementaryRuntime is initialized
        })
        .detach();

    // Wait for the future to be set
    future.wait();

    // Iterate through assetState to collect userStereoFile paths
    //
    for (const std::pair<SlotName, Asset>& entry : savedAssetMap)
    {
        targetSlot = entry.first;
        const Asset& savedAsset = entry.second;

        if (savedAsset.hasUserStereoFile())
        {
            file = savedAsset.get<juce::File>(Props::userStereoFile);
            std::cout << "Restoring ▶︎ Slot: " << toString(targetSlot)
                << ", File: "
                << file.getFileName().toStdString()
                << std::endl;

            if (!processUserResponseFile(file, targetSlot))
            {
                std::cout << "Failed to restore user IRs!" << std::endl;
                continue;
            }
            // is this enough to make deep copy of saved asset?
            assetsMap[targetSlot] = savedAsset;
        }
    }
    state.insert_or_assign("scapeMode", 1.0);
}

//==============================================================================
// This creates new instances of the plugin..
juce::AudioProcessor*JUCE_CALLTYPE createPluginFilter() { return new Processor(); }
