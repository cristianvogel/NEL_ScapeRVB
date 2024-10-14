
#include <string>
#include <stdexcept>

enum class SlotName
{
    LIGHT,
    SURFACE,
    TEMPLE,
    DEEPNESS
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
        throw std::invalid_argument("Invalid SlotName");
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
    throw std::invalid_argument("Invalid SlotName string");
}

SlotName nextSlot(SlotName slot)
{
    int next = static_cast<int>(slot) + 1;
    if (next > static_cast<int>(SlotName::DEEPNESS))
    {
        next = static_cast<int>(SlotName::LIGHT); // Wrap around to the first slot
    }
    return static_cast<SlotName>(next);
}