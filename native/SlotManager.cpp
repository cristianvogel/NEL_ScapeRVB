
#include "SlotManager.h"

#include "Assets.h"

SlotManager::SlotManager(EffectsPluginProcessor &processor) : processor(processor) {}

Asset SlotManager::getAssetFrom(const SlotName &slotName) const
{
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    return assetInSlot;
}

int SlotManager::getIndexForSlot(const SlotName &slotName) const
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

void SlotManager::updateState(const SlotName &slotName, Asset &assetInSlot) const
{
    processor.assetsMap.insert_or_assign(slotName, assetInSlot);
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, const juce::AudioBuffer<float> &buffer, const bool defaultSlot)
{
    if (defaultSlot)
    {
        assign(slotName, Asset::Props::defaultPeaksForView, buffer);
    }
    else
    {
        assign(slotName, Asset::Props::userPeaksForView, buffer);
    }
    peaksDirty = true;
}

void SlotManager::assignFileHookToSlot(const SlotName &slotName, const juce::File &file) const
{
    assign(slotName, Asset::Props::userStereoFile, file);
}

void SlotManager::assignDefaultFilenameToSlot(const SlotName &slotName) const
{
    assign(slotName, Asset::Props::defaultFilenameForView, toString(slotName));
}

void SlotManager::assignFilenameToSlot(const SlotName &slotName, const juce::File &file) const
{
    assign(slotName, Asset::Props::filenameForView, file);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::File &file) const
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(property, file);
    updateState(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const std::string &str) const
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(property, str);
    updateState(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const juce::AudioBuffer<float> &buffer)
{
    Asset assetInSlot = getAssetFrom(slotName);

    if (property == Asset::Props::userPeaksForView)
    {
        assetInSlot.setProperty(Asset::Props::userPeaksForView, processor.getReducedAudioBuffer(buffer));
    }
    else
    {
        assetInSlot.setProperty(Asset::Props::defaultPeaksForView, processor.getReducedAudioBuffer(buffer));
    }
    peaksDirty = true;
    updateState(slotName, assetInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const std::vector<float> &peaks)
{
    Asset assetInSlot = getAssetFrom(slotName);
    assetInSlot.setProperty(Asset::Props::currentPeakDataInView, peaks);
    peaksDirty = true;
    updateState(slotName, assetInSlot);
}

void SlotManager::wrapPeaksForView(elem::js::Object &peaksContainer)
{
    elem::js::Array peaks;
    if (peaks.size() != 4)
        peaks.resize(4);

    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {

        const auto user = asset_data.userPeaksForView;
        const auto factory = asset_data.defaultPeaksForView;

        if (static_cast<elem::js::Number>(processor.state.at("scapeMode")) == 1)
        {
            assign(slot_name, Asset::Props::currentPeakDataInView, user);
        }
        else
        {
            assign(slot_name, Asset::Props::currentPeakDataInView, factory);
        }

        auto current = asset_data.currentPeakDataInView;

        std::cout << "wrapping peaks for view from " << current.size() << std::endl;

        const int index = getIndexForSlot(slot_name);
        peaks[index] = elem::js::Value(current);
    }
    peaksContainer.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value(peaks));
}

void SlotManager::wrapStateForView(elem::js::Object &containerForWrappedState) const
{
    elem::js::Object processorState = processor.state;
    // prepare extra state about filenames, for the front end
    elem::js::Array values;
    values.resize(processor.assetsMap.size());
    for (auto &[slot_name, asset_data] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        if (asset_data.filenameForView.empty())
        {
            asset_data.filenameForView = asset_data.defaultFilenameForView;
        }
        values[index] = elem::js::Value(asset_data.filenameForView);
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

void SlotManager::wrapFileNamesForView(elem::js::Object &containerForWrappedFileNames) const
{
    elem::js::Array values;
    values.resize(processor.assetsMap.size());
    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::Value(asset_data.filenameForView);
    }
    containerForWrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(values));
}

SlotName SlotManager::get_and_step_target_slot_name()
{
    if (getCurrentTargetSlotIndex() == 3)
        processor.pruneVFS();
    const auto targetSlot = static_cast<SlotName>(stepToNextTargetSlotIndex());
    return targetSlot; // Return the first slot if all are filled or all empty
}

void SlotManager::switchSlotsTo(const bool customScape, const bool pruneVFS)
{
    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {
        if (customScape)
        {
            assign(slot_name, Asset::Props::filenameForView, asset_data.userStereoFile);
            assign(slot_name, Asset::Props::currentPeakDataInView, asset_data.userPeaksForView);
        }
        else
        {
            assign(slot_name, Asset::Props::filenameForView, asset_data.defaultStereoFile);
            assign(slot_name, Asset::Props::currentPeakDataInView, asset_data.defaultPeaksForView);
        }
        lastStateHash = -1;
        processor.assetsMap.insert_or_assign(slot_name, asset_data);
        peaksDirty = true;
    }

    if (pruneVFS)
    {
        processor.pruneVFS();
        lastStateHash = -1;
        processor.userBankManager.resetUserBank();
        peaksDirty = true;
    }
}
