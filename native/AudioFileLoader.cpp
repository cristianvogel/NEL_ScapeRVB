#include "AudioFileLoader.h"

#include "PluginProcessor.h"


AudioFileLoader::AudioFileLoader(EffectsPluginProcessor& p)
    : chooser(std::make_unique<juce::FileChooser>(
          "Select a stereo audio file",
          juce::File::getSpecialLocation(juce::File::userHomeDirectory),
          "*.wav;*.aiff"
      )),
      processor(p)
{
    clearAllSlots();
}

AudioFileLoader::~AudioFileLoader()
{
    cancelPendingUpdate();
}


void AudioFileLoader::loadNewFile()
{
    chooser = std::make_unique<juce::FileChooser>(
         "Select a stereo audio file",
         juce::File::getSpecialLocation(juce::File::userHomeDirectory),
         "*.wav;*.aiff");

    juce::MessageManager::callAsync([this]
    {
        std::cout << "AudioFileLoader::loadNewFile: Running chooser->launchAsync on the message thread." << std::endl;
            chooser->launchAsync(
                juce::FileBrowserComponent::openMode |
                juce::FileBrowserComponent::canSelectFiles,
                [this](const juce::FileChooser& fc)
                {
                    auto file = fc.getResult();
                    if (file.exists())
                    {
                        std::cout << "AudioFileLoader::loadNewFile: File selected: "
                            << file.getFullPathName().toStdString() << std::endl;
                        fileSlots[currentSlotIndex] = file;
                        triggerAsyncUpdate();
                    }
                    else
                    {
                        std::cout << "AudioFileLoader::loadNewFile: No file was selected." << std::endl;
                    }
                    chooser.reset();
                });
    });
}


void AudioFileLoader::handleAsyncUpdate()
{
    std::cout << "AudioFileLoader:: handle async update." << std::endl;
    // This runs on the message thread after async load completes
    // Processes file validation and updates processor state after file selection is complete
    juce::StringPairArray chooser_result{};
    const auto currentFile = getFileAtSlot(currentSlotIndex);
    juce::String file_path = currentFile.getFullPathName();
    const auto& targetSlot = DEFAULT_SLOT_NAMES[currentSlotIndex];
    // Validity conditional
    if (juce::File file(file_path); file.existsAsFile())
    {
        processor.slotManager->assignFileHookToSlot(fromString(targetSlot), file);
        processor.slotManager->assignFilenameToSlot(fromString(targetSlot), file);
        processor.userFilesWereImported.store(true);
        currentSlotIndex = (currentSlotIndex + 1) % NUM_SLOTS;
    }
    else
    {
        processor.slotManager->assignDefaultFilenameToSlot(fromString(targetSlot));
        processor.slotManager->wrapDefaultPeaksForSlot(fromString(targetSlot));
    }
    // finally, update state with valid results of file import
    processor.updateStateWithAssetsData();
    processor.inspectVFS();
}


const juce::File& AudioFileLoader::getFileAtCurrentSlot()
{
    static const juce::File noFile;
    if (fileSlots[currentSlotIndex].exists())
    {
        return fileSlots[currentSlotIndex];
    };
    return noFile;
}

bool AudioFileLoader::isSlotOccupied(int slotIndex) const
{
    jassert(slotIndex >= 0 && slotIndex < NUM_SLOTS);
    return fileSlots[slotIndex].exists();
}

const juce::File& AudioFileLoader::getFileAtSlot(int slotIndex) const
{
    jassert(slotIndex >= 0 && slotIndex < NUM_SLOTS);
    return fileSlots[slotIndex];
}

void AudioFileLoader::clearSlot(int slotIndex)
{
    jassert(slotIndex >= 0 && slotIndex < NUM_SLOTS);
    fileSlots[slotIndex] = juce::File();
}

void AudioFileLoader::clearAllSlots()
{
    for (auto& slot : fileSlots)
        slot = juce::File();
    currentSlotIndex = 0;
}

int AudioFileLoader::getNextAvailableSlot() const
{
    for (int i = 0; i < NUM_SLOTS; ++i)
    {
        if (!fileSlots[i].exists())
            return i;
    }
    return 0; // If all slots are full, return 0
}
