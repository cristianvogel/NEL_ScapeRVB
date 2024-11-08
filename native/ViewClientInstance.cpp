
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
    stop(); // We need to manually stop the client instance
}

void ViewClientInstance::stop()
{
    running.store(false); // Set running flag to false
    // Ensure no methods are called from viewClientInstance after this point
}

void ViewClientInstance::handleWebSocketMessage(std::string_view message)
{
    if (!running.load() || processor.isSuspended() || processor.editor == nullptr )
        return; // Check running flag before processing

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

        for (auto &[key, hpfValue] : socketMessage)
        {
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            //  "selectFiles" Opens file picker,                      //
            //  handles file selection, and assigns files to slots    //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (key == "selectFiles" && hpfValue.isNumber() )
            {
                if (chooserIsOpen.load()) continue;
                uploadStatus = 0; 
                int filterCutoff = static_cast<elem::js::Number>(hpfValue);
                userFileUploadHandler(filterCutoff, retFlag);
            } // end selectFiles

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮ "'requestState" called frequently from front end  ▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (key == "requestState")
            {
                if (!processor.editor || chooserIsOpen.load() )
                    return;

                elem::js::Object stateContainer;
                // ============ performance optimization ========================
                // hash the serialized state, send only if changed

                processor.slotManager->wrapStateForView(stateContainer);
                juce::String serializedState = elem::js::serialize(stateContainer);
                int currentStateHash = serializedState.hashCode();

                if (currentStateHash != processor.slotManager->lastStateHash)
                {
                    sendWebSocketMessage(serializedState.toStdString());
                    processor.slotManager->lastStateHash = currentStateHash;
                }
                if (processor.slotManager->peaksDirty )
                {
                    elem::js::Object peaksContainer;
                    std::cout << "wrapping and sending peaks to View.." << std::endl;
                    processor.slotManager->wrapPeaksForView(peaksContainer);
                    juce::String serializedPeaks = elem::js::serialize(peaksContainer);
                    sendWebSocketMessage(serializedPeaks.toStdString());
                    processor.slotManager->peaksDirty = false;
                }
            } // end requestState

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "factory" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "factory")
            {
                processor.slotManager->switchSlotsTo(false, false);
                std::cout << "switching to factory slots" << std::endl;
                retFlag = 0;
            } // end switchToDefaultSlots

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "custom" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "custom")
            {
                processor.slotManager->switchSlotsTo(true, false);
                std::cout << "switching to custom slots" << std::endl;
            } // end switchToUserSlots

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "prune and reset" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (key == "reset")
            {
                processor.clear_userFiles_in_assets_map();
                processor.slotManager->switchSlotsTo(false, true);
                std::cout << "resetting slots" << std::endl;
                retFlag = 0;
            } // end reset

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮ simple parameter update request       ▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (hpfValue.isNumber() && processor.parameterMap.contains(key) && !chooserIsOpen.load())
            {
                float paramValue = static_cast<elem::js::Number>(hpfValue);
                float stateValue = static_cast<elem::js::Number>(processor.state[key]);
                // handle boolean ints here
                if (key == "srvbBypass" || key == "scapeBypass" || key == "scapeReverse" || key == "scapeMode")
                {
                    paramValue = juce::roundToInt(paramValue);
                    stateValue = juce::roundToInt(paramValue);
                }
                processor.editor->setParameterValue(key, paramValue);
            }
        } // end parameter update
    }
}

void EffectsPluginProcessor::requestUserFileSelection(std::promise<elem::js::Object> &promise)
{
    juce::MessageManager::callAsync([this, &promise]()
                                    {
                                        const bool browsed = chooser.browseForMultipleFilesToOpen(nullptr);
                                        elem::js::Object result;
                                        result.insert_or_assign("success", static_cast<elem::js::Boolean>(browsed));
                                        juce::Array<juce::File> selected(chooser.getResults());
                                        // Create an elem::js::Array to hold the file paths
                                        elem::js::Array selectedFilesAsValue;
                                        validateUserUpload(selected, selectedFilesAsValue, result);
                                        promise.set_value(result);
                                    });
}

void ViewClientInstance::userFileUploadHandler( const int &hpfValue, int &retFlag)
{
    processor.userCutoffChoice = hpfValue;
    std::promise<elem::js::Object> promise;
    std::future<elem::js::Object> future = promise.get_future();

    // begin async file selection
    chooserIsOpen.store(true);
     processor.requestUserFileSelection(promise);
    // get the future back
    
    elem::js::Object gotFiles = future.get();

    chooserIsOpen.store(false);
    uploadStatus = gotFiles["status"].isNumber() ? static_cast<elem::js::Number>(gotFiles["status"]) : 0;

    // Failed
    if ( gotFiles["success"].isBool() && static_cast<elem::js::Boolean>(gotFiles["success"])  == false )
    {
        processor.dispatchError("[ Import Error ]", errorStatuses( uploadStatus ));
        {
            retFlag = 0;
            return ;
        };
    }

    auto files = gotFiles["files"].getArray();
    
    if ( files.size() > 4) processor.pruneVFS();

    if (files.empty())
    {
        processor.dispatchError("[ Import Error ]", errorStatuses(static_cast<int>(ScapeError::UNKNOWN_ERROR)));
        {
            retFlag = 0;
            return ;
        };
    }
 
    // Success
    SlotName targetSlot = processor.slotManager->get_and_step_target_slot_name();

    for (const auto& fileValue : files)
    {
        auto filePath = juce::String(static_cast<std::string>(fileValue));
        juce::File file(filePath);
        if (file.existsAsFile())
        {
            processor.slotManager->assignFileHookToSlot(targetSlot, file);
            processor.slotManager->assignFilenameToSlot(targetSlot, file);
            processor.userBankManager.incrementUserBank();
            targetSlot = nextSlot(targetSlot);
        }
    }
        processor.updateStateWithAssetsData();

        retFlag = 1;

}

choc::network::HTTPContent ViewClientInstance::getHTTPContent(std::string_view path)
{
    // not using HTML
    return {};
}

void ViewClientInstance::upgradedToWebSocket(std::string_view path)
{
    // not using HTML
}
