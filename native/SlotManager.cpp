

#include "SlotManager.h"
#include "Assets.h"

SlotManager::SlotManager(EffectsPluginProcessor &processor) : processor(processor) {}

void SlotManager::wrapPeaksForView(elem::js::Object &wrappedPeaks)
{
    elem::js::Array peaks;
    peaks.resize(processor.assetsMap.size());
    for (const auto &assetInSlot : processor.assetsMap)
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        peaks[index] = elem::js::Value(assetInSlot.second.userPeaksForView);
        std::cout << "Slot " << index << " : " << toString(slot) << assetInSlot.second.filenameForView << std::endl;
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
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    assetInSlot.vfsPathsForRealtime.push_back(vfsPath);
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, juce::AudioBuffer<float> &buffer, bool defaultSlot)
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
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
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    assetInSlot.userStereoFile = file;
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignFilenameToSlot(const SlotName &slotName, const juce::File &file)
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
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

void SlotManager::resetUserSlots()
{
    auto emptyBuffer = juce::AudioBuffer<float>(1, 256);
    emptyBuffer.clear();
    for (const auto &kv : processor.assetsMap)
    {
        SlotName slot = kv.first;
        Asset assetInSlot = processor.assetsMap.at(slot);
        assetInSlot.userStereoFile = juce::File();
        assetInSlot.filenameForView = juce::String();
        assetInSlot.userPeaksForView = assetInSlot.defaultPeaksForView;
        processor.assetsMap.insert_or_assign(slot, assetInSlot);
    }
}