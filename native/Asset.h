#ifndef ASSET_H
#define ASSET_H

#include <juce_core/juce_core.h> // Include necessary JUCE dependencies
#include <juce_audio_basics/juce_audio_basics.h>
#include <string>
#include <elem/Value.h>

// Forward declaration of NEL_fx_plugin to avoid unnecessary inclusion
class Processor;

class Asset {
public:
    enum class Props {
        userStereoFile,
        defaultStereoFile,
        filenameForView,
        userPeaksForView,
        defaultPeaksForView,
        currentPeakDataInView,
        defaultFilenameForView,
        activeResourcePath
    };

    // Constructors and Destructor
    explicit Asset(Processor* proc);
    Asset();
    ~Asset();

    // Methods
    void setProperty(Props property, const juce::File& file);
    void setProperty(Props property, const std::string& str);
    void setProperty(Props property, const std::vector<float>& reducedPeaks);

    static elem::js::Value toJsValue() ;
    static Asset fromJsValue(const elem::js::Value& value);

    // Data properties
    juce::File userStereoFile = juce::File();      // Default to invalid juce::File
    juce::File defaultStereoFile = juce::File();  // Default to invalid juce::File

    std::vector<float> reducedPeaks;
    std::vector<float> userPeaksForView ;
    std::vector<float> defaultPeaksForView ;
    std::vector<float> currentPeakDataInView ;

    std::string filenameForView;             // Default to empty string
    std::string defaultFilenameForView;      // Default to empty string
    std::string activeResourcePath;          // Default to empty string

private:
    // Data Members
    Processor* processor;

};

#endif // ASSET_H