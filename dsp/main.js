//@ts-check


import { Renderer, el, createNode } from '@elemaudio/core';
import { RefMap } from './RefMap';
import tapNetwork from './tapNetwork';



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
    preDelay: __state.preDelay,
    excursion: __state.excursion,
    build: __state.build,
    tone: __state.tone,  // was cutoff
    preScape: __state.preScape,
    dimension: __state.dimension,  // decorrelation
    drive: __state.drive,
  };

  if ( shouldRender(__prevState, __state) ) {
    const graph = core.render(...tapNetwork({
      key: 'scape-',
      sampleRate: __state.sampleRate,
      size: refs.getOrCreate('size', 'const', { value: early.size }, []),
      dimension: refs.getOrCreate('dimension', 'const', { value: early.dimension }, []),      
      drive: refs.getOrCreate('drive', 'const', { value: early.drive }, []),
      preDelay: refs.getOrCreate('preDelay', 'const', { value: early.preDelay }, []),  // is in ms
      excursion: refs.getOrCreate('excursion', 'const', { value: early.excursion }, []),
      build: refs.getOrCreate('build', 'const', { value: early.build }, []), // was fb_amount
      preScape: refs.getOrCreate('preScape', 'const', { value: early.preScape }, []), // overall wet level
      tone: refs.getOrCreate('tone', 'const', { value: early.tone * 16000 }, []), // was fb_cutoff

    },
    el.in( { channel: 0 } ), el.in( { channel: 1 } ) )
    );
  } else {
    refs.update('size', { value: early.size });
    refs.update('dimension', { value: early.dimension });
    refs.update('drive', { value: early.drive });
    refs.update('preDelay', { value: early.preDelay });
    refs.update('excursion', { value: early.excursion });
    refs.update('build', { value: early.build });
    refs.update('preScape', { value: early.preScape });
    refs.update('tone', { value: early.tone * 16000 });
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
