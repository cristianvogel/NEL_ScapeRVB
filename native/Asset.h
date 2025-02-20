#ifndef ASSET_H
#define ASSET_H

#include <juce_core/juce_core.h> // Include necessary JUCE dependencies
#include <string>
#include <elem/deps/json.hpp>
/**
 * @file Asset.h
 * @brief Class that represents an IR asset, holds necessary data and provides
 * functions to manage the asset.
 *
 * This class represents an IR asset that can be stored in the plugin's memory.
 * It can be either populated from a default file, a user uploaded file
 * The class provides functions to manage the IR asset, such as loading and
 * saving the IR data, generating the IR data, and accessing the IR data.
 *
 * @see Asset::Props
 */

// Forward declaration of main Processor to avoid unnecessary inclusion
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
        cutOffChoice,
        vfs_keys // Elementary Virtual File System resource paths
    };

    static inline std::vector<std::string> getPropNames() {
        std::vector<std::string> propNames = {
            "userStereoFile",
            "defaultStereoFile",
            "filenameForView",
            "userPeaksForView",
            "defaultPeaksForView",
            "currentPeakDataInView",
            "defaultFilenameForView",
            "userFilenameForView",
            "cutOffChoice",
            "vfs_keys"
        };
        return propNames;
    }



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

    //  6. for cutoff choice
    template <>
    inline const int& get<int>(Props property) const
    {
        switch (property)
        {
        case Props::cutOffChoice:
            return cutOffChoice; // Scoped access to `cutOffChoice`.
        default:
            return defaultCutOffChoice; // Default value.
        }
    }

    // Constructors and Destructor
    inline Asset() = default;
    inline ~Asset() = default;

    /**
     * @brief Clears all user-uploaded files from this asset
     * @public
     */
    inline void clear_userfiles()
    {
        userStereoFile = juce::File();
        userPeaksForView.clear();
        filenameForView.clear();
        userFilenameForView.clear();
    }

    inline bool has_userfile() const
    {
        return userStereoFile.exists();
    }

    inline bool has_filename_for_view() const
    {
        return !filenameForView.empty();
    }

    /**
     * @brief a vector containing all three filenames stored in this asset
     * @note The return order is: filenameForView, defaultFilenameForView, userFilenameForView
     */
    inline std::vector<std::string> get_all_filenames() const
    {
        std::vector<std::string> filenames;
        filenames.push_back(filenameForView);
        filenames.push_back(defaultFilenameForView);
        filenames.push_back(userFilenameForView);
        return filenames;
    }

    /**
     * @brief Returns a string containing all of the asset's properties.
     *        This is useful for seralisation and logging.
     * @return A string containing all of the asset's properties.
     * @public
     */
 inline std::string wrap_asset() const
{
    nlohmann::json json;

    // Serialize cutoff choice
    json["cutOffChoice"] = cutOffChoice;

    // Serialize filenames
    if (!filenameForView.empty())
        json["filenameForView"] = filenameForView;
    if (!defaultFilenameForView.empty())
        json["defaultFilenameForView"] = defaultFilenameForView;
    if (!userFilenameForView.empty())
        json["userFilenameForView"] = userFilenameForView;

    // Serialize file paths
    if (userStereoFile.exists())
        json["userStereoFile"] = userStereoFile.getFullPathName().toStdString();
    if (defaultStereoFile.exists())
        json["defaultStereoFile"] = defaultStereoFile.getFullPathName().toStdString();

    // Serialize peak data arrays
    if (!userPeaksForView.empty())
        json["userPeaksForView"] = userPeaksForView;
    if (!defaultPeaksForView.empty())
        json["defaultPeaksForView"] = defaultPeaksForView;
    if (!currentPeakDataInView.empty())
        json["currentPeakDataInView"] = currentPeakDataInView;

    // Serialize VFS keys
    if (!vfs_keys.empty())
        json["vfs_keys"] = vfs_keys;

    return json.dump();
}

    // Generic property setters
    inline void set(Props property, int hz )
    {
        switch (property)
        {
        case Props::cutOffChoice:
            cutOffChoice = hz;
            break;
        default:
            throw std::invalid_argument("Invalid property for cutOffChoice setter");
        }
    }
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





private:
    static constexpr int defaultCutOffChoice  = 160;
    juce::File userStereoFile = juce::File();
    juce::File defaultStereoFile = juce::File();

    std::vector<float> userPeaksForView;
    std::vector<float> defaultPeaksForView;
    std::vector<float> currentPeakDataInView;

    std::string filenameForView;
    std::string defaultFilenameForView;
    std::vector<std::string> vfs_keys;
    std::string userFilenameForView;

    int cutOffChoice{};
};

#endif // ASSET_H
