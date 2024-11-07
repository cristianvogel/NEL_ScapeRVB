import {createNode, el, ElemNode, Renderer} from "@elemaudio/core";
import {argMax, rotate} from "@thi.ng/arrays";
import {RefMap} from "./RefMap";
import SRVB, {NUM_SEQUENCES, OEIS_SEQUENCES} from "./srvb-er";
import {clamp, easeIn2} from "@thi.ng/math";
import type {Ramp} from "@thi.ng/ramp";
import {HERMITE_V, ramp, VEC3} from "@thi.ng/ramp";
import SCAPE from "./scape";
import {Vec} from "@thi.ng/vectors";
import {
  DefaultIRSlotName as SlotName,
  IRMetaData as SlotData,
  JSONString,
  ProcessorSettings,
  ScapeProps,
  ScapeSettings,
  SharedSettings,
  SRVBProps,
  SrvbSettings,
  StructureData,
} from "../src/types";
import {buildStructures, castSequencesToRefs, updateStructureConstants} from "./OEIS-Structures";
import {parseAndUpdateIRRefs} from "./parseAndUpdateIRRefs";
import {reflectAround} from "../src/utils/utils";

let currentVFSKeys: Array<string> = [];

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch: any) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});


// Next, a RefMap for coordinating our refs
export let refs: RefMap = new RefMap(core);

// Register our custom Convolver node with Elementary runtime.
// TS will show it is not being used, but it is being used in the SCAPE
// so DO NOT DELETE THIS
let convolver = (_props: any, ...childs: ElemNode[]) => createNode("convolver", _props, childs);

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
// export const User_IR_Map: Map<SlotName, SlotData> = new Map();

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

  return {
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
        [el.tapIn({name: `srvbOut:0`})]
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
        [el.tapIn({name: `srvbOut:1`})]
    ),
  }
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
  nodes: castSequencesToRefs(defaultStructure, defaultMax, refs),
  max: defaultMax,
};

// the conditions that will trigger a full re-render of the node graph
function shouldRender(previous: any, current: any) {
  return previous === null ||
      current === null ||
      refs.map.size === 0 ||
      !srvbProps || !scapeProps ||
      current.sampleRate !== previous?.sampleRate ||
      Math.round(current.scapeBypass) !== previous?.scapeBypass ||
      Math.round(current.srvbBypass) !== previous?.srvbBypass ||
      Math.round(current.structure) !== previous?.structure
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

// @ts-ignore
globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
  // first parse the state
  const { state, srvb, shared, scape } = parseNewState(stateReceivedFromNative) as ProcessorSettings;

  refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);

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
    // first, build structure const refs if needed
    if ( srvb.structure !== memoized?.structure) {
      structureData = buildStructures(refs, srvb.structure) || structureData;
      // express the position as a rotation of the structure
      structureData.nodes = rotate(  structureData.nodes, srvb.position * -16 )
    } 

    // Here is the main graph call
    if (srvbProps && scapeProps) {
      const graph = core.render(
        ...SCAPE(
          getScapeProps(),
          shared.dryInputs,
          ...SRVB(
            getSRVBProps(), shared.dryInputs, ...structureData.nodes
          )
        )
        .map((node, i) => {
              return el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node);
            }
        )
      )
      console.log('Graph updated:' , Object.entries(graph));
    }
  } else {
    // then the rest of the refs for SRVB
    if (!srvb.bypass) {

      refs.update("size", {value: srvb.size});
      refs.update("diffuse", {value: srvb.diffuse});
      refs.update("mix", {value: srvb.level});
      refs.update("tone", {value: srvb.tone});
      refs.update("position", {value: srvb.position});
      refs.update("structureMax", {value: srvb.structureMax});
      if (srvb.structure !== memoized.structure) {
        // update the reflection structure constants
        updateStructureConstants(refs, srvb);
      }
    }

    if (!scape.bypass) {
      // and the scape refs
      refs.update("scapeLevel", {value: scape.level});
      refs.update("v1", {value: scape.vectorData[0]});
      refs.update("v2", {value: scape.vectorData[1]});
      refs.update("v3", {value: scape.vectorData[2]});
      refs.update("v4", {value: scape.vectorData[3]});
      refs.update("scapePosition", {value: scape.position});
      refs.update("scapeMode", {value: scape.mode});
      // update the convolvers, switch to user IRs if they exist
      parseAndUpdateIRRefs(currentVFSKeys, scape, shared);
    }

    refs.update("dryMix", {value: shared.dryMix});
    refs.update("srvbBypass", {value: srvb.bypass}); // needed to bypass empty input when srvb is bypassed


    // memoization of nodes and non-node state
    memoized = {
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
  }

  function parseNewState(stateReceivedFromNative: JSONString) {
    const state = JSON.parse(stateReceivedFromNative);
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared: SharedSettings = {
      sampleRate: state.sampleRate,
      dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
      dryMix: state.dryMix,
    };
    const srvb: SrvbSettings = {
      structure: Math.floor((state.structure || 0) * NUM_SEQUENCES), // 0 - 15
      size: state.size,
      diffuse: state.diffuse,
      tone: clamp(state.tone * 2 - 1, -0.99, 1),
      level: easeIn2(state.mix),  
      // DEPRECATING STRUCTURE MAX
      // doing the normalisation inside SRVB
      structureMax: Math.round(state.structureMax) || 137, // handle the case where the max was not computed
      bypass: (Math.round(state.srvbBypass) || 0) as 1 | 0,
      position: reflectAround(state.position)
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
      position: state.position,
      hasUserSlots: !!currentVFSKeys.find((key) => key.includes("USERBANK")),
    };
    return { state, srvb, shared, scape };
  }

}; // end of receiveStateChange

////////// Handle updated VFS /////////////////////////////////
// @ts-ignore
globalThis.__receiveVFSKeys__ = function (vfsCurrent: JSONString) {
  const parsedArray: Array<string> = JSON.parse(vfsCurrent);
  if (parsedArray.length > 0) {
    currentVFSKeys = parsedArray;
  }
}


/////////////////////////////////////////////////////////////////

// NOTE: This is highly experimental and should not yet be relied on
// as a consistent feature.
// @ts-ignore
globalThis.__receiveHydrationData__ = (data: JSONString) => {
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


