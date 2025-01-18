#pragma once

#include <mutex>
#include "FFTConvolver/TwoStageFFTConvolver.h"
#include <elem/GraphNode.h>
#include <elem/Types.h>
#include <elem/SingleWriterSingleReaderQueue.h>
#include "Utilities.h"

class DuckingTimer : public juce::Timer
{
    std::atomic<bool>& shouldDuck;

public:
    explicit DuckingTimer(std::atomic<bool>& duckFlag) : shouldDuck(duckFlag){ }

    void timerCallback() override
    {
        shouldDuck.store(false);
        stopTimer();
    }
};

class ConvolverNode : public elem::GraphNode<float>
{
public:
    ConvolverNode(elem::NodeId const id, double sampleRate, int const blockSize)
        : elem::GraphNode<float>(id, sampleRate, blockSize),
          duckTimer(std::make_unique<DuckingTimer>(shouldDuckAudio))
    { }

    ~ConvolverNode() override
    {
        // Clear the convolver queue
        std::shared_ptr<fftconvolver::TwoStageFFTConvolver> temp;
        while (convolverQueue.pop(temp))
        {
            // No specific cleanup needed for shared_ptr, just clearing the queue
        }
    }
    void startDucking() {
        shouldDuckAudio.store(true);
        duckTimer->startTimer(50);
    }
    // This is an Elementary custom node
    int setProperty(
        std::string const& key,
        elem::js::Value const& val,
        elem::SharedResourceMap<float>& resources) override
    {
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        // The Elementary VFS / Shared Resources Map path NOT File path
        // Elementary Shared Resources. This paramter ref is how the user gets to
        // change or reverse the Response files on the fly. 
        // Yes, it clicks, but is otherwise a very cool feature.
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        if (key == "path")
        {
            if (!val.isString())
                return elem::ReturnCode::InvalidPropertyType();

            if (!resources.has((elem::js::String)val))
                return elem::ReturnCode::InvalidPropertyValue(); // USERBANK_1_USER2_0

            path = (elem::js::String)val;
            const auto ref = resources.get(path);
                std::lock_guard<std::mutex> lock(convolverMutex);
                auto co = std::make_shared<fftconvolver::TwoStageFFTConvolver>();
                co->reset();
                co->init(headSize, tailSize, ref->data(), ref->size());
                convolverQueue.push(std::move(co));
        }

        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        // ▮▮▮▮▮ Two Stage FFT block sizes for head and tail ▮▮▮▮ //
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        if (key == "headSize" || key == "tailSize")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            if (key == "headSize")
                headSize = int((elem::js::Number)val);
            if (key == "tailSize")
                tailSize = int((elem::js::Number)val);
        }

        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        // ▮ Kind of similar to what Scale does...  may refactor out  //
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        if (key == "process")
        {
            // optimisation for the case where there is no processing to be done
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            procFlag.store(float((elem::js::Number)val));
        }

        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        // ▮ Scale of the response input, mutes when scale is 0  //
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        if (key == "scale")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            scalar.store(float((elem::js::Number)val));
        }

        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        //  user offset into the IR , with normalisation of what's left  //
        // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
        if (key == "offset")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            if (path.empty())
                return elem::ReturnCode::InvalidPropertyValue();

            shouldDuckAudio.store(true);
            offset = fmin(0.9, static_cast<float>((elem::js::Number)val));
            auto ref = resources.get(path);

            auto co = std::make_shared<fftconvolver::TwoStageFFTConvolver>();
            // 1. Create an instance of juce::AudioBuffer
            juce::AudioBuffer<float> ab(1, ref->size());
            // then copy the data from the reference into the buffer
            ab.copyFrom(0, 0, ref->data(), ref->size());
            auto denormOffset = ab.getNumSamples() * offset;
            auto adjustedIRLen = fmax(headSize, ab.getNumSamples() - denormOffset);
            juce::AudioBuffer<float> shifted = std::move(juce::AudioBuffer<float>(1, adjustedIRLen));
            // 2. Copy a crop of data from the reference into a second buffer
            shifted.copyFrom(0, 0, ab, 0, denormOffset, adjustedIRLen);
            util::normaliseAudioBuffer(shifted, 0.7079f);
            // 3. Update the convolver with the new data from channel 0
            auto* shiftedData = shifted.getReadPointer(0);
            // 4. do the convolver swap and init, replacing the most recent convolver in the queue
            std::lock_guard<std::mutex> lock(convolverMutex);
                co->init(headSize, tailSize, shiftedData, adjustedIRLen);
                // really not sure if I have to pop the oldConvolver node
                // from the stack?
                std::shared_ptr<fftconvolver::TwoStageFFTConvolver> oldConvolver;
                if (convolverQueue.size() > 0)
                {
                    convolverQueue.pop(oldConvolver);
                }
                // start ducking and push the new convolver in all cases
                startDucking();
                convolverQueue.push(std::move(co));
        }

        return GraphNode<float>::setProperty(key, val);
    }

    void process(elem::BlockContext<float> const& ctx) override
    {
        auto** inputData = ctx.inputData;
        auto* outputData = ctx.outputData;
        auto numChannels = ctx.numInputChannels;
        auto numSamples = ctx.numSamples;

        // Create a new buffer for scaled input data
        std::vector<float> scaledData(numSamples);

        // First order of business: grab the most recent convolver to use if
        // there's anything in the queue. Try to handle discontinuities in the
        // audio by ducking the audio with an atomic flag
        std::lock_guard<std::mutex> lock(convolverMutex);
        while (convolverQueue.size() > 0)
        {
            convolverQueue.pop(convolver);
        }

        if (convolver == nullptr || numChannels == 0 || procFlag.load() <= 1.0e-5 || shouldDuckAudio.load())
        {
            return (void)std::fill_n(outputData, numSamples, float(0));
        }

        // Scale the inputData with Scalar using JUCE FloatVectorOperations
        juce::FloatVectorOperations::multiply(scaledData.data(), inputData[0], scalar.load(), numSamples);

        // Finally convolve the scaledData with the impulse response
        convolver->TwoStageFFTConvolver::process(scaledData.data(), outputData, numSamples);
    }

    elem::SingleWriterSingleReaderQueue<std::shared_ptr<fftconvolver::TwoStageFFTConvolver>> convolverQueue;
    std::shared_ptr<fftconvolver::TwoStageFFTConvolver> convolver;
    std::atomic<float> scalar = 1.0f;
    int headSize = 512;
    int tailSize = 4096;
    float offset = 0;
    std::atomic<float> procFlag = 0.0f;
    std::string path;
    std::atomic<bool> shouldDuckAudio{false};
    mutable std::mutex convolverMutex;
    std::unique_ptr<DuckingTimer> duckTimer;
}; // namespace elem
