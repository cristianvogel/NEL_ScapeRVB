
#include <numeric>
#include "Utilities.h"

#include <elem/Value.h>

#include "ViewClientInstance.h"

namespace util
{
    std::vector<float> reduceBufferToPeaksData(const juce::AudioBuffer<float>& buffer)
    {
        // This function reduces the audio buffer to a smaller size for plotting as
        // peaks in the front end. The buffer is stride stepped by an int factor to reduce
        // the size.
        const int numSamples = buffer.getNumSamples();
        // Compute the stride as a factor of the number of samples
        constexpr int stride = 96;
        std::vector<float> audioData;

        // Declare a pointer variable for floating-point data
        juce::AudioData::Pointer<juce::AudioData::Float32, juce::AudioData::LittleEndian, juce::AudioData::NonInterleaved,
                                 juce::AudioData::Const>
            pointer(buffer.getReadPointer(0));

        // Fill the audioData vector with reduced data using stride
        int pointerPosition = 0;
        while (pointerPosition < numSamples)
        {
            const auto value = pointer.getAsFloat();
            pointer += stride; // Move pointer by stride
            pointerPosition += stride;

            if (abs(value) >= 1.0e-4) // Skip small values
            {
                audioData.push_back(value); // Push valid values into the vector
            }
        }
        std::cout << "Debug audioData size: " << audioData.size() << std::endl;
        return audioData;
    }
    
    //======================== Normalisation from JUCE convolution code
    // additional maxAbsValue parameter to allow for normalisation to a specific value

    void normaliseAudioBuffer(juce::AudioBuffer<float> &buf, float maxAbsValue)
    {
        const auto numChannels = buf.getNumChannels();
        const auto numSamples = buf.getNumSamples();
        const auto channelPtrs = buf.getArrayOfWritePointers();

        const auto maxSumSquaredMag = std::accumulate(channelPtrs, channelPtrs + numChannels, 0.0f, [numSamples](auto max, auto *channel)
                                                      { return juce::jmax(max, std::accumulate(channel, channel + numSamples, 0.0f, [](auto sum, auto samp)
                                                                                               { return sum + (samp * samp); })); });

        const auto normalisationFactor = calculateNormalisationFactor(maxSumSquaredMag) * maxAbsValue;
    // Ensure there is at least one channel and gain up only the first channel 
    // as at this point, the second channel is empty
        if (numChannels > 0) 
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

    //======= HELPERS ==============================
    // A helper for locating bundled asset files

    juce::File getAssetsDirectory()
    {
#if JUCE_MAC
        auto assetsDir = juce::File::getSpecialLocation(juce::File::SpecialLocationType::currentApplicationFile)
                             .getChildFile("Contents/Resources/dist");
#elif JUCE_WINDOWS
        auto assetsDir =
            juce::File::getSpecialLocation(
                juce::File::SpecialLocationType::currentExecutableFile) // Plugin.vst3/Contents/<arch>/Plugin.vst3
                .getParentDirectory()                                   // Plugin.vst3/Contents/<arch>/
                .getParentDirectory()                                   // Plugin.vst3/Contents/
                .getChildFile("Resources/dist");
#else
#error "We only support Mac and Windows here yet."
#endif

        return assetsDir;
    }

    juce::File getPersistentDataDirectory()
    {
        juce::File dataDir;

#if JUCE_MAC || JUCE_WINDOWS
        dataDir = juce::File::getSpecialLocation(juce::File::userApplicationDataDirectory).getChildFile("NeverEngineLabs");
#else
#error "We only support Mac and Windows here yet."
#endif

        // Create the directory if it doesn't exist
        if (!dataDir.exists())
            dataDir.createDirectory();

        return dataDir;
    }

    bool isOdd(int n)
    {
        return n == 0 || n % 2 != 0;
    }

    elem::js::Number wrapError(ScapeError error){
        return static_cast<elem::js::Number>(static_cast<int>(error));
    }

    juce::String error_to_string( ScapeError error )
    {
        const juce::String status = errorStatuses( static_cast<int>( error ) );
        return status;
    }

} // namespace nel