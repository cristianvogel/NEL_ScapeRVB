//@ts-check


import { Renderer, el, createNode } from '@elemaudio/core';
import { RefMap } from './RefMap';
import srvbEarly from './srvb-er';



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

function shouldRender(prevState, nextState) {
  return (prevState === null) || (nextState === null) || (prevState.sampleRate !== nextState.sampleRate);
}




globalThis.__receiveStateChange__ = (incomingState) => {

  const __state = JSON.parse(incomingState);
  
  const early = {
    size: __state.size,    
    dimension: __state.dimension,  // decorrelation
    excursion: __state.excursion,
    decay: __state.decay,   
    mix: __state.mix,
    tone: __state.tone  // was cutoff
  };

  if ( shouldRender(__prevState, __state) ) {
    const graph = core.render(...srvbEarly({
      key: 'srvbEarly',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: early.size }, []),
      dimension: refs.getOrCreate('dimension', 'const', { value: early.dimension }, []),      
      excursion: refs.getOrCreate('excursion', 'const', { value: early.excursion }, []),
      decay: refs.getOrCreate('decay', 'const', { value: early.decay }, []), // was fb_amount
      mix: refs.getOrCreate('mix', 'const', { value: early.mix }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: early.tone * 16000 }, []), // was fb_cutoff
    },
    el.in( { channel: 0 } ), el.in( { channel: 1 } ) )
    );
  } else {
    refs.update('size', { value: early.size });
    refs.update('dimension', { value: early.dimension });
    refs.update('excursion', { value: early.excursion });
    refs.update('decay', { value: early.decay });
    refs.update('mix', { value: early.mix });
    refs.update('tone', { value: 200 + (early.tone * 16000) });
  }

  __prevState = __state;
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
