
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
                int retFlag = 0;
                uploadStatus = 0; 
                int filterCutoff = elem::js::Number( hpfValue );
                userFileUploadHandler(filterCutoff, retFlag);
                if (retFlag != 1)
                    continue;
            } // end selectFiles

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮ "'requestState" called frequently from front end  ▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (key == "requestState")
            {
                if (!processor.editor)
                    return;

                elem::js::Object stateContainer;
                elem::js::Object peaksContainer;
                // ============ perfomance optimization ========================
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
                    std::cout << "wrapping and sending peaks to View.." << std::endl;
                    processor.slotManager->wrapPeaksForView(peaksContainer);
                    juce::String serializedPeaks = elem::js::serialize(peaksContainer);
                    sendWebSocketMessage(serializedPeaks.toStdString());
                    processor.slotManager->peaksDirty = false;
                }
                continue;
            } // end requestState

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "factory" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "factory")
            {
                processor.slotManager->switchSlotsTo(false, false);
                processor.updateStateWithAssetsData();
                std::cout << "switching to factory slots" << std::endl;
                continue;
            } // end switchToDefaultSlots

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "custom" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "custom")
            {
                processor.slotManager->switchSlotsTo(true, false);
                processor.updateStateWithAssetsData();
                std::cout << "switching to custom slots" << std::endl;
                continue;
            } // end switchToUserSlots

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮ simple parameter update request       ▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (hpfValue.isNumber() && processor.parameterMap.count(key) > 0)
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

void ViewClientInstance::userFileUploadHandler( const int &hpfValue, int &retFlag)
{
    processor.userCutoffChoice = hpfValue;
    std::promise<elem::js::Object> promise;
    std::future<elem::js::Object> future = promise.get_future();

    // begin async file selection
     processor.requestUserFileSelection(promise);
    // get the future back
    
    elem::js::Object gotFiles = future.get();

    uploadStatus = gotFiles["status"].isNumber() ? elem::js::Number( gotFiles["status"] ) : 0;

    // Failed
    if ( gotFiles["success"].isBool() && elem::js::Boolean(gotFiles["success"])  == false )
    {
        processor.dispatchError("[ Import Error ]", errorStatuses( uploadStatus ));
        {
            retFlag = 0;
            return ;
        };
    }

    auto files = gotFiles["files"].getArray();
    
    if ( files.size() >= 4) processor.pruneVFS();

    if (files.empty())
    {
        processor.dispatchError("[ Import Error ]", errorStatuses(static_cast<int>(ScapeError::UNKNOWN_ERROR)));
        {
            retFlag = 0;
            return ;
        };
    }
 
    // Success
    SlotName targetSlot = processor.slotManager->findFirstSlotWithoutUserStereoFile();

    for (const auto fileValue : files)
    {
        juce::String filePath = juce::String(static_cast<std::string>(fileValue));
        juce::File file(filePath);
        if (file.existsAsFile())
        {
            if (!processor.processImportedResponseBuffers(file, targetSlot))
            {
                continue;
            }
            processor.slotManager->assignFileAssetToSlot(targetSlot, file);
            processor.slotManager->assignFilenameToSlot(targetSlot, file);

           
                processor.userBankManager.incrementUserBank();
            
            targetSlot = nextSlot(targetSlot);
        }
    }
    processor.updateStateWithAssetsData();
    processor.dispatchStateChange();
    {
        retFlag = 1;
        return;
    };
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
