// local headers
#include "SlotManager.h"
#include "Asset.h"
#include "AudioFileLoader.h"
#include "Utilities.h"

using Props = Asset::Props;

SlotManager::SlotManager(Processor& processor) : processor(processor)
{
}

void SlotManager::wrapPeaksForView(std::map<SlotName, Asset>& assetsMap, elem::js::Object& containerForWrappedPeaks)
{
    // go through whole assetsMap
    peaks.resize(assetsMap.size());
    for (const auto& [targetSlot, asset] : assetsMap)
    {
        // which peaks to wrap depends on user mode
        auto current = asset.get<std::vector<float>>(processor.userScapeMode
                                                         ? Props::userPeaksForView
                                                         : Props::defaultPeaksForView);
        if (current.empty())
        {
            current = asset.get<std::vector<float>>(Props::currentPeakDataInView);
        }

        // set the relevant index in the peaks vector
        const int index = getIndexForSlot(targetSlot);
        assert(index >= 0 && index < DEFAULT_SLOT_NAMES.size());
        std::cout << "wrapped peaks for slot " << slotname_to_string(targetSlot) << " at index " << index << " size >> "
            << current.size() << std::endl;
        peaks[index] = elem::js::Float32Array(current);
    }
    // put the wrapped peaks data of each slot into the passed container keyed by WS_RESPONSE_KEY_FOR_PEAKS
    containerForWrappedPeaks.insert_or_assign(WS_RESPONSE_KEY_FOR_PEAKS, peaks);
}

void SlotManager::wrapStateForView(const std::map<SlotName, Asset>& assetsMap, elem::js::Object& state_to_dispatch) const
{
    // prepare extra non-host state for the front end


    elem::js::Array irNames;
    for (const auto& [slot, asset] : assetsMap)
    {
        if (asset.has_filename_for_view())
        {
            irNames.push_back(asset.get_all_filenames()[0]);
        }
        else
        {
            irNames.push_back(slotname_to_string(slot));
        }
    }
    state_to_dispatch.insert_or_assign(WS_RESPONSE_FILENAMES,irNames);


    // --- Wrap Structure param
    // inject a special rounded case for the 'structure' parameter
    // this is needed because host is normalised but the front end
    // expects a value between 0 and 15. Float rounding error is
    // happening in the plugin host, so fix here
    const auto hostValue = static_cast<elem::js::Number>(processor.state.at("structure"));
    constexpr float stepSize = 1.0f / 16.0f;
    const float roundedValue = std::round(hostValue / stepSize) * stepSize;


    //
    // Now bundle host and extra state together
    state_to_dispatch.insert_or_assign(WS_CURRENT_SLOT_INDEX, static_cast<elem::js::Number>(processor.fileLoader->currentSlotIndex));
    state_to_dispatch.insert_or_assign(WS_STRUCTURE_INDEX, static_cast<elem::js::Number>(roundedValue));
    state_to_dispatch.insert_or_assign(WS_RESPONSE_FILENAMES, irNames);
    // wrap into container
    state_to_dispatch.insert_or_assign(WS_RESPONSE_KEY_FOR_STATE, processor.state);
}

// will flag peaksDirty before going out of scope
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
            asset.set(Props::currentPeakDataInView, peaksInView);
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

void SlotManager::populate_assetsMap_from_File(std::map<SlotName, Asset>& assetsMap,
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
}

void SlotManager::populate_assetsMap_from_Asset(std::map<SlotName, Asset>& assetsMap,
                                           const SlotName& slotName,
                                           Asset& assetData)
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
            << "SlotName: " << slotname_to_string(slotName)
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

std::size_t SlotManager::getIndexForSlot(const SlotName& slotName)
{
    return static_cast<int>(slotName);
}

void SlotManager::resetStateHashes()
{
    lastPeaksHash = -1;
    lastStateHash = -1;
}


std::map< std::string, size_t > SlotManager::getStateHashes()
{
    std::map< std::string, size_t > hashes;
    hashes.insert_or_assign( "state", lastStateHash );
    hashes.insert_or_assign( "peaks", lastPeaksHash );
    return hashes;
}


