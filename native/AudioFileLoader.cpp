#include "AudioFileLoader.h"

#include <sys/proc.h>
#include <future>
#include "PluginProcessor.h"


AudioFileLoader::AudioFileLoader(Processor& p)
    : chooser(nullptr), selectedFile(),
      processor(p)
{
}

AudioFileLoader::~AudioFileLoader()
{
    cancelPendingUpdate();
}


void AudioFileLoader::loadNewFile()
{
    juce::MessageManager::callAsync([this]
    {
        chooser = std::make_unique<juce::FileChooser>(
            "Select a stereo audio file",
            juce::File::getSpecialLocation(juce::File::userHomeDirectory),
            "*.wav;*.aiff");

        chooser->launchAsync(
            juce::FileBrowserComponent::openMode |
            juce::FileBrowserComponent::canSelectFiles,
            [this](const juce::FileChooser& fc)
            {
                const auto file = fc.getResult();
                if (file.exists())
                {
                    std::cout << "AudioFileLoader::loadNewFile: File selected: "
                        << file.getFullPathName().toStdString() << std::endl;
                    selectedFile = file;
                    triggerAsyncUpdate();
                }
                else
                {
                    std::cout << "AudioFileLoader::loadNewFile: No file was selected." << std::endl;
                    selectedFile = juce::File();
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
    const auto& file_path = selectedFile.getFullPathName();
    const auto& targetSlot = DEFAULT_SLOT_NAMES[currentSlotIndex];
    // Validity check and then process and update the asset
    // into the state and assetMap

    if (juce::File file(file_path); file.existsAsFile())
    {
        const auto& slotName = slotname_from_string(targetSlot);
        if (processor.processUserResponseFile(file, slotName))
        {
            processor.slotManager->switchSlotsTo(true, false);
            currentSlotIndex = (getIndexForSlot(slotName) + 1) % NUM_SLOTS;
        }

    }
    else
    {
        // Switch slots back to Factory
        processor.slotManager->switchSlotsTo(false, false);
    }
    // finally, update front end with asset paths for convolver
    processor.inspectVFS();
}
