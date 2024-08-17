import { Renderer, el } from "@elemaudio/core";
import { argMax } from "@thi.ng/arrays";
import { RefMap } from "./RefMap";
import srvbEarly from "./srvb-er";
import { clamp, smoothStep, schlick, EPS } from "@thi.ng/math";
import { equiv } from "@thi.ng/equiv";
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import type { Ramp } from "@thi.ng/ramp";
import { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import scape from "./scape";
import { eq, type Vec } from "@thi.ng/vectors";
import { StructureData } from "../src/types";

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});

// Next, a RefMap for coordinating our refs
let refs: RefMap = new RefMap(core);
// the Hermite vector interpolation ramp
const HERMITE: Ramp<Vec> = createHermiteVecInterp();
//--------------- /
// DEFAULT STATE
// These  need to have populated some data to start with
let vectorData: number[] = HERMITE.at(0.0) as number[];
let __memState: null | any = null;
const defaultStructure = OEIS_SEQUENCES[0];
const defaultMax = argMax(defaultStructure, 17);
let structureData: StructureData = {
  consts: castSequencesToRefs(defaultStructure, defaultMax, refs),
  max: defaultMax,
};

// the conditions that will trigger a full re-render of the node graph
function shouldRender(prev, curr) {
  const result =
    prev === null ||
    curr === null ||
    prev.sampleRate !== curr.sampleRate ||
    prev.structure === null ||
    prev.scapeLength === null ||
    !equiv( prev.vectorData, vectorData )

  return result;
}
//
// Here we will receive updated state from the native side
// All js in dsp/main is running natively in the CHOC QuickJS context
// There is also a globalThis.__receiveStateChange__ listener in
// NativeMessage.svelte easier to debug and see the state changes
//////////////////////////////
/// ALTERED STATES //////////
globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
  // first parse the state TODO: try / catch
  const __state = JSON.parse(stateReceivedFromNative);
  // interpreted state seperated out into respective processor params.
  // any adjustments should be done here before rendering to the graph
  const shared = {
    sampleRate: __state.sampleRate,
    mix: __state.mix,
    dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
  };
  const srvb = {
    structure: Math.round((__state.structure || 0) * NUM_SEQUENCES),
    size: __state.size,
    position: clamp(__state.position, EPS, 1),
    diffuse: __state.diffuse,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1),
    structureMax: __state.structureMax || 400, // handle the case where the max was not computed
  };
  const tailScape = { 
    shaped: false,
    scapeLevel: __state.scapeLevel || 0,
    scapeLength: __state.scapeLength || 0,
  };

  /**
   * ELEMENTARY
   * GRAPH
   * RENDERER
   */
  if (shouldRender(__memState, __state)) {
    // first, build any  new structure const refs
    if (__memState && __memState.structure !== __state.structure) {
      structureData = handleStructureChange(refs, srvb.structure);
    }

    // prettier-ignore
    // then, render the graph
    const graph = core.render(
      ...scape(
        {
          sampleRate: shared.sampleRate,
          shaped: tailScape.shaped,
          vectorData,
          mix: refs.getOrCreate("mix", "const", { value: shared.mix, key: "effectMix" }, []),
          scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: tailScape.scapeLevel }, []),
          v1: refs.getOrCreate("v1", "const", { value: vectorData[0] }, []), 
          v2: refs.getOrCreate("v2", "const", { value: vectorData[1] }, []),
          v3: refs.getOrCreate("v3", "const", { value: vectorData[2] }, []),
          v4: refs.getOrCreate("v4", "const", { value: vectorData[3] }, []),
        },
        shared.dryInputs,
        ...srvbEarly(
          {
            key: "srvbEarly",
            sampleRate: shared.sampleRate,
            size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
            decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
            mix: refs.getOrCreate("mix", "const", { value: shared.mix, key: "effectMix" }, []),
            tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
            position: refs.getOrCreate("position", "const", { value: srvb.position }, []),
            structure: srvb.structure || 0,
            structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, []),
          },
          shared.dryInputs,
          ...structureData.consts
        )
      )
    );
  } else {
    // Update any new vector data from the Hermite ramp
    vectorData = HERMITE.at(tailScape.scapeLength) as number[];
    // update the structure consts, should match the refs names set up by handleStructureChange
    OEIS_SEQUENCES[srvb.structure].forEach((value, i) => {
      if (value !== undefined)
        refs.update(`node:structureConst:${i}`, { value: value });
    });
    // then the rest of the refs for SRVB
    refs.update("size", { value: srvb.size });
    refs.update("diffuse", { value: srvb.diffuse });
    refs.update("mix", { value: shared.mix });
    refs.update("tone", { value: srvb.tone });
    refs.update("position", { value: srvb.position });
    refs.update("structureMax", { value: srvb.structureMax });
    // and the scape refs
    refs.update("scapeLevel", { value: tailScape.scapeLevel });
    refs.update("v1", { value: vectorData[0] });
    refs.update("v2", { value: vectorData[1] });
    refs.update("v3", { value: vectorData[2] });
    refs.update("v4", { value: vectorData[3] });
  }

  // memoisation of nodes and non-node state
  __memState = {
    ...__state,
    structure: srvb.structure,
    scapeLength: tailScape.scapeLength,
    structureMax: structureData.max,
    vectorData
  };
}; // end of receiveStateChange

// build structral sequences as ElemNodes and refs
function handleStructureChange(_refs: RefMap, currStructIndex = 0) {
  {
    let series = OEIS_SEQUENCES[currStructIndex];
    console.log(`Using series ${series} `);
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
// create the vector interpolation ramp, used to crossfade between 4 IRs
function createHermiteVecInterp(): Ramp<Vec> {
  return ramp(
    // use a vector interpolation preset with the VEC3 API
    HERMITE_V(VEC3),
    // keyframes used for crossfading between 4 IRs
    [
      [0.0, [1 , 0, 0, 0]], // a
      [0.5, [0, 1, 0, 0]], // b
      [0.75, [0, 0, 0.707, 0]], // c
      [1.0, [0, 0, 0, 0.303]], // d
    ]
  );
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
