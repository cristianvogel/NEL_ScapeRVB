#pragma once

class Slot {
public:
    int getSlotIndex() const {
        return currentUserSlot;
    }

    int incrementSlotIndex() {
        return currentUserSlot++;
    }

    int resetSlotIndex() {
        currentUserSlot = 0;
        return 0;
    }

private:
    int currentUserSlot = 0; // Initialize the slot index
};