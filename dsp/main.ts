import { Renderer, el, ElemNode } from "@elemaudio/core";
import { argMax, rotate } from "@thi.ng/arrays";
import { RefMap } from "./RefMap";
import srvbEarly from "./srvb-er";
import { clamp, smoothStep, schlick, EPS } from "@thi.ng/math";
import { equiv } from "@thi.ng/equiv";
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import type { Ramp } from "@thi.ng/ramp";
import { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import scape from "./scape";
import type { Vec } from "@thi.ng/vectors";

type StructureData = {
  consts: Array<ElemNode>;
  max: number;
};

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});

// Next, a RefMap for coordinating our refs
let refs: RefMap = new RefMap(core);

// the conditions that will trigger a full re-render of the node graph
function shouldRender(prev, curr) {
  const result =
    prev === null ||
    curr === null ||
    prev.sampleRate !== curr.sampleRate ||
    prev.structure !== Math.round(curr.structure * NUM_SEQUENCES) ||
    prev.scape !== curr.scape;
  return result;
}
// needs to have populated structure data to start with
const defaultStructure = OEIS_SEQUENCES[0];
const defaultMax = argMax(defaultStructure, 17);

let structureData: StructureData = {
  consts: castSequencesToRefs(defaultStructure, defaultMax, refs),
  max: defaultMax,
};

const HERMITE: Ramp<Vec> = createHermiteVecInterp();

let vectorData = {
  consts: castHermiteVecToRefs(HERMITE.at(0.0) as number[], refs)
};


/////////////////////////////////////////////////////////////////
// using memoization to store the last state and only re-render if the state has changed
let __memState: null | any = null;
let t = 0.0; // interpolation time for size param
/////////////////////////////////////////////////////////////////
// this will receive updated state from the native side
globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
  // parse the state
  const __state = JSON.parse(stateReceivedFromNative);
  // special case for the size param, we want to interpolate it smoothly
  smoothSizeInterpolation();
  // interpreted state, any adjustments should be done here before rendering to the graph


  const shared = {
    sampleRate: __state.sampleRate,
    structure: Math.round((__state.structure || 0) * NUM_SEQUENCES),
    mix: __state.mix,
  };

  const srvb = {
    size: __state.size,
    position: clamp(__state.position, EPS, 1 - EPS),
    diffuse: __state.diffuse,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1),
    structureMax: __state.structureMax || 400, // handle the case where the max was not computed
  };

  

  const tailScape = {
    shaped: true,
    scape: __state.scape || 0,
   
  };


  if (shouldRender(__memState, __state)) {
    // first, build all the new structure const refs
    structureData = handleStructureChange(refs, shared.structure);
    vectorData =  { consts: castHermiteVecToRefs( HERMITE.at( __state.structure / 15.0 ) as number[], refs) };
    // then, render the graph
    const graph = core.render(
      ...scape({
        sampleRate: shared.sampleRate,
        shaped: true,
        scape: refs.getOrCreate("scape", "const", { value: tailScape.scape }, []),
        mix: refs.getOrCreate("mix", "const", { value: shared.mix, key: "effectMix" }, []),
        structure: shared.structure || 0,
      }, vectorData.consts,

      ...srvbEarly({
        key: "srvbEarly",
        sampleRate: shared.sampleRate,
        size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
        decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
        mix: refs.getOrCreate("mix", "const", { value: shared.mix, key: "effectMix" }, []),
        tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
        position: refs.getOrCreate("position", "const", { value: srvb.position }, []),
        structure: shared.structure || 0,
        structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, []),
      }, 
      [el.in({ channel: 0 }), el.in({ channel: 1 })], 
      ...structureData.consts))
    );
  } else {
    refs.update("size", { value: srvb.size });
    refs.update("diffuse", { value: srvb.diffuse });
    refs.update("mix", { value: shared.mix });
    refs.update("tone", { value: srvb.tone });
    refs.update("position", { value: srvb.position });
    refs.update("structureMax", { value: srvb.structureMax });

    refs.update("scape", { value: tailScape.scape });

    // update the structure consts, should match the refs names set up by handleStructureChange
    OEIS_SEQUENCES[shared.structure].forEach((value, i) => {
      if (value !== undefined)
        refs.update(`node:structureConst:${i}`, { value: value });
    });
  }

  __memState = __state;
  __memState.structure = shared.structure;
  __memState.structureMax = structureData.max;
  __memState.scape = tailScape.scape;

  // smooth step on the size param using CHOC setInterval and thi.ng interpolation
  // mutates the __state.size entry directly
  function smoothSizeInterpolation() {
    let smoothS = 0.0;
    const interpTimer = (a, b) => {
      const intervalId = setInterval(() => {
        (t += 0.01), (smoothS = schlick(3, 0.5, smoothStep(a, b, t)));
        if (__state && __state.size) {
          __state.size = smoothS;
        }
        if (t > 1.0) {
          t = -1.0e-5; // reset to just below 0
          clearInterval(intervalId);
        }
      }, 1);
    };
    if (__memState && __state && t < 0.0 && __state.size !== __memState.size) {
      interpTimer(__memState.size, __state.size);
    }
  }
}; // end of receiveStateChange

// build the structure outside the dsp code
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

function castHermiteVecToRefs(
  
  vec: Array<number>,
  _refs: RefMap
): Array<ElemNode> {
  return vec.map((value, j) => {
    let updatedValue = value;
    const t = _refs.getOrCreate(
      `node:hermiteValue:${j}`,
      "const",
      { value: updatedValue, key: `key:hermiteValue:${j}` },
      []
    );
    return t;
  });
}
// create the vector interpolation ramp
// which will be used to crossfade between 4 IRs
function createHermiteVecInterp(): Ramp<Vec> {
  return ramp(
    // use a vector interpolation preset with the VEC3 API
    HERMITE_V(VEC3),
    // keyframes used for crossfading between 4 IRs
    [
      [0.0, [1, 0, 0, 0]], // a
      [0.125, [0, 1, 0, 0]], // b
      [0.45, [0, 0, 0.707, 0]], // c
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
