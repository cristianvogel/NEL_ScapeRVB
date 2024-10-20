#pragma once

#include <juce_audio_basics/juce_audio_basics.h>

namespace util
{
    void normaliseAudioBuffer(juce::AudioBuffer<float> &buf, float maxAbsValue);
    float calculateNormalisationFactor(float maxSumSquaredMag);
    juce::File getAssetsDirectory();
    juce::File getPersistentDataDirectory();
    bool isOdd(int num);
} // namespace util
