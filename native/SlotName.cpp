
#include <string>
#include <stdexcept>
#include <sys/stat.h>

enum class SlotName
{
    LIGHT,
    SURFACE,
    TEMPLE,
    DEEPNESS,
    LAST
};

std::string toString(SlotName slot)
{
    switch (slot)
    {
    case SlotName::LIGHT:
        return "LIGHT";
    case SlotName::SURFACE:
        return "SURFACE";
    case SlotName::TEMPLE:
        return "TEMPLE";
    case SlotName::DEEPNESS:
        return "DEEPNESS";
    default:
        return "LAST";
    }
}

int getIndexForSlot(SlotName slot) { return static_cast<int>(slot); }

SlotName fromString(const std::string &str)
{
    if (str == "LIGHT")
        return SlotName::LIGHT;
    if (str == "SURFACE")
        return SlotName::SURFACE;
    if (str == "TEMPLE")
        return SlotName::TEMPLE;
    if (str == "DEEPNESS")
        return SlotName::DEEPNESS;
    if (str == "LAST")
        return SlotName::LAST;
    throw std::invalid_argument("Invalid SlotName string");
}
SlotName fromIndex( int idx)
{
    switch(idx)
    {
    case 0: return SlotName::LIGHT;
    case 1: return SlotName::SURFACE;
    case 2: return SlotName::TEMPLE;
    case 3: return SlotName::DEEPNESS;
    default: return SlotName::LAST;
    }
}

void nextSlot(SlotName& slot, const bool wrap = true)
{
    int next = static_cast<int>(slot) + 1;
    constexpr int last = static_cast<int>(SlotName::LAST);
    if (next >= last)
    {
        if (wrap) next = 0;
        else next = last;
    }
    slot = static_cast<SlotName>(next);
}

void nextSlotNoWrap(SlotName& slot)
{
    constexpr int last = static_cast<int>(SlotName::LAST);
    int next = std::min( last, static_cast<int>(slot) + 1);
    slot = static_cast<SlotName>(next);
}