// local headers
#include "SlotManager.h"
#include "Asset.h"
#include "Utilities.h"

SlotManager::SlotManager(Processor &processor) : processor(processor) {}

Asset SlotManager::getAssetFrom(const SlotName &slotName) const
{
    processor.spin.lock();
    Asset assetInSlot = processor.assetsMap.contains(slotName) ? processor.assetsMap.at(slotName) : Asset();
    processor.spin.unlock();
    return assetInSlot;
}

int SlotManager::getIndexForSlot(const SlotName &slotName)
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

void SlotManager::updateAssetsInSlotWithSpinLock(const SlotName &slotName, Asset &assetData) const
{
    processor.spin.lock();
        processor.assetsMap.insert_or_assign(slotName, assetData);
    processor.spin.unlock();
}

void SlotManager::assignPeaksToSlot(const SlotName &slotName, const std::vector<float> &reducedSampleData, const bool defaultSlot) const
{
    Asset assetDataInSlot = getAssetFrom(slotName);
    if (defaultSlot)
    {
        assetDataInSlot.setProperty(Asset::Props::defaultPeaksForView, reducedSampleData);
    }
    else
    {
        assetDataInSlot.setProperty(Asset::Props::userPeaksForView, reducedSampleData);
    }
    updateAssetsInSlotWithSpinLock(slotName, assetDataInSlot);
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
    Asset assetDataInSlot = getAssetFrom(slotName);
    assetDataInSlot.setProperty(property, file);
    updateAssetsInSlotWithSpinLock(slotName, assetDataInSlot);
}

void SlotManager::assign(const SlotName &slotName, Asset::Props property, const std::string &str) const
{
    Asset assetDataInSlot = getAssetFrom(slotName);
    assetDataInSlot.setProperty(property, str);
    updateAssetsInSlotWithSpinLock(slotName, assetDataInSlot);
}

void SlotManager::assign(const SlotName& slotName, Asset::Props property, const juce::AudioBuffer<float>& buffer) const
{
    auto reducedPeaks = util::reduceBufferToPeaksData( buffer );
    assignPeaksToSlot(slotName, reducedPeaks);
}


void SlotManager::wrapPeaksForView(elem::js::Object &peaksContainer) const
{
    elem::js::Array peaks;
    if (peaks.size() != 4)
        peaks.resize(4);

    // go through whole assetsMap
    processor.spin.lock();
    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {
        auto current = asset_data.currentPeakDataInView;

        std::cout << "wrapping reduced peaks for view size >> " << current.size() << std::endl;
        // set the relevant index in the peaks vector
        const int index = getIndexForSlot(slot_name);
        peaks[index] = elem::js::Value( current );
    }
    // put the wrapped peaks data of each slot into the passed container keyed by WS_RESPONSE_KEY_FOR_PEAKS
    peaksContainer.insert_or_assign(processor.WS_RESPONSE_KEY_FOR_PEAKS, elem::js::Value( peaks ));
    processor.spin.unlock();
}

void SlotManager::wrapStateForView(elem::js::Object &containerForWrappedState) const
{
    elem::js::Object processorState = processor.state;
    // prepare extra state about filenames, for the front end
    elem::js::Array values;

    processor.spin.lock();
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
    processor.spin.unlock();


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
    processor.spin.lock();
    values.resize(processor.assetsMap.size());
    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {
        const int index = getIndexForSlot(slot_name);
        values[index] = elem::js::Value(asset_data.filenameForView);
    }
    processor.spin.unlock();
    containerForWrappedFileNames.insert_or_assign(processor.KEY_FOR_FILENAMES, elem::js::Value(values));
}


void SlotManager::switchSlotsTo(const bool customScape, const bool pruneVFS = false)
{
    processor.spin.lock();
    for (const auto &[slot_name, asset_data] : processor.assetsMap)
    {
        if (customScape)
        {
            // just in case the userStereoFile doesn't exist anymore
            // fall back to default
            const auto userFile =
                asset_data.userStereoFile.exists() ?
                asset_data.userStereoFile : asset_data.defaultStereoFile;
            processor.spin.unlock();
            assign(slot_name, Asset::Props::filenameForView, userFile );
            // toggle scapeMode to custom in the plugin
            processor.state.insert_or_assign("scapeMode", 1.0);
        }
        else
        {
            // we are back in factory mode
            processor.spin.unlock();
            assign(slot_name, Asset::Props::filenameForView, asset_data.defaultStereoFile);
            processor.state.insert_or_assign("scapeMode", 0.0);
        }
        lastStateHash = -1;
    }

    processor.spin.unlock();

    if (pruneVFS)
    {
        processor.pruneVFS();
        lastStateHash = -1;
        processor.userBankManager.resetUserBank();
        peaksDirty.store(true);
    }
}
