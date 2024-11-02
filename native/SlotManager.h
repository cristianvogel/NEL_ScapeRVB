#ifndef SLOTMANAGER_H
#define SLOTMANAGER_H

// Standard Library Headers
#include <string>

// Third-Party Library Headers
#include <juce_audio_basics/juce_audio_basics.h>
#include "elem/Value.h"

// Local Headers
#include "SlotName.h"
#include "PluginProcessor.h"

// Forward declaration of EffectsPluginProcessor
class EffectsPluginProcessor;

/**
 * @class SlotManager
 * @brief Manages slots and assets for the EffectsPluginProcessor.
 */
class SlotManager
{
public:
    /**
     * @brief Constructs a SlotManager with a reference to the EffectsPluginProcessor.
     * @param processor Reference to the EffectsPluginProcessor.
     */
    SlotManager(EffectsPluginProcessor &processor);

    /**
     * @brief Default destructor.
     */
    ~SlotManager() = default;

    /**
     * @brief Wraps peaks data for view.
     * @param containerForWrappedPeaks Container for the wrapped peaks data.
     */
    void wrapPeaksForView(elem::js::Object &containerForWrappedPeaks);

    /**
     * @brief Wraps state data for view.
     * @param containerForWrappedState Container for the wrapped state data.
     */
    void wrapStateForView(elem::js::Object &containerForWrappedState);

    /**
     * @brief Wraps file names for view.
     * @param containerForWrappedFileNames Container for the wrapped file names.
     */
    void wrapFileNamesForView(elem::js::Object &containerForWrappedFileNames);

    /**
     * @brief Switches slots to a custom scape.
     * @param customScape Whether to switch to custom scapes or default scapes
     * @param pruneVFS Whether to prune the VFS.
     */
    void switchSlotsTo(bool customScape, bool pruneVFS);

    /**
     * @brief Assigns peaks data to a slot.
     * @param targetSlot The target slot.
     * @param buffer The audio buffer containing the peaks data.
     * @param defaultSlot Whether this is the default slot.
     */
    void assignPeaksToSlot(const SlotName &targetSlot, juce::AudioBuffer<float> &buffer, bool defaultSlot = false);

    /**
     * @brief Assigns a juce::File hook to a slot.
     * @param targetSlot The target slot.
     * @param file The file to assign.
     */
    void assignFileHookToSlot(const SlotName &targetSlot, const juce::File &file);


    /**
     * @brief Assigns a default filename to a slot.
     * @param targetSlot The target slot.
     */
    void assignDefaultFilenameToSlot(const SlotName &targetSlot);

    /**
     * @brief Assigns a filename to a slot.
     * @param targetSlot The target slot.
     * @param file The file containing the filename.
     */
    void assignFilenameToSlot(const SlotName &targetSlot, const juce::File &file);

    /**
     * @brief Assigns a juce::File property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param file The data associated with the property.
     */
    void assign(const SlotName &slotName, const Asset::Props property, const juce::File &file);

    /**
     * @brief Assigns an std::string property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param value The string value associated with the property.
     */
    void assign(const SlotName &slotName, const Asset::Props property, const std::string &value);

    /**
     * @brief Assigns a juce::AudioBuffer property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param buffer The audio buffer associated with the property.
     */
    void assign(const SlotName &slotName, const Asset::Props property, const juce::AudioBuffer<float> &buffer);

    /**
     * @brief Assigns a std::vector<float> property to a slot.
     * @param slotName The slot name.
     * @param property The property to assign.
     * @param peaks The peaks data associated with the property.
     */
    void assign(const SlotName &slotName, const Asset::Props property, const std::vector<float> &peaks);


    /**
     * @brief Updates the asset entry at the current slot in the Processor assetMap 
     * @param slotName The slot name.
     * @param assetInSlot The asset in the slot.
     */
    void updateState(const SlotName &slotName, Asset &assetInSlot);

    /**
     * @brief Gets the asset from a slot.
     * @param slotName The slot name.
     * @return The asset in the slot.
     */
    Asset getAssetFrom(const SlotName &slotName);

    /**
     * @brief Finds the first slot without a user stereo file.
     * @return The first slot without a user stereo file.
     */
    SlotName findFirstSlotWithoutUserStereoFile() const;

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
    int getIndexForSlot(const SlotName &slotName);

private:
    friend class ViewClientInstance;
    EffectsPluginProcessor &processor; ///< Reference to the EffectsPluginProcessor.
    std::size_t lastStateHash = 0; ///< Last state hash.
    int lastPeaksHash = 0; ///< Last peaks hash.
    bool peaksDirty = false; ///< Whether the peaks are dirty.
};

#endif // SLOTMANAGER_H
