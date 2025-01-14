//
// Created by Cristian Andres Vogel on 14/01/2025.
//
#include "Asset.h"
#include "PluginProcessor.h"

// Constructors and Destructor
Asset::Asset(Processor* proc)
    :  processor(proc)
{}


// default constructor
Asset::Asset()
    :  processor(nullptr)
{}

Asset::~Asset() = default;

// Method Implementations
void Asset::setProperty(Props property, const juce::File& file) {
    // Implementation for setting property with juce::File
    if (property == Props::userStereoFile) {
        userStereoFile = file;
    } else if (property == Props::defaultStereoFile) {
        defaultStereoFile = file;
    }
}

void Asset::setProperty(Props property, const std::string& str) {
    // Implementation for setting property with std::string
    if (property == Props::filenameForView) {
        filenameForView = str;
    } else if (property == Props::defaultFilenameForView) {
        defaultFilenameForView = str;
    }
}

void Asset::setProperty(Props property, const std::vector<float>& reducedPeaks) {
    // Implementation for setting property with AudioBuffer
    if (property == Props::userPeaksForView) {
        userPeaksForView = reducedPeaks;
    } else if (property == Props::defaultPeaksForView) {
        defaultPeaksForView = reducedPeaks;
    } else if (property == Props::currentPeakDataInView) {
        currentPeakDataInView = reducedPeaks;
    }
}

elem::js::Value Asset::toJsValue() {
    // Convert the Asset data to a JavaScript value; placeholder
    elem::js::Value val;
    return val;
}

Asset Asset::fromJsValue(const elem::js::Value& value) {
    // Convert a JavaScript value back into an Asset object; placeholder
    Asset asset;
    return asset;
}