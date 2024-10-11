import { Renderer, el, createNode } from "@elemaudio/core";
import { argMax } from "@thi.ng/arrays";
import { RefMap } from "./RefMap";
import SRVB from "./srvb-er";
import { clamp, EPS, easeIn3, easeIn2 } from "@thi.ng/math";
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import type { Ramp } from "@thi.ng/ramp";
import { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import SCAPE from "./scape";
import { Vec } from "@thi.ng/vectors";
import {
  DefaultIRSlotName,
  IRMetaData,
  ProcessorSettings,
  ScapeProps,
  ScapeSettings,
  SRVBProps,
  StructureData,
  VFSPathStem,
  UserVFSStem,
} from "../src/types";
import { DEFAULT_IR_SLOTNAMES, REVERSE_BUFFER_PREFIX } from "../src/stores/constants";
import { castSequencesToRefs, buildStructures, updateStructureConstants } from "./OEIS-Structures";


// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});


// Next, a RefMap for coordinating our refs
let refs: RefMap = new RefMap(core);

// Register our custom nodes
let convolver = (_props, ...childs) => createNode("convolver", _props, childs);

// Set up the default IRs
// MUST MATCH FILE NAMES IN THE PUBLIC IR FOLDER
const blockSizes = [512, 4096];
const Default_IR_Map: Map<DefaultIRSlotName, IRMetaData> = new Map([
  ["LIGHT", { pathStem: "LIGHT", index: 0, att: 1.0 }],
  ["SURFACE", { pathStem: "SURFACE", index: 1, att: 0.9 }],
  ["TEMPLE", { pathStem: "TEMPLE", index: 2, att: 0.9 }],
  ["DEEPNESS", { pathStem: "DEEPNESS", index: 3, att: 0.675 }],
]);

// gets populated when the user loads IRs 
const User_IR_Map: Map<DefaultIRSlotName, IRMetaData> = new Map();

// Utilise a factory pattern to generate the ref updaters
// for the Elem ref engine
function IR_SlotRefFactory(
  scapeSettings: ScapeSettings,
  refs: RefMap,
  slot: DefaultIRSlotName,
  slotIndex: number,
  attenuation: number
) {
  if (!scapeSettings || !refs) return;
  return {
    [`${slot}_0`]: refs.getOrCreate(
      `${slot}_0`,
      "convolver",
      {
        path: `${slot}_0`,
        process: scapeSettings.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
        offset: scapeSettings.offset
      },
      [el.tapIn({ name: `srvbOut:0` })]
    ),
    [`${slot}_1`]: refs.getOrCreate(
      `${slot}_1`,
      "convolver",
      {
        path: `${slot}_1`,
        process: scapeSettings.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
        offset: scapeSettings.offset
      },
      [el.tapIn({ name: `srvbOut:1` })]
    ),
  };
}

function registerConvolverRefs(scape: ScapeSettings, refs: RefMap) {
  let convolvers = {};
  Default_IR_Map.forEach((ir, slotName) => {
    convolvers = {
      ...convolvers,
      ...IR_SlotRefFactory(scape, refs, slotName, ir.index, ir.att),
    };
  });

  return convolvers;
}
// later, the Elementary refs system will be used to
// parse and update the VFS paths of the default and user
// loaded impulse responses made available to the processor
function parseAndUpdateIRRefs(scape: ScapeSettings, useDefaultIRs: boolean = true) {

  const mode = scape.mode;

  const VFSPathWithReverseForChannel = (slotName: DefaultIRSlotName, channel: number) => {
    const userIR = User_IR_Map.get(slotName) as IRMetaData;
    const defaultIR = Default_IR_Map.get(slotName) as IRMetaData;
    const vfsPathWithChannel = userIR && mode ? `${userIR.pathStem}_${channel}` : `${defaultIR.pathStem}_${channel}` ;
    const reversablePathNameWithChannel = scape.reverse > 0.5
      ? REVERSE_BUFFER_PREFIX + vfsPathWithChannel 
      : vfsPathWithChannel ;
    return reversablePathNameWithChannel
  };

  const getRefForChannel = (refs: RefMap, slotName: DefaultIRSlotName, chan: number) => {
    let path = `${slotName}_${chan}`;
    refs.has(path) // invariant will throw if the name is not found 
    return path;
  };


  Default_IR_Map.forEach( (defaultIR, slotName: DefaultIRSlotName) => {

    const userIR = User_IR_Map.get(slotName);
  
    for (let chan = 0; chan < 2; chan++) {
      refs.update(
        getRefForChannel(refs, slotName, chan), {
        path: VFSPathWithReverseForChannel(slotName, chan),
        process: Math.min(scape.level, scape.vectorData[defaultIR.index]), // todo: take another look at this
        scale: userIR && mode ? userIR.att : defaultIR.att,
        offset: scape.offset
      });
    }
  })

};

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
    mix: refs.getOrCreate("mix", "const", { value:  srvb.level }, []),
    tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
    position: refs.getOrCreate("position", "const", { value: shared.position }, []),
    structure: srvb.structure,
    structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, [])
  };
  // prettier-ignore
  scapeProps =
  {
    IRs: Default_IR_Map,
    sampleRate: shared.sampleRate,
    scapeBypass: scape.bypass || 0,
    vectorData: scape.vectorData,
    offset: scape.offset,
    // RefNodes from now on
    srvbBypass: refs.getOrCreate("srvbBypass", "const", { value: srvb.bypass }, []),
    scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: scape.level }, []),
    scapePosition: refs.getOrCreate("scapePosition", "const", { value: shared.position }, []),
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

    console.log( 'Render called' );
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
        ).map((node, i) =>
          el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node)
        )
      )
    }
  } else {
    // then the rest of the refs for SRVB
    if (!srvb.bypass) {
      // update the structure consts, should match the refs names set up by handleStructureChange
      OEIS_SEQUENCES[srvb.structure].forEach((value, i) => {
        if (value !== undefined)
          refs.update(`node:structureConst:${i}`, { value });
      });
      refs.update("size", { value: srvb.size });
      refs.update("diffuse", { value: srvb.diffuse });
      refs.update("mix", { value:srvb.level });
      refs.update("tone", { value: srvb.tone });
      refs.update("position", { value: shared.position });
      refs.update("structureMax", { value: srvb.structureMax });
      updateStructureConstants(refs, srvb);
    }

    if (!scape.bypass) {
      // and the scape refs
      refs.update("scapeLevel", { value: scape.level });
      refs.update("v1", { value: scape.vectorData[0] });
      refs.update("v2", { value: scape.vectorData[1] });
      refs.update("v3", { value: scape.vectorData[2] });
      refs.update("v4", { value: scape.vectorData[3] });
      refs.update("scapePosition", { value: shared.position });
      refs.update("scapeMode", { value: scape.mode });

      // update the convolvers, switch to user IRs if they exist
      parseAndUpdateIRRefs(scape);
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
    scapeOffset: scape.offset
  };

  function parseNewState(stateReceivedFromNative) {
    const state = JSON.parse(stateReceivedFromNative);
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared = {
      sampleRate: state.sampleRate,
      dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
      dryMix: state.dryMix,
      position: clamp(state.position, EPS, 1),
    };
    const srvb = {
      structure: Math.round((state.structure || 0) * NUM_SEQUENCES),
      size: state.size,
      diffuse: state.diffuse,
      tone: clamp(state.tone * 2 - 1, -0.99, 1),
      level: easeIn2(state.mix),   // the level of the SRVB
      structureMax: Math.round(state.structureMax) || 137, // handle the case where the max was not computed
      bypass: Math.round(state.srvbBypass) || 0,
    };
    const scape = {
      reverse: Math.round(state.scapeReverse),
      level: state.scapeLevel,
      ir: state.scapeLength,
      vectorData: HERMITE.at(state.scapeLength),
      bypass: Math.round(state.scapeBypass) || 0,
      mode: Math.round(state.scapeMode) || 0,
      offset: state.scapeOffset || 0,
    };
    return { state, srvb, shared, scape };
  }
}; // end of receiveStateChange

////////// Handle New IRs from the VFS /////////////////////////////////
globalThis.__receiveVFSKeys__ = function (vfsCurrent: string) {
  const vfsKeysArray = JSON.parse(vfsCurrent);
  const userVFSKeys: Array< VFSPathStem > = vfsKeysArray.filter((key) => key.includes("USER") && !key.includes("REVERSE"));
  // go through user IRs .... if USER0 , update the pathStem of LIGHT to USER0 and so on
  // we will just use the first 4 user IRs and assign the paths of the Default slotnames 
  // in the Elem refmap

  const userVFSKeysCount = userVFSKeys.length;
  console.log( 'User VFS Keys', userVFSKeys, ' checksum ->', userVFSKeysCount );

for (let i = 0; i < userVFSKeysCount; i++) {
  const currentSlot: number = (Math.floor( i / 2 )); 
  // Why? Because there are 2 stereo files per slot ( 0 and 1 each has forwards on left and reverse on right )
  // So the schema is as below,  the stem and slot, then stem and slot + channel eg: USER0_0, USER0_1, USER1_0, USER1_1 etc
  // the reverse keys are referenced inline by the convolvution node updaters
    const userPathStem: VFSPathStem = `USER${currentSlot}` as UserVFSStem;
  // therefore User_IR_Map the map should contain the pathStem and the index of the slot only
  // USER0, USER1, USER2, USER3
    User_IR_Map.set( DEFAULT_IR_SLOTNAMES[currentSlot], { pathStem: userPathStem, index: currentSlot, att: 0.95 } );
  }
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


