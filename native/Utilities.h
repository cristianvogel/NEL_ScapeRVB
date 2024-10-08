#pragma once

#include <juce_audio_basics/juce_audio_basics.h>

namespace nel
{
    void normaliseImpulseResponse(juce::AudioBuffer<float> &buf, float maxAbsValue);
    float calculateNormalisationFactor(float maxSumSquaredMag);
}