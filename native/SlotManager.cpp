

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
        std::cout << "Slot " << index << " : " << toString(slot) << " : " << assetInSlot.second.filenameForView << " using " << (isDefault ? " default " : " user ") << " peaks." << std::endl;
    }
    wrappedPeaks.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value(peaks));
}

void SlotManager::wrapStateForView(elem::js::Object &wrappedState)
{
    elem::js::Object processorState = processor.state;

    elem::js::Array fnames;
    fnames.resize(processor.assetsMap.size());
    for (const auto &assetInSlot : processor.assetsMap)
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        fnames[index] = elem::js::Value(assetInSlot.second.filenameForView.toStdString());
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
        fnames[index] = elem::js::Value(assetInSlot.second.filenameForView.toStdString());
    }
    wrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(fnames));
}

void SlotManager::assignVFSpathToSlot(const SlotName &slotName, const std::string &vfsPath)
{
    Asset assetInSlot = getAssetFrom(slotName);
    elem::js::Object vfsPathEntry;
    vfsPathEntry.insert_or_assign(vfsPath, elem::js::Value(vfsPath));
    assetInSlot.vfsPathHistory.push_back(vfsPathEntry);
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

std::vector<elem::js::Object> SlotManager::getVFSpathHistoryForSlot(const SlotName &slotName)
{
    Asset assetInSlot = getAssetFrom(slotName);
    return assetInSlot.vfsPathHistory;
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, juce::AudioBuffer<float> &buffer, bool defaultSlot)
{
    Asset assetInSlot = getAssetFrom(slotName);
    if (defaultSlot)
    {
        assetInSlot.defaultPeaksForView = processor.getReducedAudioBuffer(buffer);
    }
    else
    {
        assetInSlot.userPeaksForView = processor.getReducedAudioBuffer(buffer);
    }
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignFileAssetToSlot(const SlotName &slotName, const juce::File &file)
{
    Asset assetInSlot = getAssetFrom(slotName);
    // check if the slot already has a userStereoFile
    // and push it into the slote filepath history
    if (assetInSlot.userStereoFile.getFileName().isNotEmpty())
    {
        assetInSlot.userPathNameHistory.push_back(assetInSlot.userStereoFile.getFullPathName().toStdString());
    }
    assetInSlot.userStereoFile = file;
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignFilenameToSlot(const SlotName &slotName, const juce::File &file)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.filenameForView = file.getFileNameWithoutExtension();
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
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
        
        assetInSlot.userStereoFile = juce::File();
        assetInSlot.filenameForView = juce::String();
        if (!pruneVFS)
            assetInSlot.userPeaksForView = assetInSlot.defaultPeaksForView;
        processor.assetsMap.insert_or_assign(slot, assetInSlot);
    }
    processor.userBankManager.resetUserBank();
    if (pruneVFS)
        processor.pruneVFS();
}
