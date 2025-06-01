#include "JuceAssetManager.h"
#include "PluginProcessor.h"

JuceAssetManager::JuceAssetManager()
    : assetStateTree("ASSET_STATE")
{
    initializeDefaultStructure();
}

void JuceAssetManager::initializeDefaultStructure()
{
    // Create main tree structure
    banksTree = juce::ValueTree("BANKS");
    sessionTree = juce::ValueTree("SESSION");
    viewStateTree = juce::ValueTree("VIEW_STATE");
    
    assetStateTree.addChild(banksTree, -1, nullptr);
    assetStateTree.addChild(sessionTree, -1, nullptr);
    assetStateTree.addChild(viewStateTree, -1, nullptr);
    
    // Initialize default session values
    sessionTree.setProperty("currentBank", 0, nullptr);
    sessionTree.setProperty("currentSlotIndex", 0, nullptr);
    sessionTree.setProperty("userScapeMode", false, nullptr);
    
    // Create default bank structure
    auto bank0 = juce::ValueTree("BANK_0");
    banksTree.addChild(bank0, -1, nullptr);
    
    // Initialize all slots for bank 0
    auto slot = SlotName::LIGHT;
    while (slot != SlotName::LAST)
    {
        auto slotTree = juce::ValueTree("SLOT_" + slotNameToString(slot));
        auto peaksTree = juce::ValueTree("PEAKS");
        auto vfsTree = juce::ValueTree("VFS_KEYS");
        
        slotTree.addChild(peaksTree, -1, nullptr);
        slotTree.addChild(vfsTree, -1, nullptr);
        
        // Initialize default properties
        slotTree.setProperty("cutoffChoice", HZ_OPTIONS[0], nullptr);
        slotTree.setProperty("filenameForView", "", nullptr);
        slotTree.setProperty("defaultFilenameForView", "", nullptr);
        slotTree.setProperty("userFilenameForView", "", nullptr);
        slotTree.setProperty("userFilePath", "", nullptr);
        slotTree.setProperty("defaultFilePath", "", nullptr);
        
        bank0.addChild(slotTree, -1, nullptr);
        nextSlotNoWrap(slot);
    }
}

juce::ValueTree JuceAssetManager::getOrCreateSlotTree(SlotName slot)
{
    int currentBank = getCurrentBank();
    juce::String bankName = "BANK_" + juce::String(currentBank);
    
    auto bankTree = banksTree.getChildWithName(bankName);
    if (!bankTree.isValid())
    {
        bankTree = juce::ValueTree(bankName);
        banksTree.addChild(bankTree, -1, nullptr);
    }
    
    juce::String slotName = "SLOT_" + slotNameToString(slot);
    auto slotTree = bankTree.getChildWithName(slotName);
    if (!slotTree.isValid())
    {
        slotTree = juce::ValueTree(slotName);
        auto peaksTree = juce::ValueTree("PEAKS");
        auto vfsTree = juce::ValueTree("VFS_KEYS");
        
        slotTree.addChild(peaksTree, -1, nullptr);
        slotTree.addChild(vfsTree, -1, nullptr);
        
        // Initialize default properties
        slotTree.setProperty("cutoffChoice", HZ_OPTIONS[0], nullptr);
        slotTree.setProperty("filenameForView", "", nullptr);
        slotTree.setProperty("defaultFilenameForView", "", nullptr);
        slotTree.setProperty("userFilenameForView", "", nullptr);
        slotTree.setProperty("userFilePath", "", nullptr);
        slotTree.setProperty("defaultFilePath", "", nullptr);
        
        bankTree.addChild(slotTree, -1, nullptr);
    }
    
    return slotTree;
}

juce::ValueTree JuceAssetManager::getSlotTree(SlotName slot) const
{
    int currentBank = getCurrentBank();
    juce::String bankName = "BANK_" + juce::String(currentBank);
    
    auto bankTree = banksTree.getChildWithName(bankName);
    if (!bankTree.isValid())
        return juce::ValueTree();
    
    juce::String slotName = "SLOT_" + slotNameToString(slot);
    return bankTree.getChildWithName(slotName);
}

void JuceAssetManager::setAssetProperty(SlotName slot, const juce::String& property, const juce::var& value)
{
    auto slotTree = getOrCreateSlotTree(slot);
    slotTree.setProperty(property, value, nullptr);
}

juce::var JuceAssetManager::getAssetProperty(SlotName slot, const juce::String& property, const juce::var& defaultValue) const
{
    auto slotTree = getSlotTree(slot);
    if (!slotTree.isValid())
        return defaultValue;
    
    return slotTree.getProperty(property, defaultValue);
}

void JuceAssetManager::populateAssetFromFile(SlotName slot, bool isUserFile, const juce::File& file, const std::vector<float>& peaks)
{
    auto slotTree = getOrCreateSlotTree(slot);
    
    if (isUserFile)
    {
        slotTree.setProperty("userFilePath", file.getFullPathName(), nullptr);
        slotTree.setProperty("userFilenameForView", file.getFileNameWithoutExtension(), nullptr);
        slotTree.setProperty("filenameForView", file.getFileNameWithoutExtension(), nullptr);
        
        auto peaksTree = slotTree.getChildWithName("PEAKS");
        if (peaksTree.isValid())
        {
            peaksTree.setProperty("userPeaks", floatVectorToVar(peaks), nullptr);
            peaksTree.setProperty("currentPeaks", floatVectorToVar(peaks), nullptr);
        }
    }
    else
    {
        slotTree.setProperty("defaultFilePath", file.getFullPathName(), nullptr);
        slotTree.setProperty("defaultFilenameForView", file.getFileNameWithoutExtension(), nullptr);
        if (slotTree.getProperty("filenameForView", "").toString().isEmpty())
        {
            slotTree.setProperty("filenameForView", file.getFileNameWithoutExtension(), nullptr);
        }
        
        auto peaksTree = slotTree.getChildWithName("PEAKS");
        if (peaksTree.isValid())
        {
            peaksTree.setProperty("defaultPeaks", floatVectorToVar(peaks), nullptr);
            if (peaksTree.getProperty("currentPeaks", juce::var()).isVoid())
            {
                peaksTree.setProperty("currentPeaks", floatVectorToVar(peaks), nullptr);
            }
        }
    }
}

void JuceAssetManager::populateAssetFromAsset(SlotName slot, const Asset& asset)
{
    auto slotTree = getOrCreateSlotTree(slot);
    assetToValueTree(asset, slotTree);
}

Asset JuceAssetManager::getAsset(SlotName slot) const
{
    auto slotTree = getSlotTree(slot);
    if (!slotTree.isValid())
        return Asset();
    
    return valueTreeToAsset(slotTree);
}

void JuceAssetManager::clearUserFiles(SlotName slot)
{
    auto slotTree = getSlotTree(slot);
    if (!slotTree.isValid())
        return;
    
    slotTree.setProperty("userFilePath", "", nullptr);
    slotTree.setProperty("userFilenameForView", "", nullptr);
    slotTree.setProperty("filenameForView", slotTree.getProperty("defaultFilenameForView", ""), nullptr);
    
    auto peaksTree = slotTree.getChildWithName("PEAKS");
    if (peaksTree.isValid())
    {
        peaksTree.removeProperty("userPeaks", nullptr);
        peaksTree.setProperty("currentPeaks", peaksTree.getProperty("defaultPeaks", juce::var()), nullptr);
    }
}

void JuceAssetManager::clearAllUserFiles()
{
    auto slot = SlotName::LIGHT;
    while (slot != SlotName::LAST)
    {
        clearUserFiles(slot);
        nextSlotNoWrap(slot);
    }
}

void JuceAssetManager::setCurrentBank(int bank)
{
    sessionTree.setProperty("currentBank", bank, nullptr);
}

int JuceAssetManager::getCurrentBank() const
{
    return sessionTree.getProperty("currentBank", 0);
}

void JuceAssetManager::setCurrentSlotIndex(int index)
{
    sessionTree.setProperty("currentSlotIndex", index, nullptr);
}

int JuceAssetManager::getCurrentSlotIndex() const
{
    return sessionTree.getProperty("currentSlotIndex", 0);
}

void JuceAssetManager::setUserScapeMode(bool enabled)
{
    sessionTree.setProperty("userScapeMode", enabled, nullptr);
}

bool JuceAssetManager::getUserScapeMode() const
{
    return sessionTree.getProperty("userScapeMode", false);
}

juce::String JuceAssetManager::serializeAssets() const
{
    auto xml = assetStateTree.createXml();
    return xml->toString();
}

void JuceAssetManager::deserializeAssets(const juce::String& xmlData)
{
    auto xml = juce::XmlDocument::parse(xmlData);
    if (xml != nullptr)
    {
        auto newTree = juce::ValueTree::fromXml(*xml);
        if (newTree.isValid() && newTree.hasType("ASSET_STATE"))
        {
            assetStateTree = newTree;
            banksTree = assetStateTree.getChildWithName("BANKS");
            sessionTree = assetStateTree.getChildWithName("SESSION");
            viewStateTree = assetStateTree.getChildWithName("VIEW_STATE");
            
            // Ensure structure exists
            if (!banksTree.isValid())
            {
                banksTree = juce::ValueTree("BANKS");
                assetStateTree.addChild(banksTree, -1, nullptr);
            }
            if (!sessionTree.isValid())
            {
                sessionTree = juce::ValueTree("SESSION");
                assetStateTree.addChild(sessionTree, -1, nullptr);
            }
            if (!viewStateTree.isValid())
            {
                viewStateTree = juce::ValueTree("VIEW_STATE");
                assetStateTree.addChild(viewStateTree, -1, nullptr);
            }
        }
    }
}

void JuceAssetManager::getStateInformation(juce::MemoryBlock& destData) const
{
    auto xml = assetStateTree.createXml();
    juce::MemoryOutputStream stream;
    xml->writeTo(stream, juce::XmlElement::TextFormat().withoutHeader());
    destData = stream.getMemoryBlock();
}

void JuceAssetManager::setStateInformation(const void* data, int sizeInBytes)
{
    juce::String xmlData(static_cast<const char*>(data), sizeInBytes);
    deserializeAssets(xmlData);
}

juce::String JuceAssetManager::slotNameToString(SlotName slot) const
{
    return juce::String(slotname_to_string(slot));
}

SlotName JuceAssetManager::stringToSlotName(const juce::String& str) const
{
    return slotname_from_string(str.toStdString());
}

void JuceAssetManager::assetToValueTree(const Asset& asset, juce::ValueTree& slotTree)
{
    // Set basic properties
    slotTree.setProperty("cutoffChoice", asset.get<int>(Asset::Props::cutOffChoice), nullptr);
    slotTree.setProperty("filenameForView", juce::String(asset.get<std::string>(Asset::Props::filenameForView)), nullptr);
    slotTree.setProperty("defaultFilenameForView", juce::String(asset.get<std::string>(Asset::Props::defaultFilenameForView)), nullptr);
    slotTree.setProperty("userFilenameForView", juce::String(asset.get<std::string>(Asset::Props::userFilenameForView)), nullptr);
    
    // Set file paths
    auto userFile = asset.get<juce::File>(Asset::Props::userStereoFile);
    auto defaultFile = asset.get<juce::File>(Asset::Props::defaultStereoFile);
    
    slotTree.setProperty("userFilePath", userFile.getFullPathName(), nullptr);
    slotTree.setProperty("defaultFilePath", defaultFile.getFullPathName(), nullptr);
    
    // Set peaks data
    auto peaksTree = slotTree.getChildWithName("PEAKS");
    if (!peaksTree.isValid())
    {
        peaksTree = juce::ValueTree("PEAKS");
        slotTree.addChild(peaksTree, -1, nullptr);
    }
    
    peaksTree.setProperty("userPeaks", floatVectorToVar(asset.get<std::vector<float>>(Asset::Props::userPeaksForView)), nullptr);
    peaksTree.setProperty("defaultPeaks", floatVectorToVar(asset.get<std::vector<float>>(Asset::Props::defaultPeaksForView)), nullptr);
    peaksTree.setProperty("currentPeaks", floatVectorToVar(asset.get<std::vector<float>>(Asset::Props::currentPeakDataInView)), nullptr);
    
    // Set VFS keys
    auto vfsTree = slotTree.getChildWithName("VFS_KEYS");
    if (!vfsTree.isValid())
    {
        vfsTree = juce::ValueTree("VFS_KEYS");
        slotTree.addChild(vfsTree, -1, nullptr);
    }
    
    vfsTree.setProperty("keys", stringVectorToVar(asset.get<std::vector<std::string>>(Asset::Props::vfs_keys)), nullptr);
}

Asset JuceAssetManager::valueTreeToAsset(const juce::ValueTree& slotTree) const
{
    Asset asset;
    
    // Get basic properties
    asset.set(Asset::Props::cutOffChoice, static_cast<int>(slotTree.getProperty("cutoffChoice", HZ_OPTIONS[0])));
    asset.set(Asset::Props::filenameForView, slotTree.getProperty("filenameForView", "").toString().toStdString());
    asset.set(Asset::Props::defaultFilenameForView, slotTree.getProperty("defaultFilenameForView", "").toString().toStdString());
    asset.set(Asset::Props::userFilenameForView, slotTree.getProperty("userFilenameForView", "").toString().toStdString());
    
    // Get file paths
    juce::String userFilePath = slotTree.getProperty("userFilePath", "");
    juce::String defaultFilePath = slotTree.getProperty("defaultFilePath", "");
    
    if (userFilePath.isNotEmpty())
        asset.set(Asset::Props::userStereoFile, juce::File(userFilePath));
    if (defaultFilePath.isNotEmpty())
        asset.set(Asset::Props::defaultStereoFile, juce::File(defaultFilePath));
    
    // Get peaks data
    auto peaksTree = slotTree.getChildWithName("PEAKS");
    if (peaksTree.isValid())
    {
        asset.set(Asset::Props::userPeaksForView, varToFloatVector(peaksTree.getProperty("userPeaks", juce::var())));
        asset.set(Asset::Props::defaultPeaksForView, varToFloatVector(peaksTree.getProperty("defaultPeaks", juce::var())));
        asset.set(Asset::Props::currentPeakDataInView, varToFloatVector(peaksTree.getProperty("currentPeaks", juce::var())));
    }
    
    // Get VFS keys
    auto vfsTree = slotTree.getChildWithName("VFS_KEYS");
    if (vfsTree.isValid())
    {
        asset.set(Asset::Props::vfs_keys, varToStringVector(vfsTree.getProperty("keys", juce::var())));
    }
    
    return asset;
}

juce::var JuceAssetManager::floatVectorToVar(const std::vector<float>& vec) const
{
    if (vec.empty())
        return juce::var();
    
    juce::Array<juce::var> array;
    for (float f : vec)
        array.add(f);
    
    return juce::var(array);
}

std::vector<float> JuceAssetManager::varToFloatVector(const juce::var& var) const
{
    std::vector<float> result;
    
    if (var.isArray())
    {
        const auto& array = *var.getArray();
        result.reserve(array.size());
        
        for (const auto& element : array)
        {
            if (element.isDouble() || element.isInt())
                result.push_back(static_cast<float>(element));
        }
    }
    
    return result;
}

juce::var JuceAssetManager::stringVectorToVar(const std::vector<std::string>& vec) const
{
    if (vec.empty())
        return juce::var();
    
    juce::Array<juce::var> array;
    for (const auto& str : vec)
        array.add(juce::String(str));
    
    return juce::var(array);
}

std::vector<std::string> JuceAssetManager::varToStringVector(const juce::var& var) const
{
    std::vector<std::string> result;
    
    if (var.isArray())
    {
        const auto& array = *var.getArray();
        result.reserve(array.size());
        
        for (const auto& element : array)
        {
            if (element.isString())
                result.push_back(element.toString().toStdString());
        }
    }
    
    return result;
}