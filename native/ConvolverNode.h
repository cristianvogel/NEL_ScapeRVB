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

        if (key == "process")
        {
            if (!val.isNumber())
                return elem::ReturnCode::InvalidPropertyType();

            procFlag.store(float((elem::js::Number)val));
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

            co->reset();
            co->init(512, 4096, ref->data(), ref->size()); // possible optimisation here

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
        // Create a new buffer for scaled input data
        std::vector<float> scaledData(numSamples);

        // bypass when procFlag is close to zero
        if (procFlag.load() < 0.00001f)
            return (void)std::copy_n(inputData[0], numSamples, outputData);

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
    std::atomic<float> procFlag = 0.0f;
    std::atomic<float> scalar = 1.0f;

}; // namespace elem