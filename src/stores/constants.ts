import manifest from '../../public/manifest.json';

export const HOST_PARAMS = manifest.parameters;

export const REGISTERED_PARAM_NAMES: Array<string> = HOST_PARAMS.map((p) => p.paramId);