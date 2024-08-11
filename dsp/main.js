//@ts-check


import { Renderer, el, createNode } from '@elemaudio/core';
import { RefMap } from './RefMap';
import srvbEarly from './srvb-er';
import { clamp, smoothStep, schlick, EPS } from '@thi.ng/math';
import { NUM_SEQUENCES } from './srvb-er';


// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  //@ts-ignore
  __postNativeMessage__(JSON.stringify(batch));
});

// Next, a RefMap for coordinating our refs
let refs = new RefMap(core);

// Create our custom nodes
// let _convolver = (props, ...childs) => createNode("convolver", props, childs);

let __memState = null;
let t = 0.0; // interpolation time for size param

// the conditions that will trigger a full re-render of the node graph
function shouldRender(prev, curr) {
  const result = (prev === null)
    || (curr === null)
    || (prev.sampleRate !== curr.sampleRate)
    || (prev.structure !== Math.round(curr.structure * NUM_SEQUENCES) )
  return result;
}

globalThis.__receiveStateChange__ = ( stateReceivedFromNative ) => {

  const __state = JSON.parse( stateReceivedFromNative );

  smoothSizeInterpolation();

  // interpreted state, any adjustments should be done here before rendering to the graph
  const srvb = {
    size:  __state.size ,
    dimension: clamp( __state.dimension, EPS, 1 - EPS ), 
    excursion: __state.excursion ,
    decay: __state.decay,
    mix: __state.mix,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1) ,
    structure: Math.round( __state.structure * NUM_SEQUENCES ),
  };


  if (shouldRender(__memState, __state) ) {
    const graph = core.render(...srvbEarly({
      key: 'srvbEarly',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: srvb.size }, []),
      excursion: refs.getOrCreate('excursion', 'const', { value: srvb.excursion }, []),
      decay: refs.getOrCreate('decay', 'const', { value: srvb.decay }, []), // was fb_amount
      mix: refs.getOrCreate('mix', 'const', { value: srvb.mix }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: srvb.tone }, []), // coming always as 0-1
      dimension: refs.getOrCreate('dimension', 'const', { value: srvb.dimension }, []), // coming always as 0-1
      structure: srvb.structure || 0,
    },
      el.in({ channel: 0 }), el.in({ channel: 1 }))
    );
  } else {

    refs.update('size', { value: srvb.size });
    refs.update('excursion', { value: srvb.excursion });
    refs.update('decay', { value: srvb.decay });
    refs.update('mix', { value: srvb.mix });
    refs.update('tone', { value: srvb.tone });
    refs.update('dimension', { value: srvb.dimension });
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
};

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
