import { ElemNode } from "@elemaudio/core";
import { Vec } from "@thi.ng/vectors";

////////// STATE
interface SharedSettings {
  sampleRate: number;
  dryInputs: Array<ElemNode>;
  dryMix: number;
  position: number;
}

interface SrvbSettings {
  structure: number;
  size: number;
  diffuse: number;
  tone: number;
  level: number;
  structureMax: number;
  bypass: number;
}

interface ScapeSettings {
  reverse: number;
  level: number;
  ir: number;
  vectorData: Vec;
  bypass: number;
}

interface ProcessorSettings {
  state: any, // todo: define final host state interface
  shared: SharedSettings;
  srvb: SrvbSettings;
  scape: ScapeSettings;
}

type bypassStates = '0' | '1';
type bypassEvents = 'toggle';

type ToggleCablesVarname =
  'host_srvbBypass' |
  'host_scapeBypass' |
  'host_scapeReverse';
  
type ToggleParamID =
  'srvbBypass' |
  'scapeBypass' |
  'scapeReverse' ;

type HostParams = {
  paramId: string;
  name: string;
  min: number;
  max: number;
  defaultValue: number;
};

type StructureData = {
  consts: Array<ElemNode>;
  max: number;
};

type IRData = {
  name: string;
  index: number;
  att: number;
};
////////// DSP
interface SRVBProps {
  size: ElemNode;
  decay: ElemNode;
  mix: ElemNode;
  tone: ElemNode;
  position: ElemNode; // rounded integer behaviour
  structureMax: ElemNode; // max value of the series
  // non-signal data
  sampleRate: number;
  structure: number;
  key: string;
  srvbBypass: number;
  IRs: Array<IRData>;
  dryMix: ElemNode;
}

type DiffuseProps = {
  seededNormMinMax?: number;
  structure: Array<ElemNode>;
  structureMax: ElemNode;
  maxLengthSamp: number;
};
type FDNProps = {
  name: string;
  sampleRate: number;
  structureArray: Array<ElemNode>;
  structureMax: ElemNode;
  tone: ElemNode;
  size: ElemNode;
  decay: ElemNode;
  modDepth?: ElemNode;
};

interface ScapeConvolver {
  path: string;
  index?: number;
  process: number;
  key: string;
  channel: number;
  attenuationDb: number;
  _in: ElemNode;
}
