//@ts-check


import { Renderer, el, createNode, ElemNode } from '@elemaudio/core';
import { argMax, rotate } from "@thi.ng/arrays";
import { RefMap } from './RefMap';
import srvbEarly from './srvb-er';
import { clamp, smoothStep, schlick, EPS } from '@thi.ng/math';
import { equiv } from '@thi.ng/equiv';
import { NUM_SEQUENCES, OEIS_SEQUENCES } from './srvb-er';

type StructureData = {
  consts: Array<ElemNode>;
  max: () => ElemNode;
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

let structureData:StructureData = {
  consts: convertSeriesToConsts(OEIS_SEQUENCES[0].slice(0, 8), refs),
  max: ()=>el.const({ value: 0 }),
};


// using memoization to store the last state and only re-render if the state has changed
let __memState: null | any = null;
let t = 0.0; // interpolation time for size param

globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {

  const __state = JSON.parse(stateReceivedFromNative);

  smoothSizeInterpolation();

  // interpreted state, any adjustments should be done here before rendering to the graph
  const srvb = {
    size: __state.size,
    dimension: clamp(__state.dimension, EPS, 1 - EPS),
    decay: __state.decay,
    mix: __state.mix,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1),
    structure: Math.round(__state.structure * NUM_SEQUENCES),
    structureMax: __state.structureMax,
  };

  if (shouldRender(__memState, __state)) {
     structureData = handleStructureChange( refs, srvb.structure );
    const graph = core.render(...srvbEarly({
      key: 'srvbEarly',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: srvb.size }, []),
      decay: refs.getOrCreate('decay', 'const', { value: srvb.decay }, []), // was fb_amount
      mix: refs.getOrCreate('mix', 'const', { value: srvb.mix }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: srvb.tone }, []), // coming always as 0-1
      dimension: refs.getOrCreate('dimension', 'const', { value: srvb.dimension }, []), // coming always as 0-1
      structure: srvb.structure || 0,
      structureMax: structureData.max(),
      
    },
      [ el.in({ channel: 0 }), el.in({ channel: 1 }) ],
      ...structureData.consts)
    );
  } else {

    refs.update('size', { value: srvb.size });
    refs.update('decay', { value: srvb.decay });
    refs.update('mix', { value: srvb.mix });
    refs.update('tone', { value: srvb.tone });
    refs.update('dimension', { value: srvb.dimension });
    refs.update('structureMax', { value: srvb.structureMax });

   // update the structure consts
    OEIS_SEQUENCES[srvb.structure].forEach((value, i) => {
      refs.update(`structureConstNode_${i}`, { value });
    });



  }

  __memState = __state;
  __memState.structure = srvb.structure;

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
      console.log( OEIS_SEQUENCES );
      let series = OEIS_SEQUENCES[currStructIndex].slice(0, 8);
      console.log(`Using series ${series} `);
      // this should compute norm only on the set actually being used which is 8 at a time
      const seriesMax =  series[ argMax(series) ] ;
      // as the overall volume of a delayunit is also computed from the series, i had to put an upped limit
      // on the max value to prevent the series from being too quiet ( i.e. the normalised range is too wide )
      console.log(`Using series max ${seriesMax} `);
      // convert the sequences to signals
  
      const sequenceAsSignals = convertSeriesToConsts(series, _refs);

      const structureEight:StructureData = {
        consts: sequenceAsSignals,
        max: ()=>_refs.getOrCreate( 'structureMax', 'const', { value: seriesMax, key: `oeis:max_${series.slice(0,8)}` }, [] ),
      };

      return structureEight;
    };
  }

function convertSeriesToConsts(series: number[], _refs: RefMap) {
  return series.map((value, j) => {
    const t = _refs.getOrCreate(`structureConstNode_${j}`, "const", { value, key: `structureConst:${j}` }, []);
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


