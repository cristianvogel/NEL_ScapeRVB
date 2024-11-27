#include "ViewClientInstance.h"
#include "PluginProcessor.h"
#include "SlotName.h"

using Results = std::map<std::string, elem::js::Object>;

ViewClientInstance::ViewClientInstance(EffectsPluginProcessor& processor)
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
    if (!running.load() || processor.isSuspended() || processor.editor == nullptr)
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

        for (auto& [key, hpfValue] : socketMessage)
        {
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            //  "selectFiles" Opens file picker,
            //  handles file selection, and assigns files to slots
            //  passes in a value from UI for HPF cutoff which is
            //  otherwise redundant in the methods that follow
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            if (key == "selectFiles" && hpfValue.isNumber())
            {
                if (chooserIsOpen.load()) continue;
                uploadStatus = 0;
                int filterCutoff = static_cast<elem::js::Number>(hpfValue);
                userFileUploadHandler(filterCutoff);
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            // ▮▮ "'requestState" called frequently from front end
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            if (key == "requestState")
            {
                if (!processor.editor || chooserIsOpen.load()) return;


                // ============ performance optimization ========================
                // hash the serialized state, send only if changed
                elem::js::Object stateContainer;
                processor.slotManager->wrapStateForView(stateContainer);
                juce::String serializedState = elem::js::serialize(stateContainer);
                int currentStateHash = serializedState.hashCode();

                if (currentStateHash != processor.slotManager->lastStateHash)
                {
                    sendWebSocketMessage(serializedState.toStdString());
                    processor.slotManager->lastStateHash = currentStateHash;
                }
                if (processor.slotManager->peaksDirty)
                {
                    elem::js::Object peaksContainer;
                    std::cout << "wrapping and sending peaks to View.." << std::endl;
                    processor.slotManager->wrapPeaksForView(peaksContainer);
                    juce::String serializedPeaks = elem::js::serialize(peaksContainer);
                    sendWebSocketMessage(serializedPeaks.toStdString());
                    processor.slotManager->peaksDirty = false;
                }
            }

            // Custom Scape buttons
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "factory" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "factory")
            {
                processor.slotManager->switchSlotsTo(false, false);
                std::cout << "switching to factory slots" << std::endl;
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "custom" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "custom")
            {
                processor.slotManager->switchSlotsTo(true, false);
                std::cout << "switching to custom slots" << std::endl;
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "prune and reset" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (key == "reset")
            {
                processor.clear_userFiles_in_assets_map();
                processor.slotManager->switchSlotsTo(false, true);
                std::cout << "resetting slots" << std::endl;
            }

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

void EffectsPluginProcessor::requestUserFileSelection(std::promise<Results>& promise)
{
    juce::MessageManager::callAsync([this, &promise]()
    {
        const bool browsed = chooser.browseForMultipleFilesToOpen(nullptr);
        if (!browsed) return;
        juce::Array<juce::File> selected(chooser.getResults());
        promise.set_value(validateUserUpload(selected));
    });
}

void ViewClientInstance::userFileUploadHandler(const int& hpfValue)
{
    processor.userCutoffChoice = hpfValue;
    std::promise<EffectsPluginProcessor::Results> promise;
    std::future<EffectsPluginProcessor::Results> future = promise.get_future();

    // begin async file selection
    chooserIsOpen.store(true);
    processor.requestUserFileSelection(promise);
    // get the future back
    EffectsPluginProcessor::Results results_object = future.get();

    if (results_object.empty()) return;

    for (const auto & slot : DEFAULT_SLOT_NAMES)
    {
        SlotName targetSlot = fromString(slot); // outer key
        const auto entry = results_object.at(slot);
        const auto status = entry.at("status");
        const auto file_path = entry.at("filePath");

        // Validation status
        if ( status.isNumber() && static_cast<int>(status) != 0 )
        {
            processor.dispatchError("[ Import Error ]", errorStatuses(status));
        }

        // File path

        if (juce::File file(file_path.toString()); file.existsAsFile())
        {
            processor.slotManager->assignFileHookToSlot(targetSlot, file);
            processor.slotManager->assignFilenameToSlot(targetSlot, file);
            processor.userBankManager.incrementUserBank();
            processor.userFilesWereImported.store(true);
        }
        else
        {
            processor.dispatchError("[ Import Error ]", errorStatuses(5)); // not found
        }
    }
    // finally, update state with valid results of file import
    processor.updateStateWithAssetsData();
    chooserIsOpen.store(false);
} // end userFileUploadHandler

choc::network::HTTPContent ViewClientInstance::getHTTPContent(std::string_view path)
{
    // not using HTML
    return {};
}

void ViewClientInstance::upgradedToWebSocket(std::string_view path)
{
    // not using HTML
}
