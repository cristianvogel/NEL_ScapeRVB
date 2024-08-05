import {Renderer, el, createNode } from '@elemaudio/core';
import {RefMap} from './RefMap';
import srvb from './srvb';

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  __postNativeMessage__( JSON.stringify(batch) );
});



// Define our paths always uppercase, even if the filename has lowercase
// because it is a Map key, not a real fs path
const paths = [
  "LONG_AMB",
  "EUROPA_PAIR"
];

// Next, a RefMap for coordinating our refs
let refs = new RefMap(core);

// Create our custom nodes
let convolver = (props, ...childs) => createNode("convolver", props, childs);

// Holding onto the previous state allows us a quick way to differentiate
// when we need to fully re-render versus when we can just update refs
let prevState = null;

function shouldRender(prevState, nextState) {
  return (prevState === null) || (nextState ===null) || (prevState.sampleRate !== nextState.sampleRate);
}

// The important piece: here we register a state change callback with the native
// side. This callback will be hit with the current processor state any time that
// state changes.
//
// Given the new state, we simply update our refs or perform a full render depending
// on the result of our `shouldRender` check.
globalThis.__receiveStateChange__ = (serializedState) => {
 
  const state = JSON.parse(serializedState);

  let tail = ( _path, key, channel, attenuationDb = -24, _in  ) => {

    let path = _path + "_" + channel; // use upper case for everything in path
    console.log("path", path);
    let result = convolver( { path, key }, el.mul( el.db2gain( el.const( {value: attenuationDb, key: "attIr_" + path} ) ) , _in ) )
    return result;
  };

  let blend = (  g, channel, _in ) => {
    let a = tail( paths[0], "irA", channel, -18, _in );
    let b = tail( paths[1], "irB", channel, -42, _in );
    let out = el.select( el.sm(g), a, b );
    return out;
  }

  let testInterpolator = el.triangle(0.1)

  let outLR =  [  
   blend(  testInterpolator, "L", el.in( {channel: 0} ) ) ,
   blend(  testInterpolator, "R", el.in( {channel: 1} ) ) 
  ];

  let stats = core.render( 
   ...outLR
  ); // render close


  
  if (shouldRender(prevState, state)) {
    //

  } else {
    // refs.update('size', {value: state.size});
    // refs.update('decay', {value: state.decay});
    // refs.update('mod', {value: state.mod});
    // refs.update('mix', {value: state.mix});
  }

  prevState = state;
};

// NOTE: This is highly experimental and should not yet be relied on
// as a consistent feature.
//
// This hook allows the native side to inject serialized graph state from
// the running elem::Runtime instance so that we can throw away and reinitialize
// the JavaScript engine and then inject necessary state for coordinating with
// the underlying engine.
globalThis.__receiveHydrationData__ = (data) => {
  const payload = JSON.parse(data);
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

// Finally, an error callback which just logs back to native
globalThis.__receiveError__ = (err) => {
  console.log(`[Error: ${err.name}] ${err.message}`);
};
