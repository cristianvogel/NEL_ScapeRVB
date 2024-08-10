//@ts-check


import { Renderer, el, createNode } from '@elemaudio/core';
import { RefMap } from './RefMap';
import srvbEarly from './srvb-er';
import { clamp, easeIn2, mix, easeIn3 } from '@thi.ng/math';


// tried putting native calls here, but it crashes plug in a new and interesting way
const interpTimer = (_prev, _target) => {
  const intervalId = setInterval(() => {
    t = Math.min(1.0, t + 0.01);
    if (t === 1.0) {
      t = 0.0;
      clearInterval(intervalId);
    }
  }, 10);
};

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
let _convolver = (props, ...childs) => createNode("convolver", props, childs);


// Holding onto the previous state allows us a quick way to differentiate
// when we need to fully re-render versus when we can just update refs
let __prevState = null;
let t = 0.0; // interpolation time
function shouldRender(prevState, currentState) {
  const result = (prevState === null) 
                  || (currentState === null) 
                  // || (prevState.size !== nextState.size) 
                  || prevState.dimension  !== Math.round( currentState.dimension * 8) 
                  || (prevState.sampleRate !== currentState.sampleRate);
  return result;
}

globalThis.__receiveStateChange__ = (incomingState) => {

  const __state = JSON.parse(incomingState);

  // probably not working because it doesn't send back to native
  if (__prevState && t === 0.0 && (__state.size !== __prevState.size)) {
    interpTimer(__prevState.size, __state.size);
    t += 0.001;
  }

  const srvb = {
    size: easeIn3(__state.size),
    dimension: Math.round( __state.dimension * 8 ),
    excursion: __state.excursion,
    decay: easeIn2(__state.decay),
    mix: __state.mix,
    tone: clamp(__state.tone * 2 - 1, -0.99, 1)  // was cutoff
  };

  if (shouldRender(__prevState, __state)) {
    const graph = core.render(...srvbEarly({
      key: 'srvbEarly',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: srvb.size }, []),
      dimension: srvb.dimension,
      excursion: refs.getOrCreate('excursion', 'const', { value: srvb.excursion }, []),
      decay: refs.getOrCreate('decay', 'const', { value: srvb.decay }, []), // was fb_amount
      mix: refs.getOrCreate('mix', 'const', { value: srvb.mix }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: srvb.tone }, []), // coming always as 0-1
    },
      el.in({ channel: 0 }), el.in({ channel: 1 }))
    );
  } else {

    refs.update('size', { value: srvb.size });
    refs.update('excursion', { value: srvb.excursion });
    refs.update('decay', { value: srvb.decay });
    refs.update('mix', { value: srvb.mix });
    refs.update('tone', { value: srvb.tone });
  }

  __prevState = __state;
  __prevState.dimension = srvb.dimension;
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
