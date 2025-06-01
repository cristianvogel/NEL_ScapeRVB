#ifndef JUCEASSETMANAGER_H
#define JUCEASSETMANAGER_H

#include <juce_core/juce_core.h>
#include <juce_data_structures/juce_data_structures.h>
#include "SlotName.h"
#include "Asset.h"

class JuceAssetManager
{
public:
    JuceAssetManager();
    ~JuceAssetManager() = default;

    // Asset property management
    void setAssetProperty(SlotName slot, const juce::String& property, const juce::var& value);
    juce::var getAssetProperty(SlotName slot, const juce::String& property, const juce::var& defaultValue = juce::var()) const;
    
    // Asset management
    void populateAssetFromFile(SlotName slot, bool isUserFile, const juce::File& file, const std::vector<float>& peaks);
    void populateAssetFromAsset(SlotName slot, const Asset& asset);
    Asset getAsset(SlotName slot) const;
    void clearUserFiles(SlotName slot);
    void clearAllUserFiles();
    
    // Session state management
    void setCurrentBank(int bank);
    int getCurrentBank() const;
    void setCurrentSlotIndex(int index);
    int getCurrentSlotIndex() const;
    void setUserScapeMode(bool enabled);
    bool getUserScapeMode() const;
    
    // Serialization
    juce::String serializeAssets() const;
    void deserializeAssets(const juce::String& jsonData);
    
    // State persistence
    void getStateInformation(juce::MemoryBlock& destData) const;
    void setStateInformation(const void* data, int sizeInBytes);
    
    // ValueTree access for advanced operations
    juce::ValueTree& getAssetStateTree() { return assetStateTree; }
    const juce::ValueTree& getAssetStateTree() const { return assetStateTree; }

private:
    juce::ValueTree assetStateTree;
    juce::ValueTree banksTree;
    juce::ValueTree sessionTree;
    juce::ValueTree viewStateTree;
    
    // Helper methods
    juce::ValueTree getOrCreateSlotTree(SlotName slot);
    juce::ValueTree getSlotTree(SlotName slot) const;
    juce::String slotNameToString(SlotName slot) const;
    SlotName stringToSlotName(const juce::String& str) const;
    
    // Convert between Asset and ValueTree
    void assetToValueTree(const Asset& asset, juce::ValueTree& slotTree);
    Asset valueTreeToAsset(const juce::ValueTree& slotTree) const;
    
    // JSON conversion helpers
    juce::var floatVectorToVar(const std::vector<float>& vec) const;
    std::vector<float> varToFloatVector(const juce::var& var) const;
    juce::var stringVectorToVar(const std::vector<std::string>& vec) const;
    std::vector<std::string> varToStringVector(const juce::var& var) const;
    
    void initializeDefaultStructure();
};

#endif // JUCEASSETMANAGER_H