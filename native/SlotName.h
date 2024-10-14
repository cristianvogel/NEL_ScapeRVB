#ifndef SLOTNAME_H
#define SLOTNAME_H

#include <string>
#include <stdexcept>

enum class SlotName {
    LIGHT = 0,
    SURFACE = 1,
    TEMPLE = 2,
    DEEPNESS = 3
};

std::string toString(SlotName slot);

SlotName fromString(const std::string& str);

// Function to get the next SlotName with wrap around
SlotName nextSlot(SlotName slot);

#endif // SLOTNAME_H