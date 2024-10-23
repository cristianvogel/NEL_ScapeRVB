import manifest from "../public/manifest.json";
import { DefaultIRSlotName, IRMetaData } from "../types";

export const CURRENT_UI_VERSION: string = "scape_space_rc0.8.3";

export const HOST_PARAMS = manifest.parameters;

export const REGISTERED_PARAM_NAMES: Array<string> = HOST_PARAMS.map(
  (p) => p.paramId
);

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
