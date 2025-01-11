#pragma once
#include <array>

#include <juce_audio_processors/juce_audio_processors.h>


class EffectsPluginProcessor;

class AudioFileLoader :  private juce::AsyncUpdater
{
public:
    explicit AudioFileLoader( EffectsPluginProcessor& p );
    ~AudioFileLoader() override;
    
    void loadNewFile( );
    const juce::File& getFileAtCurrentSlot();
    bool isSlotOccupied(int slotIndex) const;
    const juce::File& getFileAtSlot(int slotIndex) const;
    void clearSlot(int slotIndex);
    void clearAllSlots();
    juce::FileChooser chooser;
    int currentSlotIndex = 0;
    
private:
    EffectsPluginProcessor& processor;
    int getNextAvailableSlot() const;
    void handleAsyncUpdate() override;
    static constexpr int NUM_SLOTS = 4;
    std::array<juce::File, NUM_SLOTS> fileSlots;

};
