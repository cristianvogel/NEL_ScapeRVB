import { Renderer, el, createNode } from "@elemaudio/core";
import { argMax } from "@thi.ng/arrays";
import { RefMap } from "./RefMap";
import SRVB from "./srvb-er";
import { clamp, EPS } from "@thi.ng/math";
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import type { Ramp } from "@thi.ng/ramp";
import { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import SCAPE from "./scape";
import { Vec } from "@thi.ng/vectors";
import {
  IRMetaData,
  ProcessorSettings,
  ScapeSettings,
  StructureData,
} from "../src/types";
import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";
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
// MUST MATCH FILE NAMES IN THE PUBLIC IR FOLDER
const blockSizes = [512, 4096];

const IR_Default_Slots: Array<IRMetaData> = [
  { name: "LIGHT", index: 0, att: 0.65 },
  { name: "SURFACE", index: 1, att: 0.475 },
  { name: "TEMPLE", index: 2, att: 0.475 },
  { name: "DEEPNESS", index: 3, att: 0.25 },
];

let IR_User_Slots: Array<IRMetaData> = []; 


// Utilise a factory pattern to generate the ref updaters
// for the Elem ref engine, otherwise it's a lot of repetition
function IR_SlotRefFactory(
  scapeSettings: ScapeSettings,
  refs: RefMap,
  name: string,
  slotIndex: number,
  attenuation: number
) {
  if (!scapeSettings || !refs) return;
  return {
    [`${name}_0`]: refs.getOrCreate(
      `${name}_0`,
      "convolver",
      {
        path: `${name}_0`,
        process: scapeSettings.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
      },
      [el.tapIn({ name: `srvbOut:0` })]
    ),
    [`${name}_1`]: refs.getOrCreate(
      `${name}_1`,
      "convolver",
      {
        path: `${name}_1`,
        process: scapeSettings.vectorData[slotIndex],
        scale: attenuation,
        blockSizes,
      },
      [el.tapIn({ name: `srvbOut:1` })]
    ),
  };
}

function registerConvolverRefs(scape: ScapeSettings, refs: RefMap) {
  let convolvers = {};
  IR_Default_Slots.forEach((item) => {
    convolvers = {
      ...convolvers,
      ...IR_SlotRefFactory(scape, refs, item.name, item.index, item.att),
    };
  });
  return convolvers;
}
// later, the Elementary refs system will be used to
// parse and update the VFS paths of the default and user
// loaded impulse responses made available to the processor
function parseAndUpdateIRRefs( scape: ScapeSettings, useDefaultIRs: boolean = true ) {

  const VFSPathWithReverseSwitch = ( name: string, channel: number ) => {
    const selectedPath = scape.reverse > 0.5
    ? REVERSE_BUFFER_PREFIX + `${name}_${channel}`
    : `${name}_${channel}`;
   return selectedPath
  };

  const getRefMapKey = (slotIndex: number, chan: number, refs: RefMap ) => { 
    const name = `${IR_Default_Slots[slotIndex].name}_${chan}`;
    refs.has( name ) // invariant will throw if the name is not found 
    return name;
  };

    console.log( 'UpdateRefs: default -> ', IR_Default_Slots, " user -> ", IR_User_Slots )


  if (useDefaultIRs) {
  IR_Default_Slots.forEach((defaultIR, slotIndex) => {
    for (let chan = 0; chan < 2; chan++) {
      refs.update( getRefMapKey( slotIndex, chan, refs ), {
        path: VFSPathWithReverseSwitch( defaultIR.name, chan ),
        process: Math.min(scape.level, scape.vectorData[defaultIR.index]), // todo: take another look at this
        scale: defaultIR.att,
      });
    }
  });

  
  } else {
  IR_User_Slots.forEach((userIR, slotIndex) => {
    for (let chan = 0; chan < 2; chan++) {
      refs.update( getRefMapKey( slotIndex, chan, refs ), {
        path: `${IR_User_Slots[slotIndex].name}_${chan}`,   // todo: reverse switch
        process:  Math.min(scape.level, scape.vectorData[userIR.index]),  // todo: take another look at this
        scale: userIR.att,
      });
    }
  });
}
};

// create the vector interpolation ramp, used to crossfade between 4 IRs
function createHermiteVecInterp(): Ramp<Vec> {
  return ramp(
    // use a vector interpolation preset with the VEC3 API
    HERMITE_V(VEC3),
    // keyframes used for crossfading between 4 IRs
    [
      [0.0, [0.707, 0, 0, 0]], // a
      [0.45, [0, 0.707, 0, 0]], // b
      [0.65, [0, 0, 0.707, 0]], // c
      [1.0, [0, 0, 0, 0.25]], // d
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
  IR_User_Slots.length > 4 ||
    _mem === null ||
    _curr === null ||
    refs._map.size === 0 ||
    _curr.sampleRate !== _mem?.sampleRate ||
    Math.round(_curr.scapeBypass) !== _mem?.scapeBypass ||
    Math.round(_curr.srvbBypass) !== _mem?.srvbBypass;

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

globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
  // first parse the state
  const { state, srvb, shared, scape }: ProcessorSettings = parseNewState(
    stateReceivedFromNative
  );

  refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);

  // prettier-ignore
  const srvbProps = () => { 
    const props =  
    {
      key: "srvb",
      IRs: IR_Default_Slots ,
      srvbBypass: srvb.bypass,
      dryMix: shared.dryMix,
      sampleRate: shared.sampleRate,
      size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
      decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
      mix: refs.getOrCreate("mix", "const", { value: srvb.level, key: "effectMix" }, []),
      tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
      position: refs.getOrCreate("position", "const", { value: shared.position }, []),
      structure: srvb.structure,
      structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, [])
    }
    return props;
  };
  // prettier-ignore
  const scapeProps = () => {
   const props =
   {
    IRs: IR_Default_Slots,
    sampleRate: shared.sampleRate,
    scapeBypass: scape.bypass || 0,    
    vectorData: scape.vectorData,    
    // RefNodes from now on
    srvbBypass: refs.getOrCreate( "srvbBypass", "const", { value: srvb.bypass }, [] ),
    scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: scape.level }, []),
    scapePosition: refs.getOrCreate("scapePosition", "const", { value: shared.position }, []),
    // the Hermite vector interpolation values as signals
    v1: refs.getOrCreate("v1", "const", { value: scape.vectorData[0] }, [ ]), 
    v2: refs.getOrCreate("v2", "const", { value: scape.vectorData[1] }, [ ]),
    v3: refs.getOrCreate("v3", "const", { value: scape.vectorData[2] }, [ ]),
    v4: refs.getOrCreate("v4", "const", { value: scape.vectorData[3] }, [ ]),
    // render the convolvers
...registerConvolverRefs(  scape, refs )
  };
  return props;
  }

  /**
   * ELEMENTARY
   * GRAPH
   * RENDERER
   */
  if (!memoized || shouldRender(memoized, state)) {
    // first, build structure const refs
    structureData = buildStructures(refs, srvb.structure) || structureData;

    const graph = core.render(
      ...SCAPE(
        scapeProps(),
        shared.dryInputs,
        ...SRVB(srvbProps(), shared.dryInputs, ...structureData.consts)
      ).map((node, i) =>
        el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node)
      )
    );
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
      refs.update("mix", { value: srvb.level });
      refs.update("tone", { value: srvb.tone });
      refs.update("position", { value: shared.position });
      refs.update("structureMax", { value: srvb.structureMax });
      updateStructureConstants( refs, srvb );
    }

    if (!scape.bypass) {
      // and the scape refs
      refs.update("scapeLevel", { value: scape.level });
      refs.update("v1", { value: scape.vectorData[0] });
      refs.update("v2", { value: scape.vectorData[1] });
      refs.update("v3", { value: scape.vectorData[2] });
      refs.update("v4", { value: scape.vectorData[3] });
      refs.update("scapePosition", { value: shared.position });
    }

    refs.update("dryMix", { value: shared.dryMix });
    refs.update("srvbBypass", { value: srvb.bypass }); // needed to bypass empty input when srvb is bypassed

    // update the convolvers, switch to user IRs if they exist
    parseAndUpdateIRRefs( scape, IR_User_Slots.length === 0 );
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
      level: state.mix,
      structureMax: Math.round(state.structureMax) || 137, // handle the case where the max was not computed
      bypass: Math.round(state.srvbBypass) || 0,
    };
    const scape = {
      reverse: Math.round(state.scapeReverse),
      level: state.scapeLevel,
      ir: state.scapeLength,
      vectorData: HERMITE.at(state.scapeLength),
      bypass: Math.round(state.scapeBypass) || 0,
    };
    return { state, srvb, shared, scape };
  }
}; // end of receiveStateChange

//////////////////////////
globalThis.__receiveVFSKeys__ = function (vfsKeys: string) {
 
  const vfsKeysArray = JSON.parse( vfsKeys );

  const userIRs = vfsKeysArray.filter((key) => key.includes("USER"));
  IR_User_Slots = userIRs.map((key, index) => {
    const [name, channel] = key.split("_");
    // get the Xfade position if the IR from the digit at the end of the name
    const targetSlot = parseInt( name[name.length - 1] ); 
    return { name, index: targetSlot, att: 0.25 };
  });

  // remove doubles
  IR_User_Slots = IR_User_Slots.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name)
  );

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


