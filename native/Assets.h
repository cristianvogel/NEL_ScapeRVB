#pragma once
// Standard Library Headers
#include <vector>
#include <array>

// Third-Party Library Headers
#include <juce_core/juce_core.h>


class Asset
{
public:
    // PLUG-IN STATE  
    // audio asset containers, hold juce::File objects
    juce::File userStereoFile{};
    juce::File defaultStereoFile{};

    // VIEW STATE     
    // peak data for the view
    std::vector<float> userPeaksForView{};
    std::vector<float> defaultPeaksForView{};

    juce::String filenameForView{};

    // RUNTIME
    // Keys for Elementary VFS Map. eg:
    //   "name_0"
    //   "name_1",
    //   "REVERSED_name_0"
    //   "REVERSED_name_1"
    std::vector< std::string> vfsPathsForRealtime{};
    
    // Constructor
    Asset() = default;

    // Destructor
    ~Asset() = default;

    // Convert Asset to elem::js::Value
    elem::js::Value toJsValue() const {
        elem::js::Object obj;
        obj["userStereoFile"] = elem::js::Value(userStereoFile.getFullPathName().toStdString());
        obj["defaultStereoFile"] = elem::js::Value(defaultStereoFile.getFullPathName().toStdString());
        obj["filenameForView"] = elem::js::Value(filenameForView.toStdString());
        obj["vfsPathsForRealtime"] = elem::js::Value(vfsPathsForRealtime);
        obj["peakDataForView"] = elem::js::Value(userPeaksForView);
        obj["defaultPeaksForView"] = elem::js::Value(defaultPeaksForView);
        // Add other fields as needed
        return elem::js::Value(obj);
    }
};