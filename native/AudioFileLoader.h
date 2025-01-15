#pragma once
#include <array>

#include <juce_audio_processors/juce_audio_processors.h>


class Processor;

class AudioFileLoader :  private juce::AsyncUpdater
{
public:
    explicit AudioFileLoader( Processor& p );
    ~AudioFileLoader() override;
    
    void loadNewFile( );
    const juce::File& getFileAtCurrentSlot();
    bool isSlotOccupied(int slotIndex) const;
    const juce::File& getFileAtSlot(int slotIndex) const;
    void clearSlot(int slotIndex);
    void clearAllSlots();
    std::unique_ptr<juce::FileChooser> chooser;
    int currentSlotIndex = 0;
    
private:
    Processor& processor;
    int getNextAvailableSlot() const;
    void handleAsyncUpdate() override;
    static constexpr int NUM_SLOTS = 4;
    std::array<juce::File, NUM_SLOTS> fileSlots;

};
