import manifest from "../public/manifest.json";
import { DefaultIRSlotName, IRMetaData } from "../types";


export const BUILD_VERSION: string = "v0.9.61";

export const CURRENT_UI_VERSION: string = `scape_space_${BUILD_VERSION}`;

export const HOST_PARAMS = manifest.parameters;

export const IR_Slots: Array<IRMetaData> = [
  { pathStem: "LIGHT", slotIndex: 0, att: 0.65 },
  { pathStem: "SURFACE", slotIndex: 1, att: 0.475 },
  { pathStem: "TEMPLE", slotIndex: 2, att: 0.475 },
  { pathStem: "DEEPNESS", slotIndex: 3, att: 0.25 },
];

export const DEFAULT_IR_SLOTNAMES: Array<DefaultIRSlotName> = IR_Slots.map((slot) => slot.pathStem as DefaultIRSlotName);

export const REVERSE_BUFFER_PREFIX: string = manifest["REVERSE-BUFFER-PREFIX"];

// get all the default values for the parameters
// except for the bypasses which are handled separately
export const PARAM_DEFAULTS: Record<string, number> = Object.fromEntries(
  HOST_PARAMS.filter(
    (p) =>
      p.paramId !== "srvbBypass" &&
      p.paramId !== "scapeBypass"
  ).map((p) => [p.paramId, p.defaultValue])
);

export const segmentDegrees = [
  45,    // Standard 45° spacing
  90,    // Right angle
  180,   // Opposite
  270,   // Left side
  60,    // Golden ratio based (phi * 360/16)
  -60,   // Negative for width
  137.5, // Golden angle
  -137.5,// Inverse golden
  120,   // Regular hexagon
  240,   // Hexagon opposite
  30,    // Fine detail
  210,   // Wide spread
  75,    // Between 45-90
  -75,   // Symmetric negative
  160,   // Near-opposite
  -160   // Completing the circle
];