#include "Slot.h"

Slot::Slot() noexcept { 
    resetSlotIndex(); 
    }
int Slot::getSlotIndex()  { return Slot::currentUserSlot; }

int Slot::incrementSlotIndex() { return Slot::currentUserSlot++; }

int Slot::resetSlotIndex() {
    Slot::currentUserSlot = 0;
    return 0;
}
