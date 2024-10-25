

#include "SlotManager.h"
#include "Assets.h"

SlotManager::SlotManager(EffectsPluginProcessor &processor) : processor(processor) {}

Asset SlotManager::getAssetFrom(const SlotName &slotName)
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    return assetInSlot;
}

int SlotManager::getIndexForSlot(const SlotName &slotName)
{
    return static_cast<int>(slotName);
}

void SlotManager::updateState(const SlotName &slotName, Asset &assetInSlot)
{
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}


void SlotManager::assignVFSpathToSlot(const SlotName &slotName, const std::string &vfsPath)
{
    Asset assetInSlot = getAssetFrom(slotName);
    elem::js::Object vfsPathEntry;
    vfsPathEntry.insert_or_assign(vfsPath, elem::js::Value(vfsPath));
    assetInSlot.vfsPathHistory.push_back(vfsPathEntry);
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, juce::AudioBuffer<float> &buffer, bool defaultSlot)
{
    if (defaultSlot)
    {
        assign(slotName, Asset::Props::defaultPeaksForView, buffer);
    }
    else
    {
        assign(slotName, Asset::Props::userPeaksForView, buffer);
    }
}

void SlotManager::assignFileAssetToSlot(const SlotName &slotName, const juce::File &file)
{
    assign(slotName, Asset::Props::userStereoFile, file);
}

void SlotManager::assignDefaultFilenameToSlot(const SlotName &slotName)
{
    assign(slotName, Asset::Props::defaultFilenameForView, "");
}

void SlotManager::assignFilenameToSlot(const SlotName &slotName, const juce::File &file)
{
    assign(slotName, Asset::Props::userFilenameForView, file);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::File &file)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.userFilenameForView = file.getFileNameWithoutExtension();
    updateState(slotName, assetInSlot);
}



void SlotManager::assign(const SlotName &slotName, Asset::Props property, const std::string &str)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.userFilenameForView = str;
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::AudioBuffer<float> &buffer)
{
    Asset assetInSlot = getAssetFrom(slotName);
    if (property == Asset::Props::defaultPeaksForView)
    {
        assetInSlot.defaultPeaksForView = processor.getReducedAudioBuffer(buffer);
    }
    else if (property == Asset::Props::userPeaksForView)
    {
        assetInSlot.userPeaksForView = processor.getReducedAudioBuffer(buffer);
    }
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::wrapPeaksForView(elem::js::Object &wrappedPeaks)
{
    elem::js::Array peaks;
    if (peaks.size() != 4)
        peaks.resize(4);

    for (const auto &assetInSlot : processor.assetsMap)
    {
        bool isDefault = false;
        auto peakData = assetInSlot.second.userPeaksForView;
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        if (peakData.size() == 0)
        {
            isDefault = true;
            peakData = assetInSlot.second.defaultPeaksForView;
        }
        peaks[index] = elem::js::Value(peakData);
    }
    wrappedPeaks.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value(peaks));
}

void SlotManager::wrapStateForView(elem::js::Object &wrappedState)
{
    elem::js::Object processorState = processor.state;

    elem::js::Array fnames;
    fnames.resize(processor.assetsMap.size());
    for ( auto &assetInSlot : processor.assetsMap)
    {
        const SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        if (assetInSlot.second.userFilenameForView.isEmpty())
        {
            assetInSlot.second.userFilenameForView = assetInSlot.second.defaultFilenameForView;
        }
        fnames[index] = elem::js::Value(assetInSlot.second.userFilenameForView.toStdString());
    }
    processorState.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(fnames));
    wrappedState.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_STATE, elem::js::Value(processorState));
}

void SlotManager::wrapFileNamesForView(elem::js::Object &wrappedFileNames)
{
    elem::js::Array fnames;
    fnames.resize(processor.assetsMap.size());
    for (const auto &assetInSlot : processor.assetsMap)
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        fnames[index] = elem::js::Value(assetInSlot.second.userFilenameForView.toStdString());
    }
    wrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(fnames));
}


std::vector<elem::js::Object> SlotManager::getVFSpathHistoryForSlot(const SlotName &slotName)
{
    Asset assetInSlot = getAssetFrom(slotName);
    return assetInSlot.vfsPathHistory;
}


SlotName SlotManager::findFirstSlotWithoutUserStereoFile() const
{
    for (const auto &assetInSlot : processor.assetsMap)
    {
        if (assetInSlot.second.userStereoFile.getFileName().isEmpty())
        {
            std::cout << "Slot " << toString(assetInSlot.first) << " is  empty" << std::endl;
            return assetInSlot.first;
        }
    }
    return SlotName::LIGHT; // Return the first slot if all are filled or all empty
}

void SlotManager::resetUserSlots(bool pruneVFS)
{
    // not resetting history

    for (const auto &kv : processor.assetsMap)
    {
        SlotName slot = kv.first;
        Asset assetInSlot = processor.assetsMap.at(slot);

        // assetInSlot.userStereoFile = juce::File();
        assetInSlot.filenameForView = assetInSlot.;
        if (!pruneVFS)
        {
            assetInSlot.userPeaksForView = assetInSlot.defaultPeaksForView;
        }
        processor.assetsMap.insert_or_assign(slot, assetInSlot);
    }

    if (pruneVFS)
    {
        processor.pruneVFS();
        processor.userBankManager.resetUserBank();
    }
}
