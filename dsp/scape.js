import invariant from 'invariant';
import { el } from '@elemaudio/core';
import { HERMITE_V, VEC3, ramp } from "@thi.ng/ramp";


export default function scape(props, xl, xr) {

    invariant(typeof props === 'object', 'Unexpected props object');

  let tailSectionLR = ( _inputs ) =>  [ 
    createHermiteVInterpolation( 0, shaped, fader, _inputs[0] ),
    createHermiteVInterpolation( 1, shaped, fader, _inputs[1] )
  ];

// Define our paths always uppercase, even if the filename has lowercase
// because it is a Map key, not a real fs path
const responses = [
  { name: "GLASS", att: -24 },
  { name: "AMBIENCE", att: -12 },
  { name: "TANGLEWOOD", att: -24 },
  { name: "EUROPA", att: -36 }
];

// use the generic `ramp()` factory function with a custom implementation
// see: https://docs.thi.ng/umbrella/ramp/interfaces/RampImpl.html
const vectorInterp = ramp(
  // use a vector interpolation preset with the VEC3 API
  HERMITE_V(VEC3),
  // keyframes used for crossfading between 4 IRs
  [
      [0.0,   [1, 0, 0, 0]], // a
      [0.125,  [0, 1, 0, 0]], // b
      [0.45,  [0, 0, 1, 0]], // c
      [1.0,   [0, 0, 0, 0.9]], // d
  ]
);

// DSP not needed inside of render hook
let tail = ( _path, shaped, key = "attIr_", channel = 0, attenuationDb = -24, _in  ) => {
  let path = (shaped ? "SHAPED_" : "") + _path + "_" + channel; // use upper case for everything in path
  let result = convolver( { path, key }, el.mul( el.db2gain( el.const( {value: attenuationDb, key: 'att_'+ key} ) ) , _in ) )
  return result;
};

  
  // HERMITE vector cross fader

  function createHermiteVInterpolation( channel = 0, shaped = false, x) {
    let mixer = []
    responses.forEach((response, index) => {
      const { name, att } = response;
      const key = `ir${name+index}`;

      mixer.push(
      el.mul(
        el.sm(
          el.const( { value: vectorInterp.at(x)[index], key }  )
        ),
          tail( name, shaped, key, channel, att, el.in( { channel } ) )
      )
    );
    });
    return el.add(...mixer)
  }

    return [
        ...tailSectionLR([xl, xr])
    ];
}