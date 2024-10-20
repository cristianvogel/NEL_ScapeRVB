#pragma once

#include <juce_dsp/juce_dsp.h>
#include "FFTConvolver/TwoStageFFTConvolver.h"
#include <elem/GraphNode.h>
#include <elem/Types.h>
#include <elem/SingleWriterSingleReaderQueue.h>
#include "Utilities.h"

class ConvolverNode : public elem::GraphNode<float>
{
public:
    ConvolverNode(elem::NodeId const id, double sampleRate, int const blockSize)
        : elem::GraphNode<float>(id, sampleRate, blockSize),
          duckingWindow(blockSize, juce::dsp::WindowingFunction<float>::hann)
    {
        // Other initialization code
    }

    int setProperty(
        std::string const &key,
        elem::js::Value const &val,
        elem::SharedResourceMap<float> &resources) override
    {

        if (key == "path")
        {
            if (!val.isString())
                return elem::ReturnCode::InvalidPropertyType();

            if (!resources.has((elem::js::String)val))
                return elem::ReturnCode::InvalidPropertyValue(); //USERBANK_1_USER2_0

            path = (elem::js::String)val;
            auto ref = resources.get(path);
            auto co = std::make_shared<fftconvolver::TwoStageFFTConvolver>();
            co->reset();
            co->init(headSize, tailSize, ref->data(), ref->size());
            convolverQueue.push(std::move(co));
        }

        if (key == "process")
        {
            // optimisation for the case where there is no processing to be done
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            procFlag.store(float((elem::js::Number)val));
        }

        if (key == "headSize" || key == "tailSize")
        {

            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            if (key == "headSize")
                headSize = int((elem::js::Number)val);
            if (key == "tailSize")
                tailSize = int((elem::js::Number)val);
        }

        if (key == "scale")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            scalar.store(float((elem::js::Number)val));
        }

        if (key == "offset")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            if (path.empty())
                return elem::ReturnCode::InvalidPropertyValue();

            shouldDuckAudio.store(true);
            offset = float((elem::js::Number)val);
            auto ref = resources.get(path);
            auto co = std::make_shared<fftconvolver::TwoStageFFTConvolver>();
            // 1. Create an instance of juce::AudioBuffer
            juce::AudioBuffer<float> ab(1, ref->size());
            // then copy the data from the reference into the buffer
            ab.copyFrom(0, 0, ref->data(), ref->size());
            auto denormOffset = ab.getNumSamples() * offset;
            auto adjustedIRLen = ab.getNumSamples() - denormOffset;
            juce::AudioBuffer<float> shifted = juce::AudioBuffer<float>(1, adjustedIRLen);
            // 2. Copy a crop of data from the reference into a second buffer
            shifted.copyFrom(0, 0, ab, 0, denormOffset, adjustedIRLen);
            util::normaliseAudioBuffer(shifted, 0.7079f);
            // 3. Update the convolver with the new data from channel 0
            auto *shiftedData = shifted.getReadPointer(0);

            // do the convolver swap and init, replacing the most recent convolver in the queue
            co->init(headSize, tailSize, shiftedData, adjustedIRLen);
            std::shared_ptr<fftconvolver::TwoStageFFTConvolver> oldConvolver;
            if (convolverQueue.size() > 0)
                convolverQueue.pop(oldConvolver);
            // Push the new convolver
            convolverQueue.push(std::move(co));
            shouldDuckAudio.store(false);
        }

        return GraphNode<float>::setProperty(key, val);
    }

    void process(elem::BlockContext<float> const &ctx) override
    {
        auto **inputData = ctx.inputData;
        auto *outputData = ctx.outputData;
        auto numChannels = ctx.numInputChannels;
        auto numSamples = ctx.numSamples;

        // Create a new buffer for scaled input data
        std::vector<float> scaledData(numSamples);

        // First order of business: grab the most recent convolver to use if
        // there's anything in the queue. Try to handle discontinuities in the
        // audio by ducking the audio with an atomic flag
        while (convolverQueue.size() > 0)
        {
            convolverQueue.pop(convolver);
        }

        if (convolver == nullptr || numChannels == 0 || procFlag.load() <= 1.0e-5)
        {
            return (void)std::fill_n(outputData, numSamples, float(0));
        }

        // Scale the inputData with Scalar using JUCE FloatVectorOperations
        juce::FloatVectorOperations::multiply(scaledData.data(), inputData[0], scalar.load(), numSamples);
        // if (shouldDuckAudio.load())
        // {
        //     duckingWindow.multiplyWithUpsideDownWindowingTable(outputData, numSamples);
        //     return;
        // }
        // Finally convolve the scaledData with the impulse response
        convolver->TwoStageFFTConvolver::process(scaledData.data(), outputData, numSamples);
    }
    elem::SingleWriterSingleReaderQueue<std::shared_ptr<fftconvolver::TwoStageFFTConvolver>> convolverQueue;
    std::shared_ptr<fftconvolver::TwoStageFFTConvolver> convolver;
    //  std::atomic<float> procFlag = 0.0f;
    std::atomic<float> scalar = 1.0f;
    int headSize = 512;
    int tailSize = 4096;
    float offset = 0;
    std::atomic<float> procFlag = 0.0f;
    std::string path;
    std::atomic<bool> shouldDuckAudio = false;
    juce::dsp::WindowingFunction<float> duckingWindow;

}; // namespace elem
