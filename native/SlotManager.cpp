// local headers
#include "SlotManager.h"
#include "Asset.h"
#include "Utilities.h"

using Props = Asset::Props;

SlotManager::SlotManager(Processor& processor) : processor(processor)
{
}

void SlotManager::wrapPeaksForView(std::map<SlotName, Asset>& assetsMap, elem::js::Object& peaksContainer)
{
    elem::js::Array peaks;
    peaks.resize(4);
    // go through whole assetsMap
    for (const auto& [slot_name, asset] : assetsMap)
    {
        // which peaks to wrap depends on user mode
        auto current = asset.get<std::vector<float>>(processor.userScapeMode
                                                               ? Props::userPeaksForView
                                                               : Props::defaultPeaksForView);
        if (current.empty())
        {
            current = asset.get<std::vector<float>>( Props::currentPeakDataInView );
        }
        // set the relevant index in the peaks vector
        const int index = getIndexForSlot(slot_name);
        std::cout << "wrapped peaks for slot " << toString(slot_name) << " at index " << index << " size >> "
            << current.size() << std::endl;
        peaks[index] = elem::js::Float32Array(current);
    }
    // put the wrapped peaks data of each slot into the passed container keyed by WS_RESPONSE_KEY_FOR_PEAKS
    peaksContainer.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Array(peaks));
    //
    peaksDirty.store(true);
}

void SlotManager::wrapStateForView(elem::js::Object& containerForWrappedState) const
{

    // prepare extra state about filenames, for the front end
    elem::js::Array values;

    values.resize(processor.assetsMap.size());
    for (auto& [slot_name, asset] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::String(asset.get<std::string>(Props::filenameForView));
    }

    processor.state.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(values));
    // inject a special rounded case for the 'structure' parameter
    // this is needed because host is normalised but the front end
    // expects a value between 0 and 15. Float rounding error is
    // happening in the plugin host, so fix here
    if (processor.state.contains("structure"))
    {
        const auto hostValue = static_cast<elem::js::Number>(processor.state.at("structure"));
        constexpr float stepSize = 1.0f / 16.0f;
        const float roundedValue = std::round(hostValue / stepSize) * stepSize;
        processor.state.insert_or_assign("structure", static_cast<elem::js::Number>(roundedValue));
    }
    // Now wrap up
    containerForWrappedState.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_STATE, processor.state);
}

void SlotManager::wrapFileNamesForView(elem::js::Object& containerForWrappedFileNames) const
{
    elem::js::Array values;
    values.resize(processor.assetsMap.size());
    for (const auto& [slot_name, asset] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::String(asset.get<std::string>(Props::filenameForView));
    }
    containerForWrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Array(values));
}

void SlotManager::switchSlotsTo(const bool customScape, const bool pruneVFS = false)
{
    //
    for (auto& [slotName, asset] : processor.assetsMap)
    {
        if (customScape)
        {
            // just in case the userStereoFile doesn't exist anymore
            // fall back to default
            const auto fileInSlot = asset.get<juce::File>(asset.hasUserStereoFile()
                                                              ? Props::userStereoFile
                                                              : Props::defaultStereoFile);
            const auto croppedName = asset.get<std::string>(asset.hasUserStereoFile()
                                                                ? Props::userFilenameForView
                                                                : Props::defaultFilenameForView);
            const auto peaksInView = asset.get<std::vector<float>>(asset.hasUserStereoFile()
                                                                ? Props::userPeaksForView
                                                                : Props::defaultPeaksForView);
            asset.set( Props::currentPeakDataInView, peaksInView);
            asset.set(Props::filenameForView, croppedName);
            // toggle scapeMode to custom in the plugin
            processor.state.insert_or_assign("scapeMode", 0.55); // avoiding odd behaviour with 1.0
            processor.userScapeMode = true;
        }
        else
        {
            // we are back in factory mode
            const auto fn = asset.get<std::string>(Props::defaultFilenameForView);
            asset.set(Props::filenameForView, fn);
            processor.state.insert_or_assign("scapeMode", 0.0);
            processor.userScapeMode = false;
        }
        lastStateHash = -1;
    }

    if (pruneVFS)
    {
        processor.pruneVFS();
        lastStateHash = -1;
    }
    // in all cases, peaks need to be redrawn
    peaksDirty.store(true);
}

void SlotManager::populateSlotFromFileData(std::map<SlotName, Asset>& assetsMap,
                                           const SlotName& slotName,
                                           bool isExternal,
                                           const juce::File& file,
                                           const std::vector<float>& reducedSampleData
)
{
    Asset& asset = assetsMap[slotName];
    asset.set(isExternal ? Props::userStereoFile : Props::defaultStereoFile, file);
    const auto& croppedFilename = file.getFileNameWithoutExtension().substring(0, 10).toStdString();
    asset.set(isExternal ? Props::userFilenameForView : Props::defaultFilenameForView, croppedFilename);
    asset.set(isExternal ? Props::userPeaksForView : Props::defaultPeaksForView, reducedSampleData);
    peaksDirty.store(true);
}

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
            << "UserPeaks: " << asset.get<std::vector<float>>(Props::userPeaksForView).size()
            << "PeaksInView:" << asset.get<std::vector<float>>(Props::currentPeakDataInView).size()
            << std::endl;
    }
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
    }
}

int SlotManager::getIndexForSlot(const SlotName& slotName)
{
    return static_cast<int>(slotName);
}
