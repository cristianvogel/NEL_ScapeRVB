// local headers
#include "SlotManager.h"
#include "Asset.h"
#include "Utilities.h"

using Props = Asset::Props;

SlotManager::SlotManager(Processor& processor) : processor(processor)
{
}


Asset& SlotManager::getAssetFrom(std::map<SlotName, Asset>& assetsMap, const SlotName& slotName) const
{
    auto it = assetsMap.find(slotName);
    if (it != assetsMap.end())
    {
        // Slot exists, return a reference to the asset in the slot.
        return it->second;
    }
    else
    {
        // Slot does not exist: throw exception or handle error
        throw std::runtime_error("SlotName not found in the assetsMap.");
        // Alternatively, return a safe default object managed elsewhere if you cannot throw.
    }
    //
}

int SlotManager::getIndexForSlot(const SlotName& slotName)
{
    return static_cast<int>(slotName);
}

int SlotManager::stepToNextTargetSlotIndex()
{
    return targetSlotIndex = (targetSlotIndex + 1) % 4;
}

int SlotManager::getCurrentTargetSlotIndex() const
{
    return targetSlotIndex;
};


void SlotManager::updateSlotDataInAssetMap(std::map<SlotName, Asset>& assetsMap,
                                           const SlotName& slotName,
                                           Asset& assetData) const
{
    assetsMap.insert_or_assign(slotName, assetData);
    logAssetsMap();
}

void SlotManager::logAssetsMap() const
{
    // log by referring to processor, so we are sure that's what is being consumed
    for (const auto& entry : processor.assetsMap)
    {
        // Retrieve slotName and asset from the map entry
        const auto& slotName = entry.first;
        const auto& asset = entry.second;

        // Manually log their contents
        std::cout
            << "SlotName: " << toString(slotName)
            << "ReducedPeaks: " << asset.get<std::vector<float>>(Props::reducedPeaks).size()
            << "UserPeaks: " << asset.get<std::vector<float>>(Props::userPeaksForView).size()
            << "PeaksInView:" << asset.get<std::vector<float>>(Props::currentPeakDataInView).size()
            << std::endl;
    }
}

void SlotManager::assignDefaultFilenameToSlot(std::map<SlotName, Asset>& assetsMap,
                                               SlotName& slotName) const
{
    Asset& asset = assetsMap[slotName];
    const auto defaultFilename = asset.get<std::string>(Props::defaultFilenameForView);
    asset.set(Props::defaultFilenameForView, defaultFilename);
}

void SlotManager::assignPeaksToSlot(std::map<SlotName, Asset>& assetsMap,
                                    const SlotName& slotName,
                                    const std::vector<float>& reducedSampleData,
                                    const bool defaultSlot = true)
{
    Asset& asset = assetsMap[slotName];
    if (defaultSlot)
    {
        asset.set(Props::defaultPeaksForView, reducedSampleData);
    }
    else
    {
        asset.set(Props::userPeaksForView, reducedSampleData);
    }
    peaksDirty.store(true);
}


void SlotManager::assignUserFileToSlot(std::map<SlotName, Asset>& assetsMap,
                                       const SlotName& slotName,
                                       const juce::File& file) const
{
    Asset& asset = assetsMap[slotName];
    asset.set(Props::userStereoFile, file);
}


void SlotManager::assignFilenameForViewToSlot(std::map<SlotName, Asset>& assetsMap,
                                              const SlotName& slotName,
                                              const juce::File& file) const
{
    Asset& asset = assetsMap[slotName];
    asset.set(Props::filenameForView, file.getFileNameWithoutExtension().substring(0,10).toStdString());
}


void SlotManager::wrapPeaksForView(std::map<SlotName, Asset>& assetsMap, elem::js::Object& peaksContainer) const
{
    elem::js::Array peaks;
    if (peaks.size() != 4)
        peaks.resize(4);

    // go through whole assetsMap
    //
    for (const auto& [slot_name, asset] : assetsMap)
    {
        const auto current = asset.get<std::vector<float>>(Props::reducedPeaks);

        std::cout << "wrapping reduced peaks for view size >> " << current.size() << std::endl;
        // set the relevant index in the peaks vector
        const int index = getIndexForSlot(slot_name);
        peaks[index] = elem::js::Value(current);
    }
    // put the wrapped peaks data of each slot into the passed container keyed by WS_RESPONSE_KEY_FOR_PEAKS
    peaksContainer.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value(peaks));
    //
}

void SlotManager::wrapStateForView(elem::js::Object& containerForWrappedState) const
{
    elem::js::Object processorState = processor.state;
    // prepare extra state about filenames, for the front end
    elem::js::Array values;

    values.resize(processor.assetsMap.size());
    for (auto& [slot_name, asset] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::Value(asset.get<std::string>(Props::filenameForView));
    }

    processorState.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(values));
    // inject a special rounded case for the 'structure' parameter
    // this is needed because host is normalised but the front end
    // expects a value between 0 and 15. Float rounding error is
    // happening in the plugin host, so fix here
    if (processorState.contains("structure"))
    {
        auto hostValue = static_cast<elem::js::Number>(processorState.at("structure"));
        const float stepSize = 1.0f / 16.0f;
        const float roundedValue = std::round(hostValue / stepSize) * stepSize;
        processorState.insert_or_assign("structure", static_cast<elem::js::Number>(roundedValue));
    }
    // Now wrap up
    containerForWrappedState.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_STATE, elem::js::Value(processorState));
}

void SlotManager::wrapFileNamesForView(elem::js::Object& containerForWrappedFileNames) const
{
    elem::js::Array values;
    //
    values.resize(processor.assetsMap.size());
    for (const auto& [slot_name, asset] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::Value(asset.get<std::string>(Props::filenameForView));
    }
    //
    containerForWrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(values));
}


void SlotManager::switchSlotsTo(const bool customScape, const bool pruneVFS = false)
{
    //
    for (auto& [slot_name, asset] : processor.assetsMap)
    {
        if (customScape)
        {
            // just in case the userStereoFile doesn't exist anymore
            // fall back to default
            const auto fileInSlot = asset.get<juce::File>(asset.hasUserStereoFile()
                                                               ? Props::userStereoFile
                                                               : Props::defaultStereoFile);
            const auto croppedName = fileInSlot.getFileNameWithoutExtension().substring(0, 10).toStdString();
            asset.set(Props::filenameForView, croppedName);
            // toggle scapeMode to custom in the plugin
            processor.state.insert_or_assign("scapeMode", 1.0);
        }
        else
        {
            // we are back in factory mode
            const auto fn = asset.get<std::string>(Props::defaultFilenameForView);
            asset.set(Props::filenameForView, fn);
            processor.state.insert_or_assign("scapeMode", 0.0);
        }
        lastStateHash = -1;
    }

    //

    if (pruneVFS)
    {
        processor.pruneVFS();
        lastStateHash = -1;
       // processor.userBankManager.resetUserBank();
        peaksDirty.store(true);
    }
}
