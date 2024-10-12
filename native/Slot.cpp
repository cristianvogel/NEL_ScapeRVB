#include "Slot.h"

Slot::Slot() noexcept { 
    resetSlotIndex(); 
    }
int Slot::getSlotIndex()  { return currentUserSlot; }

int Slot::incrementSlotIndex() { return currentUserSlot++; }

int Slot::resetSlotIndex() {
    currentUserSlot = 0;
    return 0;
}
