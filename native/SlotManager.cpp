

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
    assign(slotName, Asset::Props::defaultFilenameForView, toString(slotName));
}

void SlotManager::assignFilenameToSlot(const SlotName &slotName, const juce::File &file)
{
    assign(slotName, Asset::Props::filenameForView, file);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::File &file)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(property, file);
    updateState(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const std::string &str)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(property, str);
    updateState(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::AudioBuffer<float> &buffer)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(property, processor.getReducedAudioBuffer(buffer));
    updateState(slotName, assetInSlot);
}

void SlotManager::wrapPeaksForView(elem::js::Object &wrappedPeaks)
{
    elem::js::Array peaks;
    if (peaks.size() != 4)
        peaks.resize(4);

    for (const auto &assetInSlot : processor.assetsMap)
    {
        auto peakData = assetInSlot.second.userPeaksForView;
        SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        if (peakData.size() == 0)
        {
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
    for (auto &assetInSlot : processor.assetsMap)
    {
        const SlotName slot = assetInSlot.first;
        int index = getIndexForSlot(slot);
        if (assetInSlot.second.filenameForView.isEmpty())
        {
            assetInSlot.second.filenameForView = assetInSlot.second.defaultFilenameForView;
        }
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

SlotName SlotManager::findFirstSlotWithoutUserStereoFile() const
{
    for (const auto &assetInSlot : processor.assetsMap)
    {
        const auto fn = assetInSlot.second.userStereoFile.getFileName();
        std::cout << "Slot " << toString(assetInSlot.first) << " has file " << fn << std::endl;
        if (fn.isEmpty() ||
            fn.contains("LIGHT") ||
            fn.contains("SURFACE") ||
            fn.contains("TEMPLE") ||
            fn.contains("DEEPNESS"))
        {
            std::cout << "Slot " << toString(assetInSlot.first) << " will be filled." << std::endl;
            return assetInSlot.first;
        }
    }
    return SlotName::LIGHT; // Return the first slot if all are filled or all empty
}

void SlotManager::switchSlotsTo(bool customScape, bool pruneVFS)
{
    for (const auto &kv : processor.assetsMap)
    {
        SlotName slot = kv.first;
        Asset assetInSlot = processor.assetsMap.at(slot);

        if (customScape)
            assign(slot, Asset::Props::filenameForView, assetInSlot.userStereoFile);
        else
            assign(slot, Asset::Props::filenameForView, assetInSlot.defaultStereoFile);

        assetInSlot.userPeaksForView = customScape ? assetInSlot.userPeaksForView : assetInSlot.defaultPeaksForView;
        lastPeaksHash = 0;
        lastStateHash = 0;
        processor.assetsMap.insert_or_assign(slot, assetInSlot);
    }

    if (pruneVFS)
    {
        processor.pruneVFS();
        lastPeaksHash = 0;
        lastStateHash = 0;
        processor.userBankManager.resetUserBank();
    }
}
