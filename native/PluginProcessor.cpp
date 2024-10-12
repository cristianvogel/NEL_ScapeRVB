#include "PluginProcessor.h"

#include "ConvolverNode.h"
#include "Utilities.h"

//==== static member defs
elem::js::Object EffectsPluginProcessor::userData;

//======= HELPER ==============================
// A helper for locating bundled asset files

juce::File getAssetsDirectory() {
#if JUCE_MAC
    auto assetsDir = juce::File::getSpecialLocation(juce::File::SpecialLocationType::currentApplicationFile)
                         .getChildFile("Contents/Resources/dist");
#elif JUCE_WINDOWS
    auto assetsDir =
        juce::File::getSpecialLocation(
            juce::File::SpecialLocationType::currentExecutableFile)  // Plugin.vst3/Contents/<arch>/Plugin.vst3
            .getParentDirectory()                                    // Plugin.vst3/Contents/<arch>/
            .getParentDirectory()                                    // Plugin.vst3/Contents/
            .getChildFile("Resources/dist");
#else
#error "We only support Mac and Windows here yet."
#endif

    return assetsDir;
}

//======== HELPER =============================
// a helper to locat persistent data directory

juce::File getPersistentDataDirectory() {
    juce::File dataDir;

#if JUCE_MAC || JUCE_WINDOWS
    dataDir = juce::File::getSpecialLocation(juce::File::userApplicationDataDirectory).getChildFile("NeverEngineLabs");
#else
#error "We only support Mac and Windows here yet."
#endif

    // Create the directory if it doesn't exist
    if (!dataDir.exists()) dataDir.createDirectory();

    return dataDir;
}

// ▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws
/// @brief  Constructor for the ViewClientInstance WebSocket service
/// that will handle messages from the front end
/// Factor this out to a separate file without breaking everything
/// @param processor
EffectsPluginProcessor::ViewClientInstance::ViewClientInstance(EffectsPluginProcessor &processor)
    : processor(processor) {
    static int clientCount = 0;
    clientID = ++clientCount;
}
EffectsPluginProcessor::ViewClientInstance::~ViewClientInstance() { clientID = 0; }

choc::network::HTTPContent EffectsPluginProcessor::ViewClientInstance::getHTTPContent(std::string_view path) {
    // not using HTML
    return {};
}
void EffectsPluginProcessor::ViewClientInstance::upgradedToWebSocket(std::string_view path) {}
void EffectsPluginProcessor::ViewClientInstance::handleWebSocketMessage(std::string_view message) {
    // Convert std::string_view to std::string
    std::string messageStr(message);
    // Deserialize the message
    auto parsed = elem::js::parseJSON(messageStr);
    if (parsed.isNull() || parsed.isUndefined()) {
        processor.dispatchError("WS Error:", "Invalid JSON received.");
        return;
    }
    // Valid JSON-like object will have key-value pairs
    if (parsed.isObject()) {
        auto socketMessage = parsed.getObject();
        // validate the JSON object
        if (socketMessage.empty()) {
            processor.dispatchError("WS Error:", "Empty JSON object received.");
            return;
        }

        for (auto &[key, hpfValue] : socketMessage) {
            /** ▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮
             * @name 'selectFiles'
             * @brief Handle the file paths sent from the front end
             * message will include high pass cutoff frequency choice
             * as value.
             */
            if (key == "selectFiles" && hpfValue.isNumber())  // the number value is the high pass cutoff
                                                              // frequency choice
            {
                // first, request the user to select files
                // this is asynchronous because we need to
                // open a file browser on the main thread
                // ( I had to learn how to use a promise/future mechanism )
                std::promise<elem::js::Object> promise;
                std::future<elem::js::Object> future = promise.get_future();
                // Begin the asynchronous operation
                processor.requestUserFileSelection(promise);
                // Wait for the asynchronous operation to complete
                elem::js::Object gotFiles = future.get();
                // If the operation failed, dispatch a vague error message, do nada
                if (static_cast<bool>(gotFiles["success"]) == false) {
                    processor.dispatchError("File error:", "No files loaded.");
                    continue;
                }
                // If the operation succeeded, we can proceed to unwrap the file path names
                if (gotFiles["files"].isArray() == false) {
                    processor.dispatchError("File error:", "No files selected.");
                    continue;
                }
                // Get a valid array of file paths
                auto files = gotFiles["files"].getArray();

                // We should have received a high pass cutoff frequency choice as value
                // with this key, or at least have it initialised to something sensible
                processor.userCutoffChoice = fmin(160, int((elem::js::Number)hpfValue));

                // Now load and process ( hopefullly ) AUDIO FILES into the realtime VFS
                // and dispatch the file URLs to the front end
                for (const auto fileValue : files) {
                    int currentUserSlot = processor.slotManager.getSlotIndex();
                    // Cast the elem::js::Value back to a funky juce::String
                    juce::String filePath = juce::String(static_cast<std::string>(fileValue));
                    juce::File file(filePath);
                    if (file.existsAsFile()) {
                        processor.assignFileAssetToCurrentSlot(file);
                        processor.assignFilenameToCurrentSlot(file);
                        // now do the loading and processing
                        if (!processor.importAudioToRuntimeVFS(file, currentUserSlot)) {
                            continue;
                        };
                        // and generate the reduced buffer data for the front end peaks display
                        processor.updateStateWithPeaksData();
                        // and update the filenames in the processor state
                        processor.updateStateWithFilenames();
                        // keep track of the file count in the processor state
                        if (currentUserSlot == 3) {
                            break;
                        } else {
                            processor.slotManager.incrementSlotIndex();
                        }
                    }
                }
                continue;
            }

            /** ▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮
             * @name 'requestState'
             * @brief Handle a request for state
             */
            if (key == "requestState") {
                auto state = processor.state;
                auto stateKey = processor.WS_RESPONSE_KEY;
                auto peaksKey = processor.PERSISTED_USER_PEAKS;

                // Create a new JSON-like object
                elem::js::Object wrappedState;
                elem::js::Object wrappedPeaks;

                // Convert processor.peakDataForView to a std::vector<elem::js::Value>
                std::vector<elem::js::Value> peaksData;
                for (const auto &peakVector : processor.peakDataForView) {
                    std::vector<elem::js::Value> peakValues;
                    for (const auto &peak : peakVector) {
                        peakValues.push_back(elem::js::Value(peak));
                    }
                    peaksData.push_back(elem::js::Value(peakValues));
                }

                wrappedPeaks.insert_or_assign(peaksKey, elem::js::Value(peaksData));
                wrappedState.insert_or_assign(stateKey, state);

                // Serialize the wrapped state and peaks data
                std::string serializedState = elem::js::serialize(wrappedState);
                juce::String serializedPeaks = elem::js::serialize(wrappedPeaks);

                // Compute the hash of the serialized state
                std::size_t currentStateHash = std::hash<std::string>{}(serializedState);

                // Compute the hash of the serialized user audio data
                int currentPeaksHash = serializedPeaks.hashCode();

                // // Only send if the state has changed
                if (currentStateHash != processor.lastStateHash) {
                    // Send the serialized string
                    sendWebSocketMessage(serializedState);
                    // Update the last sent state hash
                    processor.lastStateHash = currentStateHash;
                }

                // Only send if the user audio data has changed
                if (currentPeaksHash != processor.lastPeaksHash) {
                    // Send the serialized string
                    sendWebSocketMessage(serializedPeaks.toStdString());
                    // Update the last sent user audio data hash
                    processor.lastPeaksHash = currentPeaksHash;
                }

                continue;
            }

            /** ▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮▮▮▮wswswsws▮▮▮
             * @name 'update from paramId'
             * @brief Here we just update a parameter directly in the processor
             */
            if (hpfValue.isNumber() && processor.parameterMap.count(key) > 0) {
                // Convert elem::js::Value to float
                float paramValue = static_cast<elem::js::Number>(hpfValue);
                // Convert processor.state[key] to float
                float stateValue = static_cast<elem::js::Number>(processor.state[key]);
                if (key == "srvbBypass" || key == "scapeBypass" || key == "scapeReverse" || key == "scapeMode") {
                    paramValue = juce::roundToInt(paramValue);
                    stateValue = juce::roundToInt(paramValue);
                }
                processor.editor->setParameterValue(key, paramValue);
            }
        }
    }
}

//======= DETAIL
//=======================================================================
EffectsPluginProcessor::EffectsPluginProcessor()
    : AudioProcessor(BusesProperties()
                         .withInput("Input", juce::AudioChannelSet::stereo(), true)
                         .withOutput("Output", juce::AudioChannelSet::stereo(), true)),
      jsContext(choc::javascript::createQuickJSContext()),
      server(std::make_unique<choc::network::HTTPServer>()),
      clientInstance(std::make_unique<ViewClientInstance>(*this)),
      chooser("Select up to four stereo audio files", juce::File::getSpecialLocation(juce::File::userHomeDirectory),
              "*.wav;*.aiff")

{
    // Initialize parameters from the manifest file
#if ELEM_DEV_LOCALHOST
    auto manifestFile = juce::URL("http://localhost:5173/manifest.json");
    auto manifestFileContents = manifestFile.readEntireTextStream().toStdString();
#else
    auto manifestFile = getAssetsDirectory().getChildFile("manifest.json");

    if (!manifestFile.existsAsFile()) return;

    auto manifestFileContents = manifestFile.loadFileAsString().toStdString();
#endif

    const auto manifest = elem::js::parseJSON(manifestFileContents);

    if (!manifest.isObject()) return;

    // register audio file formats
    formatManager.registerBasicFormats();

    const auto parameters = manifest.getWithDefault("parameters", elem::js::Array());
    createParameters(parameters);

    // Initialize editor/view and license activator
    editor = new WebViewEditor(this, getAssetsDirectory(), 840, 480);

    // then load default audio assets
    choc::SmallVector<juce::File, 8> assets = fetchDefaultAudioFileAssets();
    assert( prepareDefaultResponseBuffers(assets) == true );

    // create server
    auto ws = EffectsPluginProcessor::runWebServer();
    if (ws != 0) {
        dispatchError("Server error:", "Websocket server failed to start.");
    }

    serverPort = server->getPort();
}
// Destructor
EffectsPluginProcessor::~EffectsPluginProcessor() {
    // Check if server is not nullptr and close the server if it is open
    if (server != nullptr) server->close();

    // Remove listeners from all parameters
    for (auto &p : getParameters()) {
        p->removeListener(this);
    };
}
//==============================================================================
// At initialisation, handle registering each default impulse response to the
// runtime virtual file system. These are already Mono channel files, with the
// schema used throughout, LIGHT_0.WAV, LIGHT_1.WAV, SURFACE_0.WAV, SURFACE_1.WAV, etc.

choc::SmallVector<juce::File, 8> EffectsPluginProcessor::fetchDefaultAudioFileAssets() {
#if ELEM_DEV_LOCALHOST
    auto assetsDir =
        juce::File(juce::String("~/Programming/ProgrammingSubFolder/NEL_ScapeRVB/"
                                "public/assets/impulse-responses"));
#else
    auto assetsDir = getAssetsDirectory().getChildFile("assets/impulse-responses");
#endif
    size_t index = 0;
    if (assetsDir.isDirectory()) {
        for (juce::File &file : assetsDir.findChildFiles(juce::File::findFiles, true)) {
            if (file.hasFileExtension(juce::String("wav")) && index < defaultMonoAudioFiles.size()) {
                defaultMonoAudioFiles[index++] = file;
            }
        }
    }
    return defaultMonoAudioFiles;
}

bool EffectsPluginProcessor::prepareDefaultResponseBuffers(choc::SmallVector<juce::File, 8> &assetFiles) {
    // we don't need to do this by channel, as the default files are already mono split
    // there should be 8x seperate mono wavs in the plugin assets folder
    int index = 0;
    for (juce::File &file : assetFiles) {
        const auto reader = formatManager.createReaderFor(file);
        if (reader == nullptr) {
            dispatchError("File Error:", "Could not load the default audio assets.");
            delete reader;
            return false;
        }
        auto buffer = juce::AudioBuffer<float>();

        buffer.setSize(2, reader->lengthInSamples);  // source files are mono, but we
                                                     // use the second channel for a
                                                     // derived 'shaped' version
        reader->read(&buffer, 0, reader->lengthInSamples, 0, true, false);

        int numSamples = buffer.getNumSamples();
        // fade in, less ER energy from the IR, as we have a whole ER engine already
        buffer.applyGainRamp(0, numSamples, 0.65, 1);
        // normalise the impulse response
        nel::normaliseImpulseResponse(buffer, 0.8414);  // -1.5 db
                                                        // add the gain ramped impulse response to the virtual
                                                        // file system
        // ▮▮▮elem▮▮▮runtime▮▮▮
        juce::String vfsPathname = file.getFileNameWithoutExtension();  // "AMBIENCE_0.wav" -> "AMBIENCE_0"
        // stash one channel of the normalised buffer data for the UI
        if (vfsPathname.contains("_0")) peakDataForView[index++] = getReducedAudioBuffer(buffer);

        // Populate the runtime virtual file system with the buffer
        runtime->updateSharedResourceMap(vfsPathname.toStdString(), buffer.getReadPointer(0), numSamples);
        // Magic Sauce: Reverse the IR and copy that to the other channel
        // Get the reverse from a little way in too, so its less draggy
        // so its easy to swap into in realtime
        buffer.reverse(0, numSamples * 0.75);
        buffer.copyFrom(1, 0, buffer.getReadPointer(0), numSamples * 0.75);
        // add the shaped impulse response to the virtual file system
        std::string reversedVfsPathname = REVERSE_BUFFER_PREFIX + vfsPathname.toStdString();
        runtime->updateSharedResourceMap(reversedVfsPathname, buffer.getReadPointer(1), numSamples * 0.75);

        // IMPORTANT: delete the reader to avoid memory leaks
        delete reader;
    }

    // notify the front end of the updated VFS keys
    inspectVFS();
    return true;
}
choc::SmallVector<juce::File, 8> EffectsPluginProcessor::sortedOrderForDefaultIRs(
    const choc::SmallVector<juce::File, 8> &files) {
    // Define the desired order of keywords
    std::array<std::string, 4> order ={ "LIGHT", "SURFACE", "TEMPLE", "DEEPNESS" };

    // Create a copy of the input files to sort
    choc::SmallVector<juce::File, 8> sortedFiles = files;

    // Sort the files based on the specified order of keywords
    std::sort(sortedFiles.begin(), sortedFiles.end(), [&order](const juce::File &a, const juce::File &b) {
        auto aPos = std::find_if(order.begin(), order.end(), [&a](const juce::String &keyword) {
            return a.getFileNameWithoutExtension().containsIgnoreCase(keyword) &&
                   !a.getFileNameWithoutExtension().containsIgnoreCase("REVERSED_");
        });
        auto bPos = std::find_if(order.begin(), order.end(), [&b](const juce::String &keyword) {
            return b.getFileNameWithoutExtension().containsIgnoreCase(keyword) &&
                   !b.getFileNameWithoutExtension().containsIgnoreCase("REVERSED_");
        });
        return aPos < bPos;
    });

    return sortedFiles;
}
//========================= Handle User IR Files & Virtual File System
//===================================

// the peaks data is a vector of vectors of floats
// each vector of floats is a mono channel of the audio file
// and is pushed into the userPeakData vector during the load-in
// see loadAudioFromFileIntoVFS() function

void EffectsPluginProcessor::updateStateWithPeaksData() {
    elem::js::Array reducedSampleDataForPlotting;
    for (const auto &fromBuffer : EffectsPluginProcessor::peakDataForView) {
        elem::js::Array peaks;
        for (const auto &monoChannelData : fromBuffer) {
            if (fromBuffer.empty()) {
                elem::js::Float32Array emptyArray(256, 0.0f);
                peaks.push_back(elem::js::Value(emptyArray));
                continue;
            }
            peaks.push_back(elem::js::Value(monoChannelData));
        }
        reducedSampleDataForPlotting.push_back(peaks);
    }
    userData[PERSISTED_USER_PEAKS] = elem::js::Array();
    userData.insert_or_assign(PERSISTED_USER_PEAKS, elem::js::Value(reducedSampleDataForPlotting));
    dispatchStateChange();
}

void EffectsPluginProcessor::updateStateWithFilenames(choc::SmallVector<juce::String, 4> &filenames) {
    elem::js::Array filenamesAsValue;
    for (juce::String &filename : filenames) {
        if (filename.isEmpty()) {
            continue;
        }
        filenamesAsValue.push_back(elem::js::String(filename.toStdString()));
    }
   // state[PERSISTED_USER_FILENAMES] = elem::js::Array();
    state.insert_or_assign(PERSISTED_USER_FILENAMES, elem::js::Value(filenamesAsValue));
    dispatchStateChange();
}

void EffectsPluginProcessor::updateStateWithFilenames() {
    updateStateWithFilenames(EffectsPluginProcessor::userFilenamesForView);
}

void EffectsPluginProcessor::requestUserFileSelection(std::promise<elem::js::Object> &promise) {
    juce::MessageManager::callAsync([this, &promise]() {
        bool browsed = chooser.browseForMultipleFilesToOpen(nullptr);
        elem::js::Object result;

        result.insert_or_assign("success", elem::js::Value(browsed));

        juce::Array<juce::File> selected(chooser.getResults());

        // Create an elem::js::Array to hold the file paths
        elem::js::Array selectedFilesAsValue;

        for (const auto &file : selected) {
            juce::String filePath = file.getFullPathName();
            selectedFilesAsValue.push_back(elem::js::Value(filePath.toStdString()));
        }

        // should be < 10MB and WAV to fill the current slot
        for (juce::File &file : selected) {
            bool validExtension = file.hasFileExtension("wav;WAV;aif;AIF;AIFF;WAVE");
            if (!validExtension) {
                dispatchNativeLog("File Error:", "Only WAV or AIF audio format supported.");
                result.insert_or_assign("success", elem::js::Value(false));
                result.insert_or_assign("files", selectedFilesAsValue);
                promise.set_value(result);
                return;
            }
            if (file.getSize() > juce::int64(10 * 1024 * 1024)) {
                dispatchNativeLog("File Error:", "A file size exceeds 10MB limit.");
                result.insert_or_assign("success", elem::js::Value(false));
                result.insert_or_assign("files", selectedFilesAsValue);
                promise.set_value(result);
                return;
            }
            result.insert_or_assign("files", selectedFilesAsValue);
        }

        promise.set_value(result);
    });
}

bool EffectsPluginProcessor::assignFileAssetToCurrentSlot(const juce::File &file) {
    int targetSlot = slotManager.getSlotIndex();
    if (targetSlot > 3) {
        slotManager.resetSlotIndex();
    }
    try {
        userStereoAudioFiles[targetSlot] = file;
    } catch (const std::exception &e) {
        // DBG the exception
    }
    if (targetSlot < userStereoAudioFiles.size() && userStereoAudioFiles[targetSlot].existsAsFile()) {
        dispatchStateChange();
        return true;
    } else {
        // if the file does not exist, we will not be able to load it
        // tell the user
        dispatchError("File error:", "Could not find " + file.getFileName().toStdString());
        return false;
    }
}

bool EffectsPluginProcessor::assignFilenameToCurrentSlot(const juce::File &file) {
    int targetSlot = slotManager.getSlotIndex();
    if (targetSlot > 3) {
        slotManager.resetSlotIndex();
    }
    try {
        userFilenamesForView[targetSlot] = file.getFileNameWithoutExtension().toStdString();
    } catch (const std::exception &e) {
        // DBG the exception
    }
    if (targetSlot < userFilenamesForView.size()) {
        dispatchStateChange();
        return userFilenamesForView[targetSlot].length() > 0;
    } else {
        return false;
    }
}

bool EffectsPluginProcessor::importAudioToRuntimeVFS(juce::File &file, int slotIndex) {
    // Create an AudioBuffer to hold the audio data
    auto buffer = juce::AudioBuffer<float>();
    // Create a reader for the file
    auto reader = formatManager.createReaderFor(file);
    // First checkpoint, if the reader is null, something went wrong
    if (reader == nullptr) {
        dispatchError("File error:", "Could not read " + file.getFileName().toStdString());
        return 0;
    }
    // get some info about the file from the reader
    const int bitsPerSample = reader->bitsPerSample;
    const auto numChannels = reader->numChannels;
    const bool isFloatingPoint = reader->usesFloatingPointData;
    // set the size of the buffer to 2 channels and the length of the file
    // we only load one channel of the file at a time, but we use the second
    // buffer channel for a derived 'reversed' version of the IR
    buffer.setSize(2, reader->lengthInSamples);
    // Currently mono files are not supported TODO: add support for mono files
    if (numChannels < 2 || numChannels > 2) {
        dispatchError("File error:", "Only stereo files can be used.");
        return 0;
    }
    // As the source files are strictly stereo and the VFS is strictly
    // one channel buffers, we aim to create a VFS entry for eeach
    // state using the following naming convention:
    // ▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮
    // GENERATED VFS ASSETS FROM EACH STEREO INPUT FILE
    // USER0_0 :            the forward playing left channel of the stereo file
    // USER0_1 :            the forward playing right channel of the stereo file
    // REVERSED_USER0_0 :   the reverse playing left channel of the stereo file
    // REVERSED_USER0_1 :   the reverse playing right channel of the stereo file
    // ▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮
    for (int channel = 0; channel < numChannels; ++channel) {
        auto name = "USER" + std::to_string(slotIndex) + "_" + std::to_string(channel);
        // establish the reader for the file
        reader->read(&buffer, 0, reader->lengthInSamples, 0, true, false);
        // work with the buffer
        auto numSamples = buffer.getNumSamples();
        // apply the high pass filter
        juce::dsp::ProcessSpec spec;
        spec.sampleRate = lastKnownSampleRate;
        spec.maximumBlockSize = numSamples;
        spec.numChannels = 1;
        stateVariableFilter.reset();
        stateVariableFilter.prepare(spec);
        stateVariableFilter.setType(juce::dsp::StateVariableTPTFilterType::highpass);
        stateVariableFilter.setCutoffFrequency(userCutoffChoice);
        auto outputBlock = juce::dsp::AudioBlock<float>(buffer);
        juce::dsp::ProcessContextReplacing<float> context(outputBlock);
        stateVariableFilter.process(context);
        // normalise the result
        nel::normaliseImpulseResponse(buffer, 0.8414);  // -1.5 db
        // stash one channel of the normalised buffer data for Peaks in the VIEW
        if (channel == 0) assignPeaksToCurrentSlot(buffer);
        // do a little fade in, less ER energy from the IR, as we have a whole ER
        // engine already
        buffer.applyGainRamp(0, numSamples, 0.808, 1);

        // ▮▮▮elem▮▮▮▮▮▮runtime▮▮▮▮▮▮
        // add the forward playing channel to the virtual file system
        runtime->updateSharedResourceMap(name, buffer.getReadPointer(0), numSamples);
        // shorten the IR a bit, then reverse it and copy that to the other channel
        auto shorterLengthForReverseIR = numSamples * 0.85;
        buffer.reverse(0, shorterLengthForReverseIR);
        buffer.copyFrom(1, 0, buffer.getReadPointer(0), shorterLengthForReverseIR);
        // add the reverse playing channel to the virtual file system
        runtime->updateSharedResourceMap(REVERSE_BUFFER_PREFIX + name, buffer.getReadPointer(1),
                                         shorterLengthForReverseIR);
    }
    // IMPORTANT: delete the reader to avoid memory leaks
    delete reader;
    // notify the front end of the updated VFS keys
    inspectVFS();
    return 1;
}

// Call the runtime to get its immutable
// Map of audio buffer resources
// then construct a JSON string of the keys.
// We also populate all the VFS path names
// into vfsPathsForRealtime for state to track
void EffectsPluginProcessor::inspectVFS() {
    auto vfs = runtime->getSharedResourceMapKeys();
    // iterate vfs into an std::string
    std::string vfsString = "[";
    for (auto &key : vfs) {
        vfsString += "\"" + key + "\",";
        assignVFSpathToCurrentSlot(juce::String(key.c_str()));
    }
    vfsString.pop_back();
    vfsString += "]";
    // send the vfs to the editor
    const auto expr = serialize(jsFunctions::vfsKeysScript, choc::value::Value(vfsString), "%");
    sendJavascriptToUI(expr);
    jsContext.evaluateExpression(expr);
}

bool EffectsPluginProcessor::assignVFSpathToCurrentSlot(const juce::String &vfsPath) {
    int targetSlot = slotManager.getSlotIndex();
    if (targetSlot > 3) {
        slotManager.resetSlotIndex();
    }
    try {
        vfsPathsForRealtime[targetSlot] = vfsPath.toStdString();
    } catch (const std::exception &e) {
        // DBG the exception
    }
    if (targetSlot < vfsPathsForRealtime.size()) {
        dispatchStateChange();
        return vfsPathsForRealtime[targetSlot].length() > 0;
    } else {
        return false;
    }
}

bool EffectsPluginProcessor::assignPeaksToCurrentSlot(const juce::AudioBuffer<float> &buffer) {
    int targetSlot = slotManager.getSlotIndex();
    if (targetSlot > 3) {
        slotManager.resetSlotIndex();
    }
    try {
        peakDataForView[targetSlot] = getReducedAudioBuffer(buffer);
    } catch (const std::exception &e) {
        // DBG the exception
    }
    if (targetSlot < peakDataForView.size()) {
        dispatchStateChange();
        return peakDataForView[targetSlot].size() > 0;
    } else {
        return false;
    }
}

std::vector<float> EffectsPluginProcessor::getReducedAudioBuffer(const juce::AudioBuffer<float> &buffer) {
    // This function reduces the audio buffer to a smaller size for plotting as
    // peaks in the front end. The buffer is strided by an int factor to reduce
    // the size.
    int numSamples = buffer.getNumSamples();
    // Compute the stride as a factor of the number of samples
    int stride = 96;
    if (stride < 1) stride = 1;  // Ensure stride is at least 1

    // Create an std::vector<float> to hold a reduced form of the audio data
    std::vector<float> audioData(numSamples / stride + 1);

    // Declare a pointer variable for floating-point data
    juce::AudioData::Pointer<juce::AudioData::Float32, juce::AudioData::LittleEndian, juce::AudioData::NonInterleaved,
                             juce::AudioData::Const>
        pointer(buffer.getReadPointer(0));

    // Fill the audioData vector with a strided copy of the audio buffer
    int pointerPosition = 0;
    for (int i = 0; i < numSamples; i++) {
        const auto value = pointer.getAsFloat();

        pointer += stride;  // Move the pointer by the stride value
        pointerPosition += stride;
        if (pointerPosition >= numSamples) break;
        if (abs(value) < 1.0e-4) continue;  // skip small values
        audioData[i] = value;
    }
    return audioData;
}
//==============================================================================

int EffectsPluginProcessor::runWebServer() {
    auto address = "127.0.0.1";
#if ELEM_DEV_LOCALHOST
    uint16_t preferredPortNum = 13755;  // dev with fixed port. 0 for random port when building
#else
    uint16_t preferredPortNum = 0;
#endif
    // <<...If you pass 0 for the port number, a free one will be automatically
    // chosen...>> as we don't want every plugin instance under the same server,
    // we use a random port and pass it over to the UI client
    bool openedOK = server->open(
        address, preferredPortNum, 0,
        // Create a new clientInstance for each connector..
        [this]() -> std::unique_ptr<choc::network::HTTPServer::ClientInstance> {
            clientInstance = std::make_unique<ViewClientInstance>(*this);
            return std::move(clientInstance);
        },
        // Handle some kind of server error..
        [this](const std::string &error) { dispatchError("WS server error: ", error); });

    if (!openedOK) return 1;
    // While the server is running, this thread no longer needs to be involved.
    // you could also run the
    // message loop or get on with other tasks.
    return 0;
}
//==============================================================================
bool EffectsPluginProcessor::isBusesLayoutSupported(const AudioProcessor::BusesLayout &layouts) const { return true; }
void EffectsPluginProcessor::createParameters(const std::vector<elem::js::Value> &parameters) {
    for (const auto &parameter : parameters) {
        if (!parameter.isObject()) continue;

        auto paramId = parameter.getWithDefault("paramId", elem::js::String("unknown"));
        auto name = parameter.getWithDefault("name", elem::js::String("Unknown"));
        auto minValue = parameter.getWithDefault("min", elem::js::Number(0));
        auto maxValue = parameter.getWithDefault("max", elem::js::Number(1));
        auto defaultValue = parameter.getWithDefault("defaultValue", elem::js::Number(0));
        auto step = parameter.getWithDefault("step", elem::js::Number(0));
        auto isBoolean = parameter.getWithDefault("isBoolean", elem::js::Boolean(false));

        if (isBoolean) {
            auto *p =
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
        } else {
            auto *p = new juce::AudioParameterFloat(
                juce::ParameterID(paramId, 1), name,
                {static_cast<float>(minValue), static_cast<float>(maxValue), static_cast<float>(step)},
                static_cast<float>(defaultValue));

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
    }
}
juce::AudioProcessorEditor *EffectsPluginProcessor::createEditor() {
    editor = new WebViewEditor(this, getAssetsDirectory(), 840, 480);

    // KEYZY LICENSE ACTIVATION
    // -----------
    // semi-online license activation

    editor->handleUnlockEvent = [this](choc::value::Value &v) {
        const bool hasSerial =
            v.hasObjectMember("serial") && v["serial"].isString() && v["serial"].getString().length() > 0;
        bool shouldActivate = licenseStatus != Keyzy::LicenseStatus::VALID;

        if (!hasSerial && shouldActivate) {
            licenseStatus = licenseActivator.activateSemiOnline();
        } else if (hasSerial && shouldActivate && hasSerial) {
            const auto serial = v["serial"].getString();
            licenseStatus = licenseActivator.activateSemiOnline(serial.data());
        }

        sendJavascriptToUI("globalThis.__onUnlock__('" + unlock::errorStatuses(licenseStatus) + "')");
        // also send back the current host info
        juce::PluginHostType hostType;
        std::string hostDescription = static_cast<const char *>(hostType.getHostDescription());
        sendJavascriptToUI("globalThis.__hostInfo__('" + hostDescription + "')");
    };

    editor->ready = [this]() {
        dispatchServerInfo();
        dispatchStateChange();
    };
    // When setting a parameter value, we simply tell the host. This will in turn
    // fire a parameterValueChanged event, which will catch and propagate through
    // dispatching a state change event
    editor->setParameterValue = [this](const std::string &paramId, float value) {
        if (parameterMap.count(paramId) > 0) {
            std::visit(
                [this, value](auto &&param) {
                    using T = std::decay_t<decltype(param)>;

                    if constexpr (std::is_same_v<T, juce::AudioParameterFloat *>) {
                        param->beginChangeGesture();
                        param->setValueNotifyingHost(value);
                        param->endChangeGesture();
                    } else if constexpr (std::is_same_v<T, juce::AudioParameterBool *>) {
                        param->beginChangeGesture();
                        param->setValueNotifyingHost(static_cast<bool>(value));
                        param->endChangeGesture();
                    }
                },
                parameterMap[paramId]);
        }
    };

#if ELEM_DEV_LOCALHOST
    editor->reload = [this]() {
        initJavaScriptEngine();
        dispatchStateChange();
    };

#endif

    return editor;
}

bool EffectsPluginProcessor::hasEditor() const { return true; }

const juce::String EffectsPluginProcessor::getName() const { return "NEL-ScapeSpace"; }

bool EffectsPluginProcessor::acceptsMidi() const { return false; }

bool EffectsPluginProcessor::producesMidi() const { return false; }

bool EffectsPluginProcessor::isMidiEffect() const { return false; }

double EffectsPluginProcessor::getTailLengthSeconds() const { return 3.0; }

int EffectsPluginProcessor::getNumPrograms() {
    return 1;  // NB: some hosts don't cope very well if you tell them there are 0
               // programs, so this should be at least 1, even if you're not really
               // implementing programs.
}

int EffectsPluginProcessor::getCurrentProgram() { return 0; }

void EffectsPluginProcessor::setCurrentProgram(int /* index */) {}

const juce::String EffectsPluginProcessor::getProgramName(int /* index */) { return {}; }
void EffectsPluginProcessor::changeProgramName(int /* index */, const juce::String & /* newName */) {}
// ▮▮▮▮▮▮juce▮▮▮▮▮▮elem▮▮▮▮▮▮realtime ▮▮▮▮▮▮
void EffectsPluginProcessor::prepareToPlay(double sampleRate, int samplesPerBlock) {
    // Some hosts call `prepareToPlay` on the real-time thread, some call it on
    // the main thread. To address the discrepancy, we check whether anything has
    // changed since our last known call. If it has, we flag for initialization of
    // the Elementary engine and runtime, then trigger an async update.
    //
    // JUCE will synchronously handle the async update if it understands
    // that we're already on the main thread.
    if (sampleRate != lastKnownSampleRate || samplesPerBlock != lastKnownBlockSize) {
        lastKnownSampleRate = sampleRate;
        lastKnownBlockSize = samplesPerBlock;

        runtimeSwapRequired.store(true);
    }

    // Now that the environment is set up, push our current state
    triggerAsyncUpdate();
}

void EffectsPluginProcessor::releaseResources() {
    // When playback stops, you can use this as an opportunity to free up any
    // spare memory, etc.
}
void EffectsPluginProcessor::processBlock(juce::AudioBuffer<float> &buffer, juce::MidiBuffer & /* midiMessages */) {
    // If the license is invalid, we clear the buffer and return
    // if (licenseStatus != Keyzy::LicenseStatus::VALID)
    // {
    //     buffer.clear();
    //     return;
    // }

    // Copy the input so that our input and output buffers are distinct
    scratchBuffer.makeCopyOf(buffer, true);

    // Process the elementary runtime
    if (runtime != nullptr && !runtimeSwapRequired)

    {
        runtime->process(const_cast<const float **>(scratchBuffer.getArrayOfWritePointers()),
                         getTotalNumInputChannels(), const_cast<float **>(buffer.getArrayOfWritePointers()),
                         buffer.getNumChannels(), buffer.getNumSamples(), nullptr);
    } else {
        // Clear the output buffer to prevent any garbage if our runtime isn't ready
        buffer.clear();
    }

    if (runtimeSwapRequired) {
        shouldInitialize.store(true);
        triggerAsyncUpdate();
    }
}
void EffectsPluginProcessor::parameterValueChanged(int parameterIndex, float newValue) {
    // Mark the updated parameter value in the dirty list
    auto &readout = *std::next(parameterReadouts.begin(), parameterIndex);

    readout.store({newValue, true});
    triggerAsyncUpdate();
}

void EffectsPluginProcessor::parameterGestureChanged(int, bool) {
    // Not implemented
}

//==============================================================================
// JS INITIALISATION HAPPENS HERE

void EffectsPluginProcessor::handleAsyncUpdate() {
    // First things first, we check the flag to identify if we should initialize
    // the Elementary runtime and engine.
    if (shouldInitialize.exchange(false)) {
        runtime = std::make_unique<elem::Runtime<float>>(lastKnownSampleRate, lastKnownBlockSize);

        runtime->registerNodeType("convolver", [](elem::NodeId const id, double sampleRate, int const blockSize) {
            return std::make_shared<ConvolverNode>(id, sampleRate, blockSize);
        });

        slotManager.resetSlotIndex();
        // Add the default mono impulse responses to the virtual file system... LIGHT_0, LIGHT_1 etc
        // Update the front end with names derived from first
        // mono channel buffer, thats why we step by 2... LIGHT_0, SURFACE_0 etc

        //  std::vector<std::string> defaults;
        // for (size_t i = 0; i < userFilenamesForView.size(); i += 2) {
        //     defaults.push_back(userFilenamesForView[i].toStdString());
        // };
        //  updateStateWithFilenames(defaults);

        // Værsgo!
        initJavaScriptEngine();
        runtimeSwapRequired.store(false);
    }

    // Next we iterate over the current parameter values to update our local state
    // object, which we in turn dispatch into the JavaScript engine
    auto &params = getParameters();

    // Reduce over the changed parameters to resolve our updated processor state
    for (size_t i = 0; i < parameterReadouts.size(); ++i) {
        // We atomically exchange an arbitrary value with a dirty flag false,
        // because we know that the next time we exchange, if the dirty flag is
        // still false, the value can be considered arbitrary. Only when we exchange
        // and find the dirty flag true do we consider the value as having been
        // written by the processor since we last looked.
        auto &current = *std::next(parameterReadouts.begin(), i);
        const auto pr = current.exchange({0.0f, false});

        if (pr.dirty) {
            if (const auto *pf = dynamic_cast<juce::AudioParameterFloat *>(params[i])) {
                auto paramId = pf->paramID.toStdString();
                state.insert_or_assign(paramId, static_cast<elem::js::Number>(pr.value));
            }
        }
    }

    dispatchStateChange();
}
// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
// ▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮

void EffectsPluginProcessor::initJavaScriptEngine() {
    jsContext = choc::javascript::createQuickJSContext();

    choc::javascript::registerTimerFunctions(jsContext);

    // Install some native interop functions in our JavaScript environment
    jsContext.registerFunction(NATIVE_MESSAGE_FUNCTION_NAME, [this](choc::javascript::ArgumentList args) {
        const auto batch = elem::js::parseJSON(args[0]->toString());
        const auto rc = runtime->applyInstructions(batch);

        if (rc != elem::ReturnCode::Ok()) {
            dispatchError("Runtime Error", elem::ReturnCode::describe(rc));
        }

        return choc::value::Value();
    });

    const auto dspEntryFileContents = loadDspEntryFileContents();

    if (dspEntryFileContents.has_value()) {
        jsContext.evaluateExpression(dspEntryFileContents.value());
    } else {
        return;
    }

    // Re-hydrate from current state
    const auto expr = serialize(jsFunctions::hydrateScript, runtime->snapshot());
    jsContext.evaluateExpression(expr);

    jsContext.registerFunction("__log__", [this](choc::javascript::ArgumentList args) {
        const auto *kDispatchScript = R"script(
(function() {
  console.log(...JSON.parse(%));
  return true;
})();
)script";

        // Forward logs to the editor if it's available; then logs show up in
        // one place.
        //
        // If not available, we fall back to std out.
        if (auto *editor = static_cast<WebViewEditor *>(getActiveEditor())) {
            auto v = choc::value::createEmptyArray();

            for (size_t i = 0; i < args.numArgs; ++i) {
                v.addArrayElement(*args[i]);
            }

            auto expr =
                juce::String(kDispatchScript).replace("%", elem::js::serialize(choc::json::toString(v))).toStdString();
            editor->getWebViewPtr()->evaluateJavascript(expr);
        } else {
            for (size_t i = 0; i < args.numArgs; ++i) {
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

void EffectsPluginProcessor::dispatchStateChange() {
    // Need the double serialize here to correctly form the string script. The
    // first serialize produces the payload we want, the second serialize ensures
    // we can replace the % character in the above block and produce a valid
    // javascript expression.
    auto currentStateMap = state;
    currentStateMap.insert_or_assign(SAMPLE_RATE_KEY, lastKnownSampleRate);
    const auto expr = serialize(jsFunctions::dispatchScript, currentStateMap);
    // First we try to dispatch to the UI if it's available, because running this
    // step will just involve placing a message in a queue.
    sendJavascriptToUI(expr);
    // Next we dispatch to the local engine which will evaluate any necessary
    // JavaScript synchronously here on the main thread
    try {
        jsContext.evaluateExpression(expr);
    } catch (std::exception &e) {
        dispatchError("DSP JS:", e.what());
    }
}
/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name dispatchServerInfo
 * @brief Dispatches the server port to the UI
 */

void EffectsPluginProcessor::dispatchServerInfo() {
    // Retrieve the port number
    serverPort = server->getPort();
    // Convert the port number to a choc::value::Value
    const auto portValue = choc::value::createInt32(serverPort);
    // Send the server port to the UI
    const auto expr = serialize(jsFunctions::serverInfoScript, portValue, "%");
    sendJavascriptToUI(expr);
}
/*▮▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name dispatchError
 * @brief Some error reporting facilities
 */
void EffectsPluginProcessor::dispatchError(std::string const &name, std::string const &message) {
    // Need the serialize here to correctly form the string script.
    const auto expr = juce::String(jsFunctions::errorScript)
                          .replace("@", elem::js::serialize(name))
                          .replace("%", elem::js::serialize(message))
                          .toStdString();
    // First we try to dispatch to the UI if it's available, because running this
    // step will just involve placing a message in a queue.
    if (!sendJavascriptToUI(expr)) {
        if (errorLogQueue.size() == MAX_ERROR_LOG_QUEUE_SIZE) {
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
void EffectsPluginProcessor::dispatchNativeLog(std::string const &name, std::string const &message) {
    const auto expr = juce::String(jsFunctions::errorScript)
                          .replace("@", elem::js::serialize(name))
                          .replace("%", elem::js::serialize(message))
                          .toStdString();
    if (!sendJavascriptToUI(expr)) {
        if (errorLogQueue.size() == MAX_ERROR_LOG_QUEUE_SIZE) {
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
std::optional<std::string> EffectsPluginProcessor::loadDspEntryFileContents() const {
    // Load and evaluate our Elementary js main file
#if ELEM_DEV_LOCALHOST
    auto dspEntryFile = juce::URL("http://localhost:5173/dsp.main.js");
    auto dspEntryFileContents = dspEntryFile.readEntireTextStream().toStdString();
#else
    auto dspEntryFile = getAssetsDirectory().getChildFile(MAIN_DSP_JS_FILE);

    if (!dspEntryFile.existsAsFile()) return std::nullopt;

    auto dspEntryFileContents = dspEntryFile.loadFileAsString().toStdString();
#endif

    return dspEntryFileContents;
}
/*▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name sendJavascriptToUI
 * @brief Execute js via global function bridging
 */

bool EffectsPluginProcessor::sendJavascriptToUI(const std::string &expr) const {
    if (const auto *editor = dynamic_cast<WebViewEditor *>(getActiveEditor())) {
        editor->executeJavascript(expr);
        return true;
    }
    return false;
}
/*▮▮js▮▮▮▮▮▮frontend▮▮▮▮▮▮backend▮▮▮▮▮▮messaging▮▮▮▮▮▮
 * @name serialize
 * @brief Serialize data for js
 */
std::string EffectsPluginProcessor::serialize(const std::string &function, const elem::js::Object &data,
                                              const juce::String &replacementChar) {
    return juce::String(function)
        .replace(replacementChar, elem::js::serialize(elem::js::serialize(data)))
        .toStdString();
}
std::string EffectsPluginProcessor::serialize(const std::string &function, const choc::value::Value &data,
                                              const juce::String &replacementChar) {
    return juce::String(function).replace(replacementChar, choc::json::toString(data)).toStdString();
}

// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
//
//  STORE
//  state when window closes or plugin is removed
//
// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state

void EffectsPluginProcessor::getStateInformation(juce::MemoryBlock &destData) {
    auto dataToPersist = elem::js::Object();
    dataToPersist.insert_or_assign(PERSISTED_HOST_PARAMETERS, elem::js::Value(state));
    dataToPersist.insert_or_assign(PERSISTED_USER_PEAKS, elem::js::Value(userData[PERSISTED_USER_PEAKS]));

    const auto serialized = elem::js::serialize(dataToPersist);

    destData.replaceAll((void *)serialized.c_str(), serialized.size());
}

// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
//
//  RESTORE
//  state when window opens or plugin is loaded
//
// ▮▮▮▮▮▮juce▮▮▮▮▮▮ plugin state
void EffectsPluginProcessor::setStateInformation(const void *data, int sizeInBytes) {
    auto parsed = elem::js::parseJSON("{}");
    const auto jsonString = std::string(static_cast<const char *>(data), sizeInBytes);
    try {
        parsed = elem::js::parseJSON(jsonString);
        auto persistedData = parsed.getObject();
        auto hostState = state;

        // reset the slot index to ensure we start from the beginning
        // before restoring the state
        slotManager.resetSlotIndex();

        for (auto &[key, value] : persistedData) {
            if (key == PERSISTED_HOST_PARAMETERS) {
                for (auto &[paramId, setting] : value.getObject()) {
                    hostState.insert_or_assign(paramId, setting);
                    dispatchNativeLog("Restoring:",
                                      "Host parameter " + paramId + " to " + elem::js::serialize(setting));
                }
            } else if (key == PERSISTED_USER_PEAKS) {
                auto parsedPeaks = value.getArray();
                for (const auto &channel : parsedPeaks) {
                    auto monoChannel = channel.getArray();
                    std::vector<float> monoChannelData;
                    for (const auto &sample : monoChannel) {
                        monoChannelData[slotManager.getSlotIndex()] = float((elem::js::Number)sample);
                    }
                    peakDataForView[slotManager.getSlotIndex()] = monoChannelData;
                    slotManager.incrementSlotIndex();
                }
            }

            dispatchStateChange();
        }
    }

    catch (...) {
        // Failed to parse the incoming state, or the state we did parse was not
        // actually an object type. How you handle it is up to you.
        dispatchError("Data Error:", "Failed to restore plugin state!");
    }
}
//==============================================================================
// This creates new instances of the plugin..
juce::AudioProcessor *JUCE_CALLTYPE createPluginFilter() { return new EffectsPluginProcessor(); }
