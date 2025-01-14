/**
 * @file SlotName.h
 * @brief Defines the SlotName enumeration and associated utility functions.
 *
 * This header file contains the definition of the SlotName enumeration, which
 * represents different slot types, and provides utility functions for converting
 * between SlotName and std::string, getting the index of a SlotName, and getting
 * the next SlotName with wrap around.
 *
 * @enum SlotName
 * @brief Enumeration for different slot types.
 * 
 * @var SlotName::LIGHT
 * Represents the LIGHT slot. Slot 1
 * 
 * @var SlotName::SURFACE
 * Represents the SURFACE slot. Slot 2
 * 
 * @var SlotName::TEMPLE
 * Represents the TEMPLE slot. Slot 3
 * 
 * @var SlotName::DEEPNESS
 * Represents the DEEPNESS slot. Slot 4
 * 
 * @fn std::string toString(SlotName slot)
 * @brief Converts a SlotName to its corresponding string representation.
 * @param slot The SlotName to convert.
 * @return The string representation of the SlotName.
 * 
 * @fn int getIndexForSlot(SlotName slot)
 * @brief Gets the index of a SlotName.
 * @param slot The SlotName to get the index for.
 * @return The index of the SlotName.
 * 
 * @fn SlotName fromString(const std::string& str)
 * @brief Converts a string to its corresponding SlotName.
 * @param str The string to convert.
 * @return The SlotName corresponding to the string.
 * @throws std::invalid_argument if the string does not correspond to any SlotName.
 * 
 * @fn SlotName nextSlot(SlotName slot)
 * @brief Gets the next SlotName with wrap around.
 * @param slot The current SlotName.
 * @return The next SlotName, wrapping around to the first SlotName if necessary.
 */
#ifndef SLOTNAME_H
#define SLOTNAME_H

#include <string>
#include <stdexcept>

enum class SlotName
{
    LIGHT = 0,
    SURFACE = 1,
    TEMPLE = 2,
    DEEPNESS = 3,
    LAST
};

const std::array<std::string, 4> DEFAULT_SLOT_NAMES = {"LIGHT",  "SURFACE", "TEMPLE", "DEEPNESS" };

std::string toString(SlotName slot);
int getIndexForSlot(SlotName slot);
SlotName fromString(const std::string& str);
SlotName fromIndex(int idx);


// Function to get the next SlotName with wrap around
void nextSlot(SlotName& slot, bool wrap = true);
// Explicitly no wrapping
void nextSlotNoWrap(SlotName& slot);

#endif // SLOTNAME_H
