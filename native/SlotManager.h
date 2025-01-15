#ifndef SLOTMANAGER_H
#define SLOTMANAGER_H

// Standard Library Headers
#include <string>
#include <atomic>

// Third-Party Library Headers
#include <juce_audio_basics/juce_audio_basics.h>
#include "elem/Value.h"

// Local Headers
#include "SlotName.h"
#include "PluginProcessor.h"

// Forward declaration of EffectsPluginProcessor
class Processor;

/**
 * @brief Manages slots within the EffectsPluginProcessor.
 * SpinLocks are locked and unlocked in all assign methods, so unlock before calling if
 * called under a lock
 */
class SlotManager
{
public:
    std::atomic<bool> peaksDirty = false; ///< Whether the peaks are dirty.
    /**
     * @brief Constructs a SlotManager with a reference to the EffectsPluginProcessor.
     * @param processor Reference to the EffectsPluginProcessor.
     */
    explicit SlotManager(Processor& processor);

    /**
     * @brief Default destructor.
     */
    ~SlotManager() = default;

    /**
     * @brief Wraps peaks data for view.
     * @param containerForWrappedPeaks Container for the wrapped peaks data.
     */
    void wrapPeaksForView(elem::js::Object& containerForWrappedPeaks) const;

    /**
     * @brief Wraps state data for view.
     * @param containerForWrappedState Container for the wrapped state data.
     */
    void wrapStateForView(elem::js::Object& containerForWrappedState) const;

    /**
     * @brief Wraps file names for view.
     * @param containerForWrappedFileNames Container for the wrapped file names.
     */
    void wrapFileNamesForView(elem::js::Object& containerForWrappedFileNames) const;

    /**
     * @brief Switches slots to a custom scape.
     * @param customScape Whether to switch to custom scapes or default scapes
     * @param pruneVFS Whether to prune the VFS.
     */
    void switchSlotsTo(bool customScape, bool pruneVFS);



    void assignPeaksToSlot(std::map<SlotName, Asset>& assetsMap, const SlotName& slotName,
                           const std::vector<float>& reducedSampleData, bool defaultSlot) const;


    /**
     * @brief Assigns a juce::File hook to a slot.
     * @param assetsMap
     * @param targetSlot The target slot.
     * @param file The file to assign.
     */
    void assignUserFileToSlot(std::map<SlotName, Asset>& assetsMap, const SlotName& targetSlot, const juce::File& file) const;


    /**
     * @brief Assigns a filename to a slot.
     * @param assetsMap
     * @param targetSlot The target slot.
     * @param file The file containing the filename.
     */
    void assignFilenameForViewToSlot(std::map<SlotName, Asset>& assetsMap, const SlotName& targetSlot, const juce::File& file) const;


    /**
     * @brief Updates the asset entry at the current slot in the Processor assetMap
     * @param assetsMap
     * @param slotName The slot name.
     * @param assetData The asset in the slot.
     */
    void updateSlotDataInAssetMap(std::map<SlotName, Asset>& assetsMap, const SlotName& slotName, Asset& assetData) const;
    void logAssetsMap() const;


    /**
     * @brief Gets the asset from a slot.
     * @param assetsMap
     * @param slotName The slot name.
     * @return The asset in the slot.
     */
    Asset& getAssetFrom(std::map<SlotName, Asset>& assetsMap, const SlotName& slotName) const;

    /**
     * @brief Resets the user slots.
     * @param pruneVFS Whether to prune the VFS.
     */
    void resetUserSlots(bool pruneVFS = false);

    void assignDefaultFilenameToSlot(std::map<SlotName, Asset>& assetsMap,SlotName& slotName) const;

    /**
     * @brief Gets the index for a slot.
     * @param slotName The slot name.
     * @return The index of the slot.
     */
    static int getIndexForSlot(const SlotName& slotName);

    int stepToNextTargetSlotIndex();
    int getCurrentTargetSlotIndex() const;

private:
    friend class ViewClientInstance;
    Processor& processor; ///< Reference to the EffectsPluginProcessor.
    std::size_t lastStateHash = 0; ///< Last state hash.
    int lastPeaksHash = 0; ///< Last peaks hash
    int targetSlotIndex = -1;
    std::mutex mtx;
};

#endif // SLOTMANAGER_H
