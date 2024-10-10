#include "Utilities.h"
#include <numeric>

namespace nel
{
//======================== Normalisation from JUCE convolution code
// additional maxAbsValue parameter to allow for normalisation to a specific value

void normaliseImpulseResponse(juce::AudioBuffer<float> &buf, float maxAbsValue )  
{
    const auto numChannels = buf.getNumChannels();
    const auto numSamples = buf.getNumSamples();
    const auto channelPtrs = buf.getArrayOfWritePointers();

    const auto maxSumSquaredMag = std::accumulate(channelPtrs, channelPtrs + numChannels, 0.0f, [numSamples](auto max, auto *channel)
                                                  { return juce::jmax(max, std::accumulate(channel, channel + numSamples, 0.0f, [](auto sum, auto samp)
                                                                                           { return sum + (samp * samp); })); });

    const auto normalisationFactor = calculateNormalisationFactor(maxSumSquaredMag) * maxAbsValue;

    if (numChannels > 0) // Ensure there is at least one channel
    {
        auto *firstChannel = channelPtrs[0];
        juce::FloatVectorOperations::multiply(firstChannel, normalisationFactor, numSamples);
    }
}

float calculateNormalisationFactor(float sumSquaredMagnitude)
{
    if (sumSquaredMagnitude < 1e-8f)
        return 1.0f;

    return 0.125f / std::sqrt(sumSquaredMagnitude);
}

}