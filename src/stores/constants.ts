import manifest from "../public/manifest.json";

export const HOST_PARAMS = manifest.parameters;

export const REGISTERED_PARAM_NAMES: Array<string> = HOST_PARAMS.map(
  (p) => p.paramId
);

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
