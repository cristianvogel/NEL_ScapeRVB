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
    std::atomic<bool> peaksDirty = true; ///< Whether the peaks are dirty.
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

    /**
     * @brief Assigns peaks data to a slot.
     * @param targetSlot The target slot.
     * @param peaks The peaks data, shuold be REDUCED as only for rough view purposes in the slot––
     * @param defaultSlot Whether this is the default slot.
     */
    void assignPeaksToSlot(const SlotName& targetSlot, const std::vector<float>& peaks, bool defaultSlot = false) const;

    /**
     * @brief Assigns a juce::File hook to a slot.
     * @param targetSlot The target slot.
     * @param file The file to assign.
     */
    void assignFileHookToSlot(const SlotName& targetSlot, const juce::File& file) const;

    /**
     * @brief Assigns a default filename to a slot.
     * @param targetSlot The target slot.
     */
    void assignDefaultFilenameToSlot(const SlotName& targetSlot) const;

    /**
     * @brief Assigns a filename to a slot.
     * @param targetSlot The target slot.
     * @param file The file containing the filename.
     */
    void assignFilenameToSlot(const SlotName& targetSlot, const juce::File& file) const;

    /**
     * @brief Assigns a juce::File property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param file The data associated with the property.
     */
    void assign(const SlotName& slotName, Asset::Props property, const juce::File& file) const;

    /**
     * @brief Assigns an std::string property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param value The string value associated with the property.
     */
    void assign(const SlotName& slotName, Asset::Props property, const std::string& value) const;

    /**
     * @brief Assigns a juce::AudioBuffer property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param buffer The audio buffer associated with the property.
     */
    void assign(const SlotName& slotName, Asset::Props property, const juce::AudioBuffer<float>& buffer) const;

    /**
     * @brief Assigns a std::vector<float> property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param peaks The peaks data associated with the property.
     */
    void assign(const SlotName& slotName, Asset::Props property, const std::vector<float>& peaks);


    /**
     * @brief Updates the asset entry at the current slot in the Processor assetMap
     * @param slotName The slot name.
     * @param assetData The asset in the slot.
     */
    void updateAssetsInSlotWithSpinLock(const SlotName& slotName, Asset& assetData) const;

    /**
     * @brief Gets the asset from a slot.
     * @param slotName The slot name.
     * @return The asset in the slot.
     */
    Asset getAssetFrom(const SlotName& slotName) const;

    /**
     * @brief Resets the user slots.
     * @param pruneVFS Whether to prune the VFS.
     */
    void resetUserSlots(bool pruneVFS = false);

    /**
     * @brief Gets the index for a slot.
     * @param slotName The slot name.
     * @return The index of the slot.
     */
     static int getIndexForSlot(const SlotName& slotName) ;

    int stepToNextTargetSlotIndex();
    int getCurrentTargetSlotIndex() const;

private:
    friend class ViewClientInstance;
    Processor& processor; ///< Reference to the EffectsPluginProcessor.
    std::size_t lastStateHash = 0; ///< Last state hash.
    int lastPeaksHash = 0; ///< Last peaks hash
    int targetSlotIndex = -1;
};

#endif // SLOTMANAGER_H
