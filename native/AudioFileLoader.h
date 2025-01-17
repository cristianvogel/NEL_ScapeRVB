#pragma once
#include <array>

#include <juce_audio_processors/juce_audio_processors.h>

#include "SlotName.h"


class Processor;

class AudioFileLoader :  private juce::AsyncUpdater
{
public:
    explicit AudioFileLoader( Processor& p );
    ~AudioFileLoader() override;
    void loadNewFile( );
    std::unique_ptr<juce::FileChooser> chooser;
    int currentSlotIndex = 0;
    juce::File selectedFile;
    
private:
    Processor& processor;
    void handleAsyncUpdate() override;
    int NUM_SLOTS = DEFAULT_SLOT_NAMES.size();
};
