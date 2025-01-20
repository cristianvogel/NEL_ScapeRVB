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
     * @param assetsMap
     * @param containerForWrappedPeaks Container for the wrapped peaks data.
     */
    void wrapPeaksForView(std::map<SlotName, Asset>& assetsMap, elem::js::Object& containerForWrappedPeaks);
    /**
     * @brief Wraps state data for view.
     * @param assetsMap
     * @param containerForWrappedState Container for the wrapped state data.
     */
    void wrapStateForView(std::map<SlotName, Asset>& assetsMap, elem::js::Object& containerForWrappedState) ;

    /**
     * @brief Switches slots to a custom scape.
     * @param customScape Whether to switch to custom scapes or default scapes
     * @param pruneVFS Whether to prune the VFS.
     */
    void switchSlotsTo(bool customScape, bool pruneVFS);
    /**
     * @brief Populates the target slot with filename, filehook and peaks
     * @param assetsMap main assetsMap
     * @param slotName target slot
     * @param isExternal if true, then we are assigining User data else default factory data
     * @param file juce file hook, validated
     * @param reducedSampleData the result of downsampling buffer processing, to reduce samples for view
     */
    void populate_assetsMap_from_File(std::map<SlotName, Asset>& assetsMap,
                                  const SlotName& slotName,
                                  bool isExternal,
                                  const juce::File& file,
                                  const std::vector<float>& reducedSampleData);
    /**
     * @brief Updates the asset entry at the current slot in the Processor assetMap
     * @param assetsMap
     * @param slotName The slot name.
     * @param assetData The asset in the slot.
     */
    void populate_assetsMap_from_Asset(std::map<SlotName, Asset>& assetsMap, const SlotName& slotName,
                                  Asset& assetData) ;
    /**
     * @brief Utility to log the asset data
     **/
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
    /**
    * @brief returns the integer index from the slotName enum
    *
   */
    static int getIndexForSlot(const SlotName& slotName);

private:
    friend class ViewClientInstance;
    Processor& processor; ///< Reference to the EffectsPluginProcessor.
    std::size_t lastStateHash = 0; ///< Last state hash.
    int lastPeaksHash = 0; ///< Last peaks hash
    int targetSlotIndex = -1;
    elem::js::Array peaks;
    elem::js::Array names;
};


#endif // SLOTMANAGER_H
