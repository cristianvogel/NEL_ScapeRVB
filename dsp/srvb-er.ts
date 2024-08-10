//@ts-check

import invariant from "invariant";
import { el, ElemNode } from "@elemaudio/core";
import { rotate, shuffle  } from "@thi.ng/arrays";
import { Smush32 } from "@thi.ng/random";
import * as vec from "@thi.ng/vectors";


let prevDimension = 0;
let primes = next16Primes(3).slice();
let shuffleDimensions = false;
const smush = new Smush32(0xcafebabe);
// Function to shuffle seedArray

// Create an array of 8 shuffled versions of seedArray
const shuffledPrimes: Array<number[]> = Array.from({ length: 16 }).map(() => { shuffle(primes, 16, smush); return primes.slice(); });
const seededNormMinMax: Array<number> = Array.from({ length: 8 }).map(() => smush.normMinMax(0.01, 1.618) );


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

function next16Primes(start): Array<number> {
  const primes: Array<number> = [];
  let num = start + 1;
  while (primes.length < 16) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    num++;
  }
  return primes;
}

// A diffusion step expecting exactly 8 input channels with
// a maximum diffusion time of 500ms
function diffuse( seededNormMinMax, primes: Array<number>, size: number, ...ins) {

  const len = ins.length;   // 8
  const scale = (i)=> Math.sqrt(0.5 / (1 + (primes[i] % len) ) ); ;

  const dels = ins.map(function (input, i) {

    const lineSize = size * 1.0e-2  ;
   
    return el.delay(
      { size: lineSize, key: `srvb-diff:${i}`}, 
       seededNormMinMax[i],
      0,
      (i % 2) ? input : el.mul(1, input) );  // do some polarity permutation
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
function dampFDN(name, sampleRate, primes:Array<number>, tone: ElemNode, size: ElemNode, decay, modDepth, ...ins) {
  const len = ins.length;
  const scale = Math.sqrt(1 / len);
  const md = el.mul( modDepth, 0.05);

  if (len !== 8) throw new Error("Invalid FDN step!");

  const toneDial = (input, offset: number ) => {
    const dial = el.smooth( el.tau2pole(0.5), el.le(tone, 0) );
    const fcLPF =  el.add( 48, el.mul( 12000 + offset, el.sub( 1, el.abs(tone) ) ) ) ;
    return el.select( dial,
      // darker
      el.svf( fcLPF , 1.0e-2 + (offset * 1.0e-3) , el.mul( el.db2gain(1.5), input ) ),
      // brighter
      el.svfshelf( {mode: 'highshelf'}, 650 + offset, 0.5, el.mul( tone , el.db2gain( 6 )) ,  el.mul( el.db2gain(-1), input )  )
  );
  }
  // The unity-gain one pole lowpass here is tuned to taste along
  // the range [0.001, 0.5]. Towards the top of the range, we get into the region
  // of killing the decay time too quickly. Towards the bottom, not much damping.
  const dels = ins.map(function (input, i) {
    return el.add(
      toneDial(input,  primes[i] ),
      el.mul( decay, el.smooth(0.25, el.tapIn({ name: `${name}:fdn${i}` })))
    );
  });

  let mix = H8.map(function (row, i) { 
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col * scale, dels[j]);
      })
    );
  });

  return mix.map(function (mm, i) {
    const modulate = (x, rate, amt) => el.add(x, el.mul( amt, el.cycle(rate) ) );
    const ms2samps = (ms) => sampleRate * (ms / 1000.0);

    const delaySize = el.mul(
        //el.add(1.0, el.mul( 1 + (i % 3), size) ) ,
        // exotic exponential smoothing on size param
        el.add( 1.0, 
          el.mul( 3, el.env( el.tau2pole( el.max( 1.0e-4, el.abs( el.cycle(100) ) ) ), 
          el.tau2pole( el.max( 1.0e-2,  el.abs( el.cycle(50) ) ) ), 
          size ) ) ) ,
        ms2samps( primes[i] )
    );

    // Then we modulate the read position for each tap to add some chorus in the
    // delay network.
    const readPos = modulate(
      delaySize,
      ms2samps(  smush.float() ),
       md 
    );

    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay({ size: Math.abs(ms2samps( 137 - primes[i] )) }, readPos, 0, mm)   // more jiggying
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
  dimension: number; // rounded integerm
  tone: ElemNode;
  // non-signal data
  sampleRate: number;
  key: string;
}

export default function srvbEarly(props: SRVBProps, xl, xr) {
  const { sampleRate, key, dimension } = props;
   if ( prevDimension !== dimension ) { shuffleDimensions = true; prevDimension = dimension; }
 
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
  
  let shufflingPrimes = shuffleDimensions ? shuffledPrimes[dimension] : primes;
  // Diffusion
  const ms2samps = (ms) => sampleRate * (ms / 1000.0);
  const d1 = diffuse( seededNormMinMax, primes, ms2samps( 12.3 ), ...eight); 
  const d2 = diffuse( seededNormMinMax, primes, ms2samps( 51.45 ), ...d1);
  const d3 = diffuse( seededNormMinMax, shufflingPrimes, ms2samps( 42.3 ), ...d2);
  shuffleDimensions = false;
  // Reverb network
  const d4: ElemNode[] = dampFDN(
    `${key}:d4`,
    sampleRate,
    primes,
    props.tone,
    props.size,
    0.004,
    props.excursion,
    ...d3
  );
  let r0: ElemNode[] = dampFDN(
    `${key}:r0`,
    sampleRate,
    primes,
    props.tone,
    props.size,
    props.decay,
    props.excursion,
    ...d4
  );
  // dimension jiggling
  // Create an array of 8 shuffled versions of seedArray
  let r1 = r0.slice();
  let r2 = r0;
  const shuffledChannels: Array<ElemNode[]> = Array.from({ length: 8 }).map(() => { shuffle( r1, 8, smush ); return r1.slice(); });
  if (dimension > 0) { 
    r2 = shuffledChannels[dimension - 1]
  } else { r2 = r0; }

   // interleaved Downmix
  let dimConst = el.sm( el.const( { value: (1/7) * (dimension - 1), key: 'deco_dimension' } ) );
  let yl = el.mul(0.25, el.add(r2[0], el.delay( {key: 'ldeco', size: 1024}, dimConst, 0, r2[2] ), r2[4], r2[6]));
  let yr = el.mul(0.25, el.add(r2[1], el.delay( {key: 'rdeco', size: 512},  dimConst, 0, r2[3] ), r2[5], r2[7]));

  // Wet dry mixing
  return [el.select(props.mix, yl, xl), el.select(props.mix, yr, xr)];
}
  