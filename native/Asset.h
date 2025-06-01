#ifndef ASSET_H
#define ASSET_H

#include <juce_core/juce_core.h> // Include necessary JUCE dependencies
#include <juce_data_structures/juce_data_structures.h>
#include <string>
#include <elem/deps/json.hpp>


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

    // clear
    inline void clear_userfiles()
    {
        userStereoFile = juce::File();
        userPeaksForView.clear();
        filenameForView.clear();
        userFilenameForView.clear();
    }

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

    // JUCE-based serialization methods
    inline juce::var toJuceVar() const
    {
        auto object = new juce::DynamicObject();
        
        // Serialize cutoff choice
        object->setProperty("cutOffChoice", cutOffChoice);
        
        // Serialize filenames
        if (!filenameForView.empty())
            object->setProperty("filenameForView", juce::String(filenameForView));
        if (!defaultFilenameForView.empty())
            object->setProperty("defaultFilenameForView", juce::String(defaultFilenameForView));
        if (!userFilenameForView.empty())
            object->setProperty("userFilenameForView", juce::String(userFilenameForView));
        
        // Serialize file paths
        if (userStereoFile.exists())
            object->setProperty("userStereoFile", userStereoFile.getFullPathName());
        if (defaultStereoFile.exists())
            object->setProperty("defaultStereoFile", defaultStereoFile.getFullPathName());
        
        // Serialize peak data arrays
        if (!userPeaksForView.empty())
        {
            juce::Array<juce::var> userPeaks;
            for (float f : userPeaksForView)
                userPeaks.add(f);
            object->setProperty("userPeaksForView", juce::var(userPeaks));
        }
        
        if (!defaultPeaksForView.empty())
        {
            juce::Array<juce::var> defaultPeaks;
            for (float f : defaultPeaksForView)
                defaultPeaks.add(f);
            object->setProperty("defaultPeaksForView", juce::var(defaultPeaks));
        }
        
        if (!currentPeakDataInView.empty())
        {
            juce::Array<juce::var> currentPeaks;
            for (float f : currentPeakDataInView)
                currentPeaks.add(f);
            object->setProperty("currentPeakDataInView", juce::var(currentPeaks));
        }
        
        // Serialize VFS keys
        if (!vfs_keys.empty())
        {
            juce::Array<juce::var> vfsKeys;
            for (const auto& key : vfs_keys)
                vfsKeys.add(juce::String(key));
            object->setProperty("vfs_keys", juce::var(vfsKeys));
        }
        
        return juce::var(object);
    }
    
    inline void fromJuceVar(const juce::var& var)
    {
        if (!var.isObject())
            return;
            
        auto* obj = var.getDynamicObject();
        if (obj == nullptr)
            return;
        
        // Deserialize cutoff choice
        if (obj->hasProperty("cutOffChoice"))
            cutOffChoice = static_cast<int>(obj->getProperty("cutOffChoice"));
        
        // Deserialize filenames
        if (obj->hasProperty("filenameForView"))
            filenameForView = obj->getProperty("filenameForView").toString().toStdString();
        if (obj->hasProperty("defaultFilenameForView"))
            defaultFilenameForView = obj->getProperty("defaultFilenameForView").toString().toStdString();
        if (obj->hasProperty("userFilenameForView"))
            userFilenameForView = obj->getProperty("userFilenameForView").toString().toStdString();
        
        // Deserialize file paths
        if (obj->hasProperty("userStereoFile"))
            userStereoFile = juce::File(obj->getProperty("userStereoFile").toString());
        if (obj->hasProperty("defaultStereoFile"))
            defaultStereoFile = juce::File(obj->getProperty("defaultStereoFile").toString());
        
        // Deserialize peak data arrays
        if (obj->hasProperty("userPeaksForView"))
        {
            auto peaksVar = obj->getProperty("userPeaksForView");
            if (peaksVar.isArray())
            {
                userPeaksForView.clear();
                const auto& array = *peaksVar.getArray();
                for (const auto& element : array)
                {
                    if (element.isDouble() || element.isInt())
                        userPeaksForView.push_back(static_cast<float>(element));
                }
            }
        }
        
        if (obj->hasProperty("defaultPeaksForView"))
        {
            auto peaksVar = obj->getProperty("defaultPeaksForView");
            if (peaksVar.isArray())
            {
                defaultPeaksForView.clear();
                const auto& array = *peaksVar.getArray();
                for (const auto& element : array)
                {
                    if (element.isDouble() || element.isInt())
                        defaultPeaksForView.push_back(static_cast<float>(element));
                }
            }
        }
        
        if (obj->hasProperty("currentPeakDataInView"))
        {
            auto peaksVar = obj->getProperty("currentPeakDataInView");
            if (peaksVar.isArray())
            {
                currentPeakDataInView.clear();
                const auto& array = *peaksVar.getArray();
                for (const auto& element : array)
                {
                    if (element.isDouble() || element.isInt())
                        currentPeakDataInView.push_back(static_cast<float>(element));
                }
            }
        }
        
        // Deserialize VFS keys
        if (obj->hasProperty("vfs_keys"))
        {
            auto vfsVar = obj->getProperty("vfs_keys");
            if (vfsVar.isArray())
            {
                vfs_keys.clear();
                const auto& array = *vfsVar.getArray();
                for (const auto& element : array)
                {
                    if (element.isString())
                        vfs_keys.push_back(element.toString().toStdString());
                }
            }
        }
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
