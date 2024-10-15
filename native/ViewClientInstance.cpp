
#include "ViewClientInstance.h"
#include "PluginProcessor.h"
#include "SlotName.h"

ViewClientInstance::ViewClientInstance(EffectsPluginProcessor &processor)
    : processor(processor)
{
    static int clientCount = 0;
    clientID = ++clientCount;
}

ViewClientInstance::~ViewClientInstance()
{
    clientID = 0;
}

choc::network::HTTPContent ViewClientInstance::getHTTPContent(std::string_view path)
{
    // not using HTML
    return {};
}

void ViewClientInstance::upgradedToWebSocket(std::string_view path) {}

void ViewClientInstance::handleWebSocketMessage(std::string_view message)
{
    // Convert std::string_view to std::string
    std::string messageStr(message);
    // Deserialize the message
    auto parsed = elem::js::parseJSON(messageStr);
    if (parsed.isNull() || parsed.isUndefined())
    {
        processor.dispatchError("WS Error:", "Invalid JSON received.");
        return;
    }
    // Valid JSON-like object will have key-value pairs
    if (parsed.isObject())
    {
        auto socketMessage = parsed.getObject();
        // validate the JSON object
        if (socketMessage.empty())
        {
            processor.dispatchError("WS Error:", "Empty JSON object received.");
            return;
        }

        // ▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮
        //  "selectFiles"
        // ▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮
        for (auto &[key, hpfValue] : socketMessage)
        {
            if (key == "selectFiles" && hpfValue.isNumber())
            {
                std::promise<elem::js::Object> promise;
                std::future<elem::js::Object> future = promise.get_future();
                processor.requestUserFileSelection(promise);
                elem::js::Object gotFiles = future.get();
                if (static_cast<bool>(gotFiles["success"]) == false)
                {
                    processor.dispatchError("File error:", "No files loaded.");
                    continue;
                }
                if (gotFiles["files"].isArray() == false)
                {
                    processor.dispatchError("File error:", "No files selected.");
                    continue;
                }
                auto files = gotFiles["files"].getArray();
                processor.userCutoffChoice = fmin(160, int((elem::js::Number)hpfValue));

                SlotName targetSlot = SlotName::LIGHT;

                for (const auto fileValue : files)
                {
                    int currentUserSlot = processor.slotManager.getSlotIndex();
                    juce::String filePath = juce::String(static_cast<std::string>(fileValue));
                    juce::File file(filePath);
                    if (file.existsAsFile())
                    {
                        processor.assignFileAssetToSlot(targetSlot, file);
                        processor.assignFilenameToSlot(targetSlot, file);
                        if (!processor.processImportedResponseBuffers(file, targetSlot))
                        {
                            continue;
                        }
                        targetSlot = nextSlot(targetSlot);
                    }
                }
                processor.updateStateWithAssetsData();
                continue;
            }

            // ▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮
            //  "requestState"
            // ▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮▮▮▮▮wswsws▮▮▮▮
            if (key == "requestState")
            {
                elem::js::Object wrappedState;
                elem::js::Object wrappedPeaks;
                elem::js::Object wrappedFileNames;
                
                processor.wrapStateForView(wrappedState);
                juce::String serializedState = elem::js::serialize(wrappedState);

                processor.wrapFileNamesForView(wrappedFileNames);
                juce::String serializedFileNames = elem::js::serialize(wrappedFileNames);


                int currentStateHash = serializedState.hashCode();
                // lets get the peaks change trigger from a shorter ref 
                // that changes at the same time as the peaks
                int currentPeaksHash = serializedFileNames.hashCode(); 

                if (currentStateHash != processor.lastStateHash)
                {
                    sendWebSocketMessage(serializedState.toStdString());
                    processor.lastStateHash = currentStateHash;
                }
                if (currentPeaksHash != processor.lastPeaksHash)
                {
                    processor.wrapPeaksForView(wrappedPeaks);
                    juce::String serializedPeaks = elem::js::serialize(wrappedPeaks);
                    sendWebSocketMessage(serializedPeaks.toStdString());
                    processor.lastPeaksHash = currentPeaksHash;
                }
                continue;
            }

            if (hpfValue.isNumber() && processor.parameterMap.count(key) > 0)
            {
                float paramValue = static_cast<elem::js::Number>(hpfValue);
                float stateValue = static_cast<elem::js::Number>(processor.state[key]);
                if (key == "srvbBypass" || key == "scapeBypass" || key == "scapeReverse" || key == "scapeMode")
                {
                    paramValue = juce::roundToInt(paramValue);
                    stateValue = juce::roundToInt(paramValue);
                }
                processor.editor->setParameterValue(key, paramValue);
            }
        }
    }
}
