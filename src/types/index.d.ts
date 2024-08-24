import { ElemNode } from "@elemaudio/core";

////////// STATE
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
  srvbBypass: boolean;
  IRs: Array<IRData>;
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
