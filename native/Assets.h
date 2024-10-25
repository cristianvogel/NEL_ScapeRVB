#pragma once
// Standard Library Headers
#include <vector>
#include <array>

// Third-Party Library Headers
#include <juce_core/juce_core.h>


class Asset
{
public:
    enum class Props {
        userStereoFile,
        defaultStereoFile,
        userPathNameHistory,
        userFilenameForView,
        vfsPathHistory,
        userPeaksForView,
        defaultPeaksForView,
        defaultFilenameForView
    };

    // PLUG-IN STATE  
    // audio asset containers, hold juce::File objects
    juce::File userStereoFile{};
    juce::File defaultStereoFile{};

    // VIEW STATE     
    // peak data for the view
    std::vector<float> userPeaksForView{};
    std::vector<float> defaultPeaksForView{};

    juce::String userFilenameForView{};
    juce::String defaultFilenameForView{};

    // RUNTIME HISTORY
    // Keys for Elementary VFS Map. eg:
    //   "name0_0"
    //   "name0_1",
    //   "REVERSED_name0_0"
    //   "REVERSED_name0_1"
    // and file path history
    std::vector< elem::js::Object > vfsPathHistory{};
    std::vector< std::string > userPathNameHistory{};
    
    // Constructor
    Asset() = default;

    // Destructor
    ~Asset() = default;

    // Convert Asset to elem::js::Value
    elem::js::Value toJsValue() const {

          elem::js::Array vfsPaths;
        for (const auto &vfsPath : vfsPathHistory)
        {
            vfsPaths.push_back(elem::js::Value(vfsPath));
        }
        elem::js::Object obj;
        obj["userStereoFile"] = elem::js::Value(userStereoFile.getFullPathName().toStdString());
        obj["defaultStereoFile"] = elem::js::Value(defaultStereoFile.getFullPathName().toStdString());
        obj["userPathNameHistory"] = elem::js::Value(userPathNameHistory);
        obj["userFilenameForView"] = elem::js::Value(userFilenameForView.toStdString());
        obj["defaultFilenameForView"] = elem::js::Value(defaultFilenameForView.toStdString());
        obj["vfsPathHistory"] = elem::js::Value( vfsPaths );
        obj["peakDataForView"] = elem::js::Value(userPeaksForView);
        obj["defaultPeaksForView"] = elem::js::Value(defaultPeaksForView);
        // Add other fields as needed
        return elem::js::Value(obj);
    }

        // Convert from elem::js::Value to Asset
        // specialised for asset state restoration
    static Asset fromJsValue(const elem::js::Value& value) {
        Asset asset;

        if (value.isObject()) {
            const auto& obj = value.getObject();

            if (obj.count("userStereoFile") > 0 && obj.at("userStereoFile").isString()) {
                asset.userStereoFile = juce::File(obj.at("userStereoFile").toString());
            }

            if (obj.count("userFilenameForView") > 0 && obj.at("userFilenameForView").isString()) {
                asset.userFilenameForView = juce::String(obj.at("userFilenameForView").toString());
            }
        }

        return asset;
    }

};