import { ElemNode } from "@elemaudio/core";
import { Vec } from "@thi.ng/vectors";

////////// IR


type DefaultIRSlotName = 'LIGHT' | 'SURFACE' | 'TEMPLE' | 'DEEPNESS';
type UserVFSStem = `USER${number}`;
type VFSPathStem = DefaultIRSlotName | UserVFSStem;
type DefaultVFSPathWithChannel = `${DefaultIRSlotName}_${number}`;
type UserVFSPathWithChannel = `${UserVFSStem}_${number}` | undefined;

type IRMetaData = {
  pathStem: VFSPathStem;
  slotIndex: number;
  att: number;
};

////////// STATE
interface SharedSettings {
  sampleRate: number;
  dryInputs: Array<ElemNode>;
  dryMix: number;
}

interface SrvbSettings {
  structure: number;
  size: number;
  diffuse: number;
  tone: number;
  level: number;
  structureMax: number;
  bypass: 1 | 0;
  position: number;
  positionAsNumber: number;
}

interface ScapeSettings {
  reverse: 1 | 0;
  level: number;
  ir: number;
  vectorData: Vec;
  bypass: 1 | 0;
  mode: 1 | 0;
  offset: number;
  userBank: number;
  position: number;
  hasUserSlots: boolean;
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
  'scapeReverse';

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


////////// DSP
interface SRVBProps {
  size: ElemNode;
  decay: ElemNode;
  mix: ElemNode;   // don't try to change this to srvbLevel as this will break the UI
  tone: ElemNode;
  position: ElemNode; // rounded integer behaviour
  structureMax: ElemNode; // max value of the series
  dryMix: ElemNode;
  // non-signal data
  positionAsNumber: number;
  sampleRate: number;
  structure: number;
  key: string;
  srvbBypass: number;
}

interface ScapeProps {
  ir: ElemNode;
  level: ElemNode;
  reverse: ElemNode;
  vectorData: Vec;
  // non-signal data
  sampleRate: number;
  key: string;
  scapeBypass: number;
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
