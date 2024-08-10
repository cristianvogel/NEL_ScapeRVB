//@ts-check

import { el, ElemNode } from "@elemaudio/core";
import {  argMax  } from "@thi.ng/arrays";
import { Smush32 } from "@thi.ng/random";




// THese number seies are from the OEIS and all sound really cool
const smush = new Smush32(0xcafebabe);
const oeisSequences = [ 
  [ 11, 27, 59, 122, 266, 38, 67, 143, 232, 10, 22, 46, 101, 177, 376, 609 ], // A0355077 	Inverse Stolarsky array read by antidiagonals 
  [ 39, 31, 23, 17, 34, 68, 76, 63, 50, 37, 28, 20, 55, 110, 123, 102 ], // A035506		Stolarsky array read by antidiagonals.  ⭐️⭐️⭐️⭐️
  [ 34, 76, 63, 71, 50, 37, 25, 20, 55, 123, 102, 115, 81, 60, 41, 33 ], // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals. ⭐️⭐️⭐️
  [ 97, 66, 53, 35, 26, 144, 322, 267, 301, 212, 157, 107, 86, 57, 43, 28 ] // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals. ⭐️⭐️⭐️ quite large
 ];

let series = oeisSequences[ 1 ];
let seriesMax = series[argMax(series)];
const seededNormMinMax: Array<number> = Array.from({ length: 8 }).map(() => smush.normMinMax(0.01, 1.618) );   /// not using for now 


// A size 8 Hadamard matrix constructed using Numpy and Scipy.
//
// The Hadamard matrix satisfies the property H*H^T = nI, where n is the size
// of the matrix, I the identity, and H^T the transpose of H. Therefore, we have
// orthogonality and stability in the feedback path if we scale according to (1 / n)
// along the diagonal, which we do internally by multiplying each matrix element
// by Math.sqrt(1 / n), which yields the identity as above.
//
// @see https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.linalg.hadamard.html
// @see https://nhigham.com/2020/04/10/what-is-a-hadamard-matrix/
const H8 = [
  [ 1,  1,  1,  1,  1,  1,  1,  1],
  [ 1, -1,  1, -1,  1, -1,  1, -1],
  [ 1,  1, -1, -1,  1,  1, -1, -1],
  [ 1, -1, -1,  1,  1, -1, -1,  1],
  [ 1,  1,  1,  1, -1, -1, -1, -1],
  [ 1, -1,  1, -1, -1,  1, -1,  1],
  [ 1,  1, -1, -1, -1, -1,  1,  1],
  [ 1, -1, -1,  1, -1,  1,  1, -1]
];


// A diffusion step expecting exactly 8 input channels with
// a maximum diffusion time of 500ms
function diffuse( seededNormMinMax, series: Array<number>, size: number, ...ins) {

  const len = ins.length;   // 8
  const scale = (i)=> Math.sqrt(0.5 / (1 + (series[i] % len) ) ); ;

  const dels = ins.map(function (input, i) {

    const lineSize = size * 1.0e-2  ;
   
    return el.delay(
      { size: lineSize, key: `srvb-diff:${i}`}, 
       //seededNormMinMax[i],
       1,
      0,
     // (i % 2) ? input : el.mul( -1, input) );  // do some polarity permutation?
      el.mul( input , el.db2gain( -1.5 ) )
    );
  });
  return H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col * scale(i), dels[j]);
      })
    );
  });
}

// An eight channel feedback delay network with a one-pole lowpass filter in
// the feedback loop for damping the high frequencies faster than the low.
//
// @param {string} name for the tap structures
// @param {el.const} size in the range [0, 1]
// @param {el.const} decay in the range [0, 1]
// @param {el.const} modDepth in the range [0, 1]
// @param {...core.Node} ...ins eight input channels
function dampFDN(name, sampleRate, series:Array<number>, tone: ElemNode, size: ElemNode, decay, modDepth, ...ins) {
  const len = ins.length;

  const scale = (i)=> { return ( Math.min( 1/8, ( series[i] / seriesMax ) ) ) } ;   // get normalised and distributed by series

  const md = modDepth;

  if (len !== 8) throw new Error("Invalid FDN step!");

  const toneDial = (input, offset: number ) => {
    const dial = el.smooth( el.tau2pole(0.5), el.le(tone, 0) );
    const fcLPF =  el.add( 48, el.mul( 12000 + offset, el.sub( 1, el.abs(tone) ) ) ) ;
    return el.select( dial,
      // darker
      el.svf( fcLPF , 1.0e-2 + (offset * 1.0e-3) , el.mul( el.db2gain( 0.5 ), input ) ),
      // brighter
      el.svfshelf( {mode: 'highshelf'}, 650 + offset, 0.5, el.mul( tone , el.db2gain( 6 )) ,  el.mul( el.db2gain(-1), input )  )
  );
  }
  // The unity-gain one pole lowpass here is tuned to taste along
  // the range [0.001, 0.5]. Towards the top of the range, we get into the region
  // of killing the decay time too quickly. Towards the bottom, not much damping.
  const dels = ins.map(function (input, i) {
    return el.add(
      toneDial(input,  series[i] ),
      el.mul( decay, el.smooth(0.25, el.tapIn({ name: `${name}:fdn${i}` })))
    );
  });

  let mix = H8.map(function (row, i) { 
    return el.add(
      ...row.map(function (col, j) {
        return el.mul( col * scale(i), dels[j]);
      })
    );
  });

   return mix.map(function (mm, i) {
    const ms2samps = (ms) => sampleRate * (ms / 1000.0);

    const delaySize = el.mul(
        el.add( 1.0, 
          el.sm( size )) ,
        ms2samps( series[i * 2] )
    );

    const modulate = (x, rate, amt) => el.add(x, el.mul( amt, el.cycle( rate ) ) );

    const readPos = modulate(
      delaySize,
      smush.normMinMax( 0.001, 0.1 ),
      md 
    );
    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay( { size: Math.abs( ms2samps(  series[i] ) ) }, readPos, 0.0, el.mul( el.db2gain( 7.5 ) , mm ))   // more jiggying
    );
  });
}

// Our main stereo reverb.
//
// Upmixes the stereo input into an 8-channel diffusion network and
// feedback delay network. Must supply a `key` prop to uniquely identify the
// feedback taps in here.

interface SRVBProps {
  size: ElemNode;
  decay: ElemNode;
  excursion: ElemNode;
  mix: ElemNode;
  tone: ElemNode;  
  dimension: ElemNode; // rounded integer behaviour
  // non-signal data
  sampleRate: number;
  geometry: number;
  key: string;
}

export default function srvbEarly(props: SRVBProps, xl, xr) {



  const { sampleRate, key, dimension, geometry } = props;

  let series = oeisSequences[ geometry  ];
  let seriesMax = series[argMax(series)];

  // Upmix to eight channels
  const mid =  el.mul(0.5, el.add(xl, xr) ) ;
  const side = el.mul(0.5, el.sub(xl, xr));
  const four = [
    xl,
    xr,
    mid,
    side,
  ];
  const eight = [...four, ...four.map((x) => el.mul(-1, x))];
  

  // Diffusion
  const ms2samps = (ms) => sampleRate * (ms / 1000.0);
  const d1 = diffuse( 1, series, ms2samps( 137 ), ...eight); 
  const d2 = diffuse( 1, series, ms2samps( 137 ), ...d1);
  const d3 = diffuse( 1, series, ms2samps( 137 ), ...d2);

  // const d1 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...eight); 
  // const d2 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...d1);
  // const d3 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...d2);

  // Reverb network
  const d4: ElemNode[] = dampFDN(
    `${key}:d4`,
    sampleRate,
    series,
    props.tone,
    props.size,
    0.01,
    props.excursion,
    ...d3
  );
  let r0: ElemNode[] = dampFDN(
    `${key}:r0`,
    sampleRate,
    series,
    props.tone,
    props.size,
    props.decay,
    props.excursion,
    ...d4
  );

 
   // interleaved dimensional Downmix
let dmx = r0.map( (x, i) => el.delay( {key: `downmix:${i}`, size: ms2samps( series[i] ) }, el.sm( el.sub( 1, dimension ) ), 0, x) );

  let yl = el.mul( el.db2gain(-3), el.add( dmx[0],  r0[2] , dmx[4],  r0[6] ) ); 
  let yr = el.mul( el.db2gain(-3), el.add(  r0[1],  dmx[3] ,  r0[5], dmx[7] ) );
  // Wet dry mixing
  return [el.select(props.mix, yl, xl), el.select(props.mix, yr, xr)];
}
  