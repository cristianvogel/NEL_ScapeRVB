
#include "SlotManager.h"
#include "Assets.h"

SlotManager::SlotManager ( EffectsPluginProcessor &processor ) : processor( processor ) { }

void SlotManager::wrapPeaksForView(elem::js::Object &wrappedPeaks)
{
    elem::js::Array peaks;
    peaks.resize(processor.assetsMap.size());
    for (const auto &assetInSlot : processor.assetsMap)
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        peaks[index] = elem::js::Value(assetInSlot.second.peakDataForView);
        std::cout << "Slot " << index << " : " << toString(slot) << assetInSlot.second.filnameForView << std::endl;
    }
    wrappedPeaks.insert_or_assign( processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value(peaks) );
}

void SlotManager::wrapStateForView(elem::js::Object &wrappedState)
{
    elem::js::Object processorState = processor.state;
    elem::js::Array fnames;
    fnames.resize( processor.assetsMap.size() );
    for (const auto &assetInSlot : processor.assetsMap)
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        fnames[index] = elem::js::Value(assetInSlot.second.filnameForView.toStdString());
    }
    processorState.insert_or_assign( processor.KEY_FOR_FILENAMES, elem::js::Value(fnames));
    wrappedState.insert_or_assign( processor.WS_RESPONSE_KEY_FOR_STATE, elem::js::Value(processorState));
}

void SlotManager::wrapFileNamesForView(elem::js::Object &wrappedFileNames)
{
    elem::js::Array fnames;
    fnames.resize(processor.assetsMap.size());
    for (const auto &assetInSlot : processor.assetsMap )
    {
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        fnames[index] = elem::js::Value(assetInSlot.second.filnameForView.toStdString());
    }
    wrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(fnames));
}

void SlotManager::assignVFSpathToSlot(const SlotName &slotName, const std::string &vfsPath)
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    assetInSlot.vfsPathsForRealtime.push_back(vfsPath);
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, juce::AudioBuffer<float> &buffer)
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    assetInSlot.peakDataForView = processor.getReducedAudioBuffer(buffer);
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
    assetInSlot.filnameForView = file.getFileNameWithoutExtension();
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}