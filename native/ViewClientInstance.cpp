#include "ViewClientInstance.h"

#include <sys/proc.h>

#include "AudioFileLoader.h"
#include "PluginProcessor.h"
#include "SlotName.h"
#include "Utilities.h"

using Results = std::map<std::string, elem::js::Object>;

ViewClientInstance::ViewClientInstance(Processor& processor)
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
                int filterCutoff = static_cast<elem::js::Number>(hpfValue);
                userFileUploadHandler(filterCutoff);
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            // ▮▮ "'requestState" called frequently from front end
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
            if (key == "requestState")
            {
                if (!processor.editor) return;

                // === first handle peaks for view ===
                if ( processor.slotManager->peaksDirty.load() )
                {
                    elem::js::Object peaks_to_dispatch;
                    processor.slotManager->wrapPeaksForView( processor.assetsMap, peaks_to_dispatch );
                    juce::String serializedPeaks = elem::js::serialize(peaks_to_dispatch);
                    std::cout << "Dispatching reduced peaks to front end..." << std::endl;
                    sendWebSocketMessage( std::move( serializedPeaks.toStdString() ));
                    processor.slotManager->peaksDirty.store(false);
                }

                // === hash state for performance optimization ===

                elem::js::Object state_to_dispatch = processor.state;
                util::strip_viewstate_from_state(state_to_dispatch);
                state_to_dispatch.insert_or_assign(WS_RESPONSE_KEY_FOR_STATE, state_to_dispatch);
                juce::String serializedState = elem::js::serialize(state_to_dispatch);
                std::size_t newHash = serializedState.hashCode();

                if (newHash != processor.slotManager->lastStateHash)
                {
                    std::cout << ".>>." ;
                    sendWebSocketMessage( std::move( serializedState.toStdString() ) );
                    processor.slotManager->lastStateHash = newHash;
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
                continue;
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "custom" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

            if (key == "custom")
            {
                processor.slotManager->switchSlotsTo(true, false);
                std::cout << "switching to custom slots" << std::endl;
                continue;
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ "prune and reset" ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // TODO: Fix this! it was being called from the front end
            // when new IR loads and already in factory mode
            if (key == "reset" )
            {

                // processor.clear_userFiles_in_assets_map();
                // processor.slotManager->switchSlotsTo(false, true);
                // std::cout << "resetting slots" << std::endl;
                // continue;
            }

            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮ simple parameter update request       ▮▮▮▮▮▮▮ //
            // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
            if (hpfValue.isNumber() && processor.parameterMap.contains(key) )
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

void ViewClientInstance::userFileUploadHandler(const int& hpfValue) const
{
    processor.userCutoffChoice = hpfValue;
    processor.fileLoader->loadNewFile();
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
