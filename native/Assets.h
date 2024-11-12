#pragma once
// Standard Library Headers
#include <vector>
#include <array>

// Third-Party Library Headers
#include <juce_core/juce_core.h>

class Asset
{
public:
    enum class Props
    {
        userStereoFile,
        defaultStereoFile,
        filenameForView,
        userPeaksForView,
        defaultPeaksForView,
        currentPeakDataInView,
        defaultFilenameForView,
        activeResourcePath,
        LAST
    };

    // PLUG-IN STATE
    // audio asset containers, hold juce::File objects
    juce::File userStereoFile{};
    juce::File defaultStereoFile{};

    // VIEW STATE
    // peak data for the view
    std::vector<float> userPeaksForView{};
    std::vector<float> defaultPeaksForView{};
    std::vector<float> currentPeakDataInView{};

    // Names
    std::string filenameForView{};
    std::string defaultFilenameForView{};

    //Elementary Runtime
    std::string activeResourcePath{};

    // Constructor
    Asset() = default;

    // Destructor
    ~Asset() = default;

    // Method for property assignment of juce::File types
    void setProperty(Props property, const juce::File &file)
    {
        switch (property)
        {
        case Props::userStereoFile:
            userStereoFile = file;
            break;
        case Props::defaultStereoFile:
            defaultStereoFile = file;
            break;
        case Props::filenameForView:
            filenameForView = file.getFileNameWithoutExtension().substring( 0, 15 ).toStdString();
            break;
        case Props::defaultFilenameForView:
            defaultFilenameForView = file.getFileNameWithoutExtension().toStdString();
            break;
        default:
            break;
        }
    }
    // Method for property assignment of std::string types
    void setProperty(Props property, const std::string &str)
    {
        switch (property)
        {
        case Props::activeResourcePath:
            activeResourcePath = str;
                default : break;
        }
    }

    // Method for property assignment of std::vector<float> types
    void setProperty(Props property, const std::vector<float> &peaks)
    {

        switch (property)
        {
        case Props::userPeaksForView:
            std::cout << "Set current view peaks" << std::endl;
            userPeaksForView = peaks;
            break;
        case Props::defaultPeaksForView:
            defaultPeaksForView = peaks;
            break;
        case Props::currentPeakDataInView:
            currentPeakDataInView = peaks;
            break;
        default:
            break;
        }
    }
    
    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
    // ▮▮▮▮ Wrapping and unWrapping for persisting state ▮▮▮▮ //
    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

    // Convert Asset to elem::js::Value
    elem::js::Value toJsValue() const
    {
        elem::js::Object obj;
        obj["userStereoFile"] = elem::js::Value(userStereoFile.getFullPathName().toStdString());
        obj["defaultStereoFile"] = elem::js::Value(defaultStereoFile.getFullPathName().toStdString());
        obj["filenameForView"] = elem::js::Value(filenameForView);
        obj["defaultFilenameForView"] = elem::js::Value(defaultFilenameForView);
        obj["userPeaksForView"] = elem::js::Value(userPeaksForView);
        obj["defaultPeaksForView"] = elem::js::Value(defaultPeaksForView);
        // don't think we need to save currentPeakDataInView, as its derived from the other peaks
        return elem::js::Value(obj);
    }

    // Convert from elem::js::Value to Asset
    // specialised for asset state restoration
    static Asset fromJsValue(const elem::js::Value &value)
    {
        Asset asset;

        if (value.isObject())
        {
            const auto &obj = value.getObject();

            if (obj.contains("userStereoFile") && obj.at("userStereoFile").isString())
            {
                asset.userStereoFile = juce::File(obj.at("userStereoFile").toString());
            }

            if (obj.contains("filenameForView") && obj.at("filenameForView").isString())
            {
                asset.filenameForView = obj.at("filenameForView").toString();
            }
        }

        return asset;
    }
};