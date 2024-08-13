
import { Renderer, el, createNode, ElemNode } from '@elemaudio/core';
import { argMax, rotate } from "@thi.ng/arrays";
import { RefMap } from './RefMap';
import srvbEarly from './srvb-er';
import { clamp, smoothStep, schlick, EPS } from '@thi.ng/math';
import { equiv } from '@thi.ng/equiv';
import { NUM_SEQUENCES, OEIS_SEQUENCES } from './srvb-er';

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
let refs:RefMap = new RefMap(core);

// Create our custom nodes
// let _convolver = (props, ...childs) => createNode("convolver", props, childs);


// the conditions that will trigger a full re-render of the node graph
function shouldRender(prev, curr) {
  const result = (prev === null)
    || (curr === null)
    || (prev.sampleRate !== curr.sampleRate)
    || (prev.structure !== Math.round(curr.structure * NUM_SEQUENCES))
  return result;
}
// needs to have populated structure data to start with
const defaultStructure = OEIS_SEQUENCES[0];

let structureData:StructureData = {
  consts: convertSeriesToConsts(defaultStructure, argMax( defaultStructure, 17 ), refs),
  max: argMax( defaultStructure, 17 ),
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
  const srvb = {
    size: __state.size,
    position: clamp(__state.position, EPS, 1 - EPS),
    diffuse: __state.diffuse,
    mix: __state.mix,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1),
    structure: Math.round( (__state.structure || 0) * NUM_SEQUENCES ),
    structureMax: __state.structureMax || 400, // handle the case where the max was not computed
  };

  if (shouldRender(__memState, __state)) {
      // first, build all the new structure const refs
      structureData = handleStructureChange( refs, srvb.structure );
      // then, render the graph
      const graph = core.render(...srvbEarly({
      key: 'srvbEarly',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: srvb.size }, []),
      decay: refs.getOrCreate('diffuse', 'const', { value: srvb.diffuse }, []), // was fb_amount
      mix: refs.getOrCreate('mix', 'const', { value: srvb.mix }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: srvb.tone }, []), // coming always as 0-1
      position: refs.getOrCreate('position', 'const', { value: srvb.position }, []), // coming always as 0-1
      structure: srvb.structure || 0,
      structureMax: refs.getOrCreate('structureMax', 'const', { value: structureData.max, key: 'structureMax' }, []), // max value of the series
    },
      [ el.in({ channel: 0 }), el.in({ channel: 1 }) ],
      ...structureData.consts)
    );
  } else {

    refs.update('size', { value: srvb.size });
    refs.update('diffuse', { value: srvb.diffuse });
    refs.update('mix', { value: srvb.mix });
    refs.update('tone', { value: srvb.tone });
    refs.update('position', { value: srvb.position });
    refs.update('structureMax', { value: srvb.structureMax});

   // update the structure consts, should match the refs names set up by handleStructureChange
    OEIS_SEQUENCES[srvb.structure].forEach((value, i) => { 
      if ( value !== undefined) refs.update(`structureConstNode_${i}`, { value: value });
    });



  }

  __memState = __state;
  __memState.structure = srvb.structure;
  __memState.structureMax = structureData.max;

  // smooth step on the size param using CHOC setInterval and thi.ng interpolation
  // mutates the __state.size entry directly
  function smoothSizeInterpolation() {
    let smoothS = 0.0;
    const interpTimer = (a, b) => {
      const intervalId = setInterval(() => {
        t += 0.01,
          smoothS = schlick(3, 0.5, smoothStep(a, b, t));
        if (__state && __state.size) { __state.size = smoothS; }
        if (t > 1.0) {
          t = -1.0e-5; // reset to just below 0
          clearInterval(intervalId);
        }
      }, 1);
    };
    if (__memState && __state && t < 0.0 && (__state.size !== __memState.size)) {
      interpTimer(__memState.size, __state.size);
    }
  }

}; // end of receiveStateChange

  // build the structure outside the dsp code
  function handleStructureChange( _refs:RefMap, currStructIndex = 0) {
    {
      let series = OEIS_SEQUENCES[currStructIndex];
      console.log(`Using series ${series} `);
      // this should compute norm only on the set actually being used which is 8 elements long
      const seriesMax =  series[ argMax(series) ] ;
      // convert the sequences to signals
      const sequenceAsSignals = convertSeriesToConsts(series, seriesMax, _refs);
      const sd:StructureData = {
        consts: sequenceAsSignals,
        max: seriesMax,
      };
      return sd;
    };
  }

  function convertSeriesToConsts(series: number[], seriesMax: number, _refs: RefMap) {
    return series.map( (value, j) => {
      let updatedValue = value;
      // try to invent a value if it's not there
      if ( value === null || value === undefined) {
        updatedValue = Math.random() * seriesMax ;
      }
      const t = _refs.getOrCreate(`structureConstNode_${j}`, "const", { value: updatedValue, key: `structureConst:${j}` }, []);
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
      symbol: '__ELEM_NODE__',
      kind: '__HYDRATED__',
      hash: parseInt(k, 16),
      props: v,
      generation: {
        current: 0,
      },
    });
  }
};


