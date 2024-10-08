#pragma once

#include "FFTConvolver/TwoStageFFTConvolver.h"
#include <elem/GraphNode.h>
#include <elem/Types.h>
#include <elem/SingleWriterSingleReaderQueue.h>

class ConvolverNode : public elem::GraphNode<float>
{
public:
    ConvolverNode(elem::NodeId const id, double sampleRate, int const blockSize)
        : elem::GraphNode<float>(id, sampleRate, blockSize) {}

    int setProperty(
        std::string const &key,
        elem::js::Value const &val,
        elem::SharedResourceMap<float> &resources) override
    {
        if (key == "offset")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            _offset.store(int((elem::js::Number)val));
            
        }

        if (key == "process")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();

                 procFlag.store(float((elem::js::Number)val));
        }

        if (key == "headSize" || key == "tailSize")
        {

            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();

            if (key == "headSize")
                headSize = (int((elem::js::Number)val));

            if (key == "tailSize")
                tailSize = (int((elem::js::Number)val));
        }

        if (key == "scale")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();
            scalar.store(float((elem::js::Number)val));
        }

        if (key == "path")
        {
            if (!val.isString())
                return elem::ReturnCode::InvalidPropertyType();

            if (!resources.has((elem::js::String)val))
                return elem::ReturnCode::InvalidPropertyValue();

            auto ref = resources.get((elem::js::String)val);
            
            auto co = std::make_shared<fftconvolver::TwoStageFFTConvolver>();

            //  How to copy the data into a new juce::Audioblock
            // 1. Create an instance of juce::AudioBuffer
            juce::AudioBuffer<float> ab(1, ref->size());
            // then copy the data from the reference into the buffer
            ab.copyFrom(0, 0, ref->data(), ref->size());
            auto denormOffset = ab.getNumSamples() * _offset.load() ;
            _offset.store( static_cast<int>(denormOffset) );
            auto adjustedIRLen =ab.getNumSamples() - denormOffset;

            juce::AudioBuffer<float> shifted = juce::AudioBuffer<float>(1,  adjustedIRLen);
            // 2. Copy a crop of data from the reference into a second buffer
            shifted.copyFrom( 0, 0, ab, 0, denormOffset, adjustedIRLen );
            // 3. Update the convolver with the new data from channel 0
            auto *shiftedData = shifted.getReadPointer(0);

            co->reset();
            co->init(headSize, tailSize, shiftedData,  adjustedIRLen , 1, false);

            convolverQueue.push(std::move(co));
        }

        return GraphNode<float>::setProperty(key, val);
    }

    void process(elem::BlockContext<float> const &ctx) override
    {
        auto **inputData = ctx.inputData;
        auto *outputData = ctx.outputData;
        auto numChannels = ctx.numInputChannels;
        auto numSamples = ctx.numSamples;

        // optimise for the case where there is no processing to be done
        if ( procFlag.load() <= 1.0e-5 || numChannels == 0)
            return (void)std::fill_n(outputData, numSamples, float(0));

        // Create a new buffer for scaled input data
        std::vector<float> scaledData(numSamples);

        // First order of business: grab the most recent convolver to use if
        // there's anything in the queue. This behavior means that changing the convolver
        // impulse response while playing will cause a discontinuity.
        while (convolverQueue.size() > 0)
            convolverQueue.pop(convolver);
        if (numChannels == 0 || convolver == nullptr)
            return (void)std::fill_n(outputData, numSamples, float(0));

        // Scale the inputData with Scalar using JUCE FloatVectorOperations
        juce::FloatVectorOperations::multiply(scaledData.data(), inputData[0], scalar.load(), numSamples);
        // now convolve the scaledData with the impulse response
        convolver->TwoStageFFTConvolver::process(scaledData.data(), outputData, numSamples);
    }
    elem::SingleWriterSingleReaderQueue<std::shared_ptr<fftconvolver::TwoStageFFTConvolver>> convolverQueue;
    std::shared_ptr<fftconvolver::TwoStageFFTConvolver> convolver;
    //  std::atomic<float> procFlag = 0.0f;
    std::atomic<float> scalar = 1.0f;
    int headSize = 512;
    int tailSize = 4096;
    std::atomic<int> _offset = 0;
    std::atomic<float> procFlag = 0.0f;

}; // namespace elem