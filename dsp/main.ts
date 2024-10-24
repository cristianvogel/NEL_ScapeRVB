import { Renderer, el, createNode } from "@elemaudio/core";
import { argMax } from "@thi.ng/arrays";
import { RefMap } from "./RefMap";
import SRVB from "./srvb-er";
import { clamp, EPS, easeIn2 } from "@thi.ng/math";
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import type { Ramp } from "@thi.ng/ramp";
import { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import SCAPE from "./scape";
import { Vec } from "@thi.ng/vectors";
import {
  DefaultIRSlotName as SlotName,
  IRMetaData as SlotData,
  ProcessorSettings,
  ScapeProps,
  ScapeSettings,
  SRVBProps,
  StructureData,
  VFSPathStem,
  UserVFSStem,
  SrvbSettings,
  SharedSettings,
} from "../src/types";
import { DEFAULT_IR_SLOTNAMES } from "../src/stores/constants";
import { castSequencesToRefs, buildStructures, updateStructureConstants } from "./OEIS-Structures";
import { parseAndUpdateIRRefs } from "./parseAndUpdateIRRefs";
import { remapPosition } from "../src/utils/utils";



// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});


// Next, a RefMap for coordinating our refs
export let refs: RefMap = new RefMap(core);

// Register our custom nodes
let convolver = (_props, ...childs) => createNode("convolver", _props, childs);

// Set up the default IRs
export let vfsPathHistory = new Array<string>();

const blockSizes = [512, 4096];
// MUST MATCH FILE NAMES IN THE PUBLIC IR FOLDER
export const Slots: Map<SlotName, SlotData> = new Map([
  ["LIGHT", { pathStem: "LIGHT", slotIndex: 0, att: 1.0 }],
  ["SURFACE", { pathStem: "SURFACE", slotIndex: 1, att: 0.96 }],
  ["TEMPLE", { pathStem: "TEMPLE", slotIndex: 2, att: 0.9 }],
  ["DEEPNESS", { pathStem: "DEEPNESS", slotIndex: 3, att: 0.675 }],
]);

// gets populated when the user loads IRs 
export const User_IR_Map: Map<SlotName, SlotData> = new Map();

// Utilise a factory pattern to generate the ref updaters
// for the Elem ref engine
function IR_SlotRefFactory(
  scape: ScapeSettings,
  refs: RefMap,
  slotName: SlotName,
  slotIndex: number,
  attenuation: number
) {
  if (!scape || !refs) return;

  const refConstructor = {
    [`${slotName}_0`]: refs.getOrCreate(
      `${slotName}_0`,
      "convolver",
      {
        path: `${slotName}_0`,
        process: scape.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
        offset: scape.offset
      },
      [el.tapIn({ name: `srvbOut:0` })]
    ),
    [`${slotName}_1`]: refs.getOrCreate(
      `${slotName}_1`,
      "convolver",
      {
        path: `${slotName}_1`,
        process: scape.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
        offset: scape.offset
      },
      [el.tapIn({ name: `srvbOut:1` })]
    ),
  };


  return refConstructor
}

function registerConvolverRefs(scape: ScapeSettings, refs: RefMap) {
  let convolvers = {};
  Slots.forEach((slotData, slotName) => {
    convolvers = {
      ...convolvers,
      ...IR_SlotRefFactory(scape, refs, slotName, slotData.slotIndex, slotData.att),
    };
  });
  return convolvers;
}

// create the vector interpolation ramp, used to crossfade between 4 IRs
function createHermiteVecInterp(): Ramp<Vec> {
  return ramp(
    // use a vector interpolation preset with the VEC3 API
    HERMITE_V(VEC3),
    // keyframes used for crossfading between 4 IRs
    [
      [0.0, [1.0, 0, 0, 0]], // a
      [0.45, [0, 1.0, 0, 0]], // b
      [0.65, [0, 0, 1.0, 0]], // c
      [1.0, [0, 0, 0, 1.0]], // d
    ]
  );
}



// the Hermite vector interpolation ramp
const HERMITE: Ramp<Vec> = createHermiteVecInterp();
//--------------- /
// DEFAULT STATE
// These  need to have populated some data to start with

const defaultStructure = OEIS_SEQUENCES[0];
const defaultMax = argMax(defaultStructure, 17);
let structureData: StructureData = {
  consts: castSequencesToRefs(defaultStructure, defaultMax, refs),
  max: defaultMax,
};

// the conditions that will trigger a full re-render of the node graph
function shouldRender(_mem, _curr) {
  const result =
    _mem === null ||
    _curr === null ||
    refs._map.size === 0 ||
    !srvbProps || !scapeProps ||
    _curr.sampleRate !== _mem?.sampleRate ||
    Math.round(_curr.scapeBypass) !== _mem?.scapeBypass ||
    Math.round(_curr.srvbBypass) !== _mem?.srvbBypass 
  return result;
}
//
// Here we will receive updated state from the native side
// All js in dsp/main is running natively in the CHOC QuickJS context
// There is also a globalThis.__receiveStateChange__ listener in
// NativeMessage.svelte easier to debug and see the state changes
//////////////////////////////
/// ALTERED STATES //////////
let memoized: null | any = null;
let srvbProps = {};
let scapeProps = {};

globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
  // first parse the state
  const { state, srvb, shared, scape } = parseNewState(stateReceivedFromNative) as ProcessorSettings;

  refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);
  // prettier-ignore
  srvbProps =
  {
    key: "srvb",
    srvbBypass: srvb.bypass,
    dryMix: shared.dryMix,
    sampleRate: shared.sampleRate,
    size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
    decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
    mix: refs.getOrCreate("mix", "const", { value: srvb.level }, []),
    tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
    position: refs.getOrCreate("position", "const", { value: srvb.position }, []),
    structure: srvb.structure,
    structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, [])
  };
  // prettier-ignore
  scapeProps =
  {
    IRs: Slots,
    sampleRate: shared.sampleRate,
    scapeBypass: scape.bypass || 0,
    vectorData: scape.vectorData,
    offset: scape.offset,
    // RefNodes from now on
    srvbBypass: refs.getOrCreate("srvbBypass", "const", { value: srvb.bypass }, []),
    scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: scape.level }, []),
    scapePosition: refs.getOrCreate("scapePosition", "const", { value: scape.position }, []),
    scapeMode: refs.getOrCreate("scapeMode", "const", { value: scape.mode }, []),
    // the Hermite vector interpolation values as signals
    v1: refs.getOrCreate("v1", "const", { value: scape.vectorData[0] }, []),
    v2: refs.getOrCreate("v2", "const", { value: scape.vectorData[1] }, []),
    v3: refs.getOrCreate("v3", "const", { value: scape.vectorData[2] }, []),
    v4: refs.getOrCreate("v4", "const", { value: scape.vectorData[3] }, []),
    ...registerConvolverRefs(scape, refs)
  };

  function getSRVBProps() {
    return srvbProps as SRVBProps;
  }

  function getScapeProps() {
    return scapeProps as ScapeProps;
  }


  /**
   * ELEMENTARY
   * GRAPH
   * RENDERER
   */
  if (!memoized || shouldRender(memoized, state)) {

    console.log('Render called');
    // first, build structure const refs
    structureData = buildStructures(refs, srvb.structure) || structureData;

    if (srvbProps && scapeProps) {
      const graph = core.render(
        ...SCAPE(
          getScapeProps(),
          shared.dryInputs,
          ...SRVB(
            getSRVBProps(), shared.dryInputs, ...structureData.consts
          )
        )
        .map((node, i) =>
          el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node)
        )
      )
    }
  } else {
    // then the rest of the refs for SRVB
    if (!srvb.bypass) {

      refs.update("size", { value: srvb.size });
      refs.update("diffuse", { value: srvb.diffuse });
      refs.update("mix", { value: srvb.level });
      refs.update("tone", { value: srvb.tone });
      refs.update("position", { value: srvb.position });
      refs.update("structureMax", { value: srvb.structureMax });
      if (srvb.structure !== memoized.structure) {
        // update the reflection structure constants
        updateStructureConstants(refs, srvb);
      }
    }

    if (!scape.bypass) {
      // and the scape refs
      refs.update("scapeLevel", { value: scape.level });
      refs.update("v1", { value: scape.vectorData[0] });
      refs.update("v2", { value: scape.vectorData[1] });
      refs.update("v3", { value: scape.vectorData[2] });
      refs.update("v4", { value: scape.vectorData[3] });
      refs.update("scapePosition", { value: scape.position });
      refs.update("scapeMode", { value: scape.mode });
      // update the convolvers, switch to user IRs if they exist
      parseAndUpdateIRRefs(scape, shared);
    }

    refs.update("dryMix", { value: shared.dryMix });
    refs.update("srvbBypass", { value: srvb.bypass }); // needed to bypass empty input when srvb is bypassed

  }

  // memoisation of nodes and non-node state
  memoized = {
    ...state,
    structure: srvb.structure,
    scapeLength: scape.ir,
    structureMax: srvb.structureMax,
    reverse: scape.reverse,
    vectorData: scape.vectorData,
    scapeBypass: scape.bypass,
    srvbBypass: srvb.bypass,
    scapeMode: scape.mode,
    scapeOffset: scape.offset,
    userBank: scape.userBank,
  };

  function parseNewState(stateReceivedFromNative) {
    const state = JSON.parse(stateReceivedFromNative);
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared: SharedSettings = {
      sampleRate: state.sampleRate,
      dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
      dryMix: state.dryMix,

    };
    const srvb: SrvbSettings = {
      structure: Math.round((state.structure || 0) * NUM_SEQUENCES),
      size: state.size,
      diffuse: state.diffuse,
      tone: clamp(state.tone * 2 - 1, -0.99, 1),
      level: easeIn2(state.mix),  
      // DEPRECATING STRUCTURE MAX
      // doing the normalisation inside SRVB
      structureMax: Math.round(state.structureMax) || 137, // handle the case where the max was not computed
      bypass: (Math.round(state.srvbBypass) || 0) as 1 | 0,
      position: remapPosition(state.position)
    };
    const scape: ScapeSettings = {
      reverse: Math.round(state.scapeReverse) as 1 | 0,
      level: state.scapeLevel * 1.5,
      ir: state.scapeLength,
      vectorData: HERMITE.at(state.scapeLength),
      bypass: (Math.round(state.scapeBypass) || 0) as 1 | 0,
      mode: (Math.round(state.scapeMode) || 0) as 1 | 0,
      offset: state.scapeOffset || 0,
      userBank: state.userBank,
      position: state.position
    };
    return { state, srvb, shared, scape };
  }

}; // end of receiveStateChange

////////// Handle New IRs from the VFS /////////////////////////////////
globalThis.__receiveVFSKeys__ = function (vfsCurrent: string) {
  const vfsKeysArray = JSON.parse(vfsCurrent);
  const userVFSKeys: Array<VFSPathStem> = vfsKeysArray.filter((key) => key.includes("USER") && !key.includes("REVERSE"));
  // go through user IRs .... if USER0 , update the pathStem of LIGHT to USER0 and so on
  // we will just use the first 4 user IRs and assign the paths of the Default slotnames 
  // in the Elem refmap

  const userVFSKeysCount = userVFSKeys.length;

  if (userVFSKeysCount > 0) {
    for (let i = 0; i < userVFSKeysCount; i++) {
      const slotIndex: number = (Math.floor(i / 2));
      // Why? Because there are 2 stereo files per slot ( 0 and 1 each has forwards on left and reverse on right )
      // So the schema is as below,  the stem and slot, then stem and slot + channel eg: USER0_0, USER0_1, USER1_0, USER1_1 etc
      // the reverse keys are referenced inline by the convolution node updaters
      const userPathStem: VFSPathStem = `USER${slotIndex % 4}` as UserVFSStem;
      // therefore User_IR_Map the map should contain the pathStem and the index of the slot only
      // USER0, USER1, USER2, USER3
      User_IR_Map.set(DEFAULT_IR_SLOTNAMES[slotIndex % 4], { pathStem: userPathStem, slotIndex: slotIndex % 4, att: 0.95 });
    }
  }

  console.log('VFS->', vfsKeysArray);
}


/////////////////////////////////////////////////////////////////

// NOTE: This is highly experimental and should not yet be relied on
// as a consistent feature.
globalThis.__receiveHydrationData__ = (data) => {
  const payload = JSON.parse(data);
  //@ts-ignore
  const nodeMap = core._delegate.nodeMap;

  for (let [k, v] of Object.entries(payload)) {
    nodeMap.set(parseInt(k, 16), {
      symbol: "__ELEM_NODE__",
      kind: "__HYDRATED__",
      hash: parseInt(k, 16),
      props: v,
      generation: {
        current: 0,
      },
    });
  }
};


