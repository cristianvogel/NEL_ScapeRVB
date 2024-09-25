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
import { ScapeSettings, SharedSettings, SrvbSettings, StructureData } from "../src/types";
import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";

let scapeSettings: ScapeSettings;
let srvbSettings: SrvbSettings;
let sharedSettings: SharedSettings;

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});

// Register our custom nodes
let convolver = (_props, ...childs) => createNode("convolver", _props, childs);
// MUST MATCH FILE NAMES IN THE PUBLIC IR FOLDER
const blockSizes = [512, 4096];
const IR_Slots = [
  { name: "LIGHT", index: 0, att: 0.65 },
  { name: "SURFACE", index: 1, att: 0.475 },
  { name: "TEMPLE", index: 2, att: 0.475 },
  { name: "DEEPNESS", index: 3, att: 0.25 },
];
// Utilise a factory pattern to generate the ref updaters
// for the Elem ref engine, otherwise it's a lot of repetition
const IR_Refs = IR_Slots.reduce((acc, slot) => {
  return { ...acc, ...IR_SlotRefFactory( scapeSettings, refs, slot.name, slot.index, slot.att) };
}, {});

function IR_SlotRefFactory( scapeSettings: ScapeSettings, refs:RefMap, name: string, vectorIndex: number, scale: number) {
  if (!scapeSettings || !refs ) return;
  return {
    [`${name}_0`]: refs.getOrCreate(
      `${name}_0`,
      "convolver",
      {
        path: `${name}_0`,
        process: scapeSettings.vectorData[vectorIndex],
        scale,
        blockSizes,
      },
      [el.tapIn({ name: `srvbOut:0` })]
    ),
    [`${name}_1`]: refs.getOrCreate(
      `${name}_1`,
      "convolver",
      {
        path: `${name}_1`,
        process: scapeSettings.vectorData[vectorIndex],
        scale,
        blockSizes,
      },
      [el.tapIn({ name: `srvbOut:1` })]
    ),
  };
}


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

let ir_inputAtt = IR_Slots.map((ir) => ir.att);

// Next, a RefMap for coordinating our refs
let refs: RefMap = new RefMap(core);

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
    _curr.sampleRate !== _mem?.sampleRate ||
    Math.round( _curr.scapeBypass )!== _mem?.scapeBypass ||
    Math.round( _curr.srvbBypass ) !== _mem?.srvbBypass;

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
  const { state, srvb, shared, scape } = parseNewState(stateReceivedFromNative);

  const blockSizes = [512, 4096];

  refs.getOrCreate("dryMix", "const", {value: shared.dryMix } , []);


  // prettier-ignore
  const srvbProps = () => { 
    const props =  
    {
      key: "srvb",
      IRs: IR_Slots ,
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
    IRs: IR_Slots,
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
    SURFACE_0: refs.getOrCreate("SURFACE_0", "convolver", 
      { path: "SURFACE_0", process: scape.vectorData[1], scale: ir_inputAtt[1],    blockSizes }, [ el.tapIn( { name: "srvbOut:0" }) ] ),
    SURFACE_1: refs.getOrCreate("SURFACE_1", "convolver", 
      { path: "SURFACE_1" , process: scape.vectorData[1], scale: ir_inputAtt[1],   blockSizes }, [ el.tapIn( { name: "srvbOut:1" }) ]),
    TEMPLE_0: refs.getOrCreate("TEMPLE_0", "convolver", 
      { path: "TEMPLE_0", process: scape.vectorData[2], scale: ir_inputAtt[2] , blockSizes }, [ el.tapIn( { name: "srvbOut:0" }) ] ),
    TEMPLE_1: refs.getOrCreate("TEMPLE_1", "convolver", 
      { path: "TEMPLE_1", process: scape.vectorData[2], scale: ir_inputAtt[2] , blockSizes }, [ el.tapIn( { name: "srvbOut:1" }) ] ),
    LIGHT_0: refs.getOrCreate("LIGHT_0", "convolver", 
      { path: "LIGHT_0", process: scape.vectorData[0], scale: ir_inputAtt[0] , blockSizes }, [ el.tapIn( { name: "srvbOut:0" }) ] ),
    LIGHT_1: refs.getOrCreate("LIGHT_1", "convolver", 
      { path: "LIGHT_1", process: scape.vectorData[0], scale: ir_inputAtt[0] , blockSizes }, [ el.tapIn( { name: "srvbOut:1" }) ] ),
    DEEPNESS_0: refs.getOrCreate("DEEPNESS_0", "convolver", 
      { path: "DEEPNESS_0", process: scape.vectorData[3], scale: ir_inputAtt[3] ,  blockSizes }, [ el.tapIn( { name: "srvbOut:0" }) ] ),
    DEEPNESS_1: refs.getOrCreate("DEEPNESS_1", "convolver", 
      { path: "DEEPNESS_1", process: scape.vectorData[3], scale: ir_inputAtt[3]  , blockSizes }, [ el.tapIn( { name: "srvbOut:1" }) ] ),
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
    structureData = buildStructures(refs, srvb.structure);

    const graph = core.render( 
      ...SCAPE(
        scapeProps(),
        shared.dryInputs,
        ...SRVB( srvbProps(), shared.dryInputs, ...structureData.consts )
      ).map( (node, i) => el.add( el.mul( refs.get( "dryMix" ), shared.dryInputs[i] ), node  ) ) 
    );
  } else {
   

    // then the rest of the refs for SRVB
    if ( !srvb.bypass  ) {
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

    // update the convolvers
    IR_Slots.forEach((item, index) => {
      for (let i = 0; i < 2; i++) {
        refs.update(`${item.name}_${i}`, {
          path:
            scape.reverse > 0.5
              ? REVERSE_BUFFER_PREFIX + `${item.name}_${i}`
              : `${item.name}_${i}`,
          process: Math.min(scape.level, scape.vectorData[item.index]),
          scale: ir_inputAtt[index],
        });
      }
    });
  }

  // console.log( Object.keys( refs._map.get("DEEPNESS_0")[0].children  ) );

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
      dryInputs: [ el.in({ channel: 0 }), el.in({ channel: 1 }) ],
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
      bypass: Math.round( state.srvbBypass  ) || 0,
    };
    const scape = {
      reverse: Math.round(state.scapeReverse),
      level: state.scapeLevel,
      ir: state.scapeLength,
      vectorData: HERMITE.at(state.scapeLength),
      bypass: Math.round( state.scapeBypass ) || 0
    };
    return { state, srvb, shared, scape };
  }
}; // end of receiveStateChange

// build structral sequences as ElemNodes and refs
function buildStructures(_refs: RefMap, currStructIndex = 0) {
  {
    let series = OEIS_SEQUENCES[currStructIndex];
   // console.log(`Using series ${series} `);
    // this should compute norm only on the set actually being used which is 8 elements long
    const seriesMax = series[argMax(series)];
    // convert the sequences to signals
    const sequenceAsSignals = castSequencesToRefs(series, seriesMax, _refs);
    const sd: StructureData = {
      consts: sequenceAsSignals,
      max: seriesMax,
    };
    return sd;
  }
}
function castSequencesToRefs(
  series: number[],
  seriesMax: number,
  _refs: RefMap
) {
  return series.map((value, j) => {
    let updatedValue = value;
    // try to invent a value if it's not there
    if (value === null || value === undefined) {
      updatedValue = Math.random() * seriesMax;
    }
    const t = _refs.getOrCreate(
      `node:structureConst:${j}`,
      "const",
      { value: updatedValue, key: `key:structureConst:${j}` },
      []
    );
    return t;
  });
}


/////////////////////////////////////////////////////////////////
// Finally, an error callback which just logs back to native
globalThis.__receiveError__ = (err) => {
  console.log(`[Elem: ${err.name}] ${err.message}`);
};
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
