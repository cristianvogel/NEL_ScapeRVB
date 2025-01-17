#ifndef ASSET_H
#define ASSET_H

#include <juce_core/juce_core.h> // Include necessary JUCE dependencies
#include <string>
#include <elem/Value.h>


// Forward declaration of NEL_fx_plugin to avoid unnecessary inclusion
class Processor;


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
        userFilenameForView,
        vfs_keys // Elementary Virtual File System resource paths
    };

    // 1. Base template declaration
    template <typename T>
    inline const T& get(Props property) const;
    // 2. Specialization for juce::File
    template <>
    inline const juce::File& get<juce::File>(Props property) const
    {
        switch (property)
        {
        case Props::userStereoFile: return userStereoFile;
        case Props::defaultStereoFile: return defaultStereoFile;
        default: throw std::invalid_argument("Invalid property for juce::File getter");
        }
    }

    // 3. Specialization for std::string
    template <>
    inline const std::string& get<std::string>(Props property) const
    {
        switch (property)
        {
        case Props::filenameForView: return filenameForView;
        case Props::defaultFilenameForView: return defaultFilenameForView;
        case Props::userFilenameForView: return userFilenameForView;
        default: throw std::invalid_argument("Invalid property for filename string getter");
        }
    }

    // 4. Specialization for std::vector<float>
    template <>
    inline const std::vector<float>& get<std::vector<float>>(Props property) const
    {
        switch (property)
        {
        case Props::userPeaksForView: return userPeaksForView;
        case Props::defaultPeaksForView: return defaultPeaksForView;
        case Props::currentPeakDataInView: return currentPeakDataInView;
        default: throw std::invalid_argument("Invalid property for peaks vector getter");
        }
    }

    // 5. for vfs
    template <>
    inline const std::vector<std::string>& get<std::vector<std::string>>(Props property) const
    {
        switch (property)
        {
        case Props::vfs_keys: return vfs_keys;
        default: throw std::invalid_argument("Invalid property for vfs string vector getter");
        }
    }

    // Constructors and Destructor
    inline Asset() = default;
    inline ~Asset() = default;

    // clear
    inline void clear_userfiles()
    {
        userStereoFile = juce::File();
        userPeaksForView.clear();
        filenameForView.clear();
        userFilenameForView.clear();
    }

    // Generic property setters
    inline void set(Props property, const juce::File& file)
    {
        switch (property)
        {
        case Props::userStereoFile:
            userStereoFile = file;
            break;
        case Props::defaultStereoFile:
            defaultStereoFile = file;
            break;
        default:
            throw std::invalid_argument("Invalid property for File setter");
        }
    }

    inline void set(Props property, const std::vector<std::string>& keys)
    {
        switch (property)
        {
        case Props::vfs_keys:
            if (!keys.empty())
            {
                vfs_keys.clear();
                vfs_keys.reserve(keys.size());
                vfs_keys.insert(vfs_keys.end(), keys.begin(), keys.end());
            }
            break;
        default:
            throw std::invalid_argument("Invalid property for VFS_KEYS");
        }
    }

    inline void set(Props property, const std::string& str)
    {
        switch (property)
        {
        case Props::filenameForView:
            filenameForView = str;
            break;
        case Props::defaultFilenameForView:
            defaultFilenameForView = str;
            break;
        case Props::userFilenameForView:
            userFilenameForView = str;
            break;
        default:
            throw std::invalid_argument("Invalid property for string setter");
        }
    }

    inline void set(Props property, const std::vector<float>& peaks)
    {
        switch (property)
        {
        case Props::userPeaksForView:
            userPeaksForView = peaks;
            break;
        case Props::defaultPeaksForView:
            defaultPeaksForView = peaks;
            break;
        case Props::currentPeakDataInView:
            currentPeakDataInView = peaks;
            break;
        default:
            throw std::invalid_argument("Invalid property for vector setter");
        }
    }

    inline bool hasFilenameForView() const
    {
        return !filenameForView.empty();
    }

    inline bool hasUserStereoFile() const
    {
        return userStereoFile.exists();
    }

    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
    // ▮▮▮▮ Wrapping and unWrapping for persisting state ▮▮▮▮ //
    // ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //

    // Convert Asset to elem::js::Value
    inline elem::js::Value toJsValue() const
    {
        elem::js::Object obj;
        obj["userStereoFile"] = elem::js::Value(get<juce::File>(Props::userStereoFile).getFullPathName().toStdString());
        obj["defaultStereoFile"] = elem::js::Value(
            get<juce::File>(Props::defaultStereoFile).getFullPathName().toStdString());
        obj["filenameForView"] = elem::js::Value(get<std::string>(Props::filenameForView));
        obj["defaultFilenameForView"] = elem::js::Value(get<std::string>(Props::defaultFilenameForView));
        obj["userPeaksForView"] = elem::js::Value(get<std::vector<float>>(Props::userPeaksForView));
        obj["defaultPeaksForView"] = elem::js::Value(get<std::vector<float>>(Props::defaultPeaksForView));
        obj["vfs_keys"] = elem::js::Value(get<std::vector<std::string>>(Props::vfs_keys));
        // don't think we need to save currentPeakDataInView, as its derived from the other peaks
        return elem::js::Value(obj);
    }

    // Convert from elem::js::Value to Asset
    // specialised for asset state restoration
    // todo: Do we need to restore the vfs_keys?
    static inline Asset fromJsValue(const elem::js::Value& value)
    {
        Asset asset;
        if (value.isObject())
        {
            const auto& obj = value.getObject();
            if (obj.contains("userStereoFile") && obj.at("userStereoFile").isString())
            {
                asset.set(Props::userStereoFile, juce::File(obj.at("userStereoFile").toString()));
            }
            if (obj.contains("filenameForView") && obj.at("filenameForView").isString())
            {
                asset.set(Props::filenameForView, obj.at("filenameForView").toString());
            }
        }
        return asset;
    }

private:
    juce::File userStereoFile = juce::File();
    juce::File defaultStereoFile = juce::File();

    std::vector<float> userPeaksForView;
    std::vector<float> defaultPeaksForView;
    std::vector<float> currentPeakDataInView;

    std::string filenameForView;
    std::string defaultFilenameForView;
    std::vector<std::string> vfs_keys;
    std::string userFilenameForView;
};

#endif // ASSET_H
