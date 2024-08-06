import {Renderer, el, createNode } from '@elemaudio/core';
import {RefMap} from './RefMap';
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";
import { FORMATTER } from "@thi.ng/vectors";

// First, we initialize a custom Renderer instance that marshals our instruction
// batches through the __postNativeMessage__ function to direct the underlying native
// engine.
let core = new Renderer((batch) => {
  __postNativeMessage__( JSON.stringify(batch) );
});



// Next, a RefMap for coordinating our refs
let refs = new RefMap(core);

// Create our custom nodes
let convolver = (props, ...childs) => createNode("convolver", props, childs);

// Define our paths always uppercase, even if the filename has lowercase
// because it is a Map key, not a real fs path
const responses = [
  "GLASS",
  "AMBIENCE",
  "TANGLEWOOD",
  "EUROPA"
];

// use the generic `ramp()` factory function with a custom implementation
// see: https://docs.thi.ng/umbrella/ramp/interfaces/RampImpl.html
const nFader = ramp(
  // use a vector interpolation preset with the VEC3 API
  HERMITE_V(VEC3),
  // keyframes used for crossfading between 4 IRs
  [
      [0.0,   [1, 0, 0, 0]], // a
      [0.125,  [0, 1, 0, 0]], // b
      [0.45,  [0, 0, 1, 0]], // c
      [0.75,  [0, 0, 0.2, 0]],
      [1.0,   [0, 0, 0, 1]], // d
  ]
);

// DSP not needed inside of render hook
let tail = ( _path, SCAPED, key = "attIr_", channel, attenuationDb = -24, _in  ) => {
  let path = SCAPED + _path + "_" + channel; // use upper case for everything in path
  let result = convolver( { path, key }, el.mul( el.db2gain( el.const( {value: attenuationDb, key: key + path} ) ) , _in ) )
  return result;
};

  
  // HERMITE vector cross fader

  function createHermiteInterpolationFor(channel, scaped = "", interpolator) {
    return el.add(
      el.mul(el.sm(el.const({ value: nFader.at(interpolator)[0], key: `ir1_${channel}` })), tail(responses[0], scaped, "ir0", channel, -20, el.in({ channel: channel === "L" ? 0 : 1 }))),
      el.mul(el.sm(el.const({ value: nFader.at(interpolator)[1], key: `ir2_${channel}` })), tail(responses[1], scaped, "ir1", channel, -18, el.in({ channel: channel === "L" ? 0 : 1 }))),
      el.mul(el.sm(el.const({ value: nFader.at(interpolator)[2], key: `ir3_${channel}` })), tail(responses[2], scaped, "ir2", channel, -24, el.in({ channel: channel === "L" ? 0 : 1 }))),
      el.mul(el.sm(el.const({ value: nFader.at(interpolator)[3], key: `ir4_${channel}` })), tail(responses[3], scaped, "ir3", channel, -48, el.in({ channel: channel === "L" ? 0 : 1 })))
    );
  }


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


  let interpolator = state.decay;
  let scaped = state.size > 0.5 ? "SCAPED" : "";


  let outLR =  [ 
    createHermiteInterpolationFor("L", scaped, interpolator),
    createHermiteInterpolationFor("R", scaped, interpolator)
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
