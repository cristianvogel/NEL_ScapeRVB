// SlotManager.h
#ifndef SLOTMANAGER_H
#define SLOTMANAGER_H

// Standard Library Headers
#include <string>

// Third-Party Library Headers
#include <juce_audio_basics/juce_audio_basics.h>
#include "elem/Value.h"

// Local Headers
#include "SlotName.h"
#include "PluginProcessor.h"

// Forward declaration of EffectsPluginProcessor
class EffectsPluginProcessor;

class SlotManager
{
public:
	SlotManager(EffectsPluginProcessor &processor);

	void wrapPeaksForView(elem::js::Object &containerForWrappedPeaks);
	void wrapStateForView(elem::js::Object &containerForWrappedState);
	void wrapFileNamesForView(elem::js::Object &containerForWrappedFileNames);
	void assignVFSpathToSlot(const SlotName &targetSlot, const std::string &vfsPath);
	void assignPeaksToSlot(const SlotName &targetSlot, juce::AudioBuffer<float> &buffer, bool defaultSlot = false);	
	void assignFileAssetToSlot(const SlotName &targetSlot, const juce::File &file);
	void assignFilenameToSlot(const SlotName &targetSlot, const juce::File &file);
	std::vector<elem::js::Object> getVFSpathHistoryForSlot(const SlotName &slotName);
	Asset getAssetFrom(const SlotName &slotName);
	SlotName findFirstSlotWithoutUserStereoFile() const;
	void resetUserSlots();
	int getIndexForSlot(const SlotName &slotName) ;
	

private:
	friend class ViewClientInstance;
	EffectsPluginProcessor &processor;
	std::size_t lastStateHash = 0;
	int lastPeaksHash = 0;
};

#endif // SLOTMANAGER_H
