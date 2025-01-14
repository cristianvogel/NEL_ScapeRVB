#pragma once

#include <elem/Value.h>
#include <juce_audio_basics/juce_audio_basics.h>
#include "ViewClientInstance.h"

namespace util
{
    //============= sample normalisation
    float calculateNormalisationFactor(float maxSumSquaredMag);
    void normaliseAudioBuffer(juce::AudioBuffer<float> &buf, float maxAbsValue);
    //============= Peaks generator for the front end, returns vector derived from reduced buffer =====================
    std::vector<float> reduceBufferToPeaksData(const juce::AudioBuffer<float> &buf);
    //============= Get path for WebView assets
    juce::File getAssetsDirectory();
    juce::File getPersistentDataDirectory();
    bool isOdd(int num);
    elem::js::Number wrapError(ScapeError error);
    juce::String error_to_string( ScapeError error);
} // namespace util
