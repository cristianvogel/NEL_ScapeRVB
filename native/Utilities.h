#pragma once

#include <elem/Value.h>
#include <juce_audio_basics/juce_audio_basics.h>
#include "ViewClientInstance.h"

namespace util
{
    void normaliseAudioBuffer(juce::AudioBuffer<float> &buf, float maxAbsValue);
    float calculateNormalisationFactor(float maxSumSquaredMag);
    juce::File getAssetsDirectory();
    juce::File getPersistentDataDirectory();
    bool isOdd(int num);
    elem::js::Number wrapError(ScapeError error);
    juce::String error_to_string( ScapeError error);
} // namespace util
