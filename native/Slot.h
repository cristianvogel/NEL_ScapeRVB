#pragma once

class Slot {
public:
Slot() noexcept;
    int getSlotIndex();
    int incrementSlotIndex();
    int resetSlotIndex();
private:
    int currentUserSlot; 
};
