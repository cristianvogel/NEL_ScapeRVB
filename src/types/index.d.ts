import { ElemNode } from "@elemaudio/core";
import { Vec } from "@thi.ng/vectors";

////////// ELEM

interface RefProps {
  value?: number;
  key?: string;
  path?: string;
  process?: number;
  scale?: number;
  blockSizes?: number[];
  offset?: number;
}


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

type JSONString = string;

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
  structureMax?: number;
  bypass: 1 | 0;
  position: number;
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
  nodes: Array<ElemNode>;
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
  sampleRate: number;
  structure: number;
  key: string;
  srvbBypass: number;
}

type Convolvers = {
  'LIGHT_0': ElemNode;
  'LIGHT_1': ElemNode;
  'SURFACE_0': ElemNode;
  'SURFACE_1': ElemNode;
  'TEMPLE_0': ElemNode;
  'TEMPLE_1': ElemNode;
  'DEEPNESS_0': ElemNode;
  'DEEPNESS_1': ElemNode;
}


interface ScapeProps {
  srvbBypass: ElemNode;
  scapeLevel: ElemNode;
  reverse: ElemNode;
  vectorData: Vec;
  sampleRate: number;
  offset: number;
  scapePosition: ElemNode;
  scapeMode: ElemNode;
  v1: ElemNode;
  v2: ElemNode;
  v3: ElemNode;
  v4: ElemNode;
  IRs: Map<SlotName, IRMetaData>
  key: string;
  scapeBypass: number;
}

interface SharedProps {
  sampleRate: number;
  dryInputs: ElemNode[];
  dryMix: ElemNode
}

type ScapePropsWithConvolvers = ScapeProps & Convolvers;

type DiffuseProps = {
  seededNormMinMax?: number;
  structure: Array<ElemNode>;
  structureMax: ElemNode;
  maxLengthSamp: number;
};
type FDNProps = {
  name: string;
  sampleRate?: number;
  structureIndex: number;
  structureArray: Array<ElemNode>;
  structureMax?: ElemNode;
  tone: ElemNode;
  size: ElemNode;
  decay: ElemNode;
  position: ElemNode;
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
