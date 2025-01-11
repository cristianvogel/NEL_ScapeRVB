#include "AudioFileLoader.h"

#include "PluginProcessor.h"


AudioFileLoader::AudioFileLoader(EffectsPluginProcessor& p)
    : chooser("Select four stereo audio files", juce::File::getSpecialLocation(juce::File::userHomeDirectory),
              "*.wav;*.aiff"),
   processor(p)
{
    clearAllSlots();
}

AudioFileLoader::~AudioFileLoader()
{
    cancelPendingUpdate();
}

void AudioFileLoader::loadNewFile( )
{

    chooser.launchAsync(
        juce::FileBrowserComponent::openMode | 
        juce::FileBrowserComponent::canSelectFiles,
        [this](const juce::FileChooser& fc)
        {
            if (fc.getResults().size() > 0)
            {
                auto file = fc.getResult();
                fileSlots[currentSlotIndex] = file;
                currentSlotIndex = (currentSlotIndex + 1) % NUM_SLOTS;
                triggerAsyncUpdate();
            }
        });
}

const juce::File& AudioFileLoader::getFileAtCurrentSlot()
{
    if (fileSlots[currentSlotIndex].exists())
    {
        return fileSlots[currentSlotIndex];
    };
    static const juce::File emptyFile; // A static "empty" juce::File instance
    return emptyFile;
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

void AudioFileLoader::handleAsyncUpdate()
{
    // This runs on the message thread after async load completes
    // Add any post-load processing here
    juce::StringPairArray chooser_result {} ;
    const auto currentFile = getFileAtSlot( currentSlotIndex );
    if ( currentFile.exists() )
    {
        chooser_result = processor.validateUserUpload( chooser_result, currentFile );
    }
    processor.uploadedFileData = chooser_result;

    // The data should have been assigned in bound string using semicolon delimiter
    // to separate data element for example (ignore the spaces here) :
    //     outerKey          status (via ScapeError enum class)       filepath
    //          ⬇︎︎︎             ⬇︎︎︎                                        ⬇︎︎︎
    // <    "LIGHT",        "File not found;                            path/to/file.wav"
    //    const auto status = data.upToFirstOccurrenceOf( processor.delimiter, false, false);
    //    juce::String file_path = data.fromFirstOccurrenceOf( processor.delimiter, false, false);
    juce::String file_path = getFileAtCurrentSlot().getFullPathName() ;
    const auto& targetSlot = DEFAULT_SLOT_NAMES[ currentSlotIndex ];
    // Validity conditional
    if (juce::File file(file_path); file.existsAsFile() )
    {
        processor.slotManager->assignFileHookToSlot( fromString(targetSlot), file);
        processor.slotManager->assignFilenameToSlot( fromString(targetSlot), file);
        processor.userFilesWereImported.store(true);
    }
    else
    {
        processor.slotManager->assignDefaultFilenameToSlot( fromString(targetSlot));
        processor.slotManager->wrapDefaultPeaksForSlot( fromString(targetSlot));
    }
    // finally, update state with valid results of file import
    processor.updateStateWithAssetsData();
    processor.inspectVFS();
}