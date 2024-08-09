//@ts-check

import invariant from "invariant";
import { el, ElemNode } from "@elemaudio/core";

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
function diffuse(primes: Array<number>, size: number, ...ins) {

  const len = ins.length;
  const scale = Math.sqrt(1 / len);

  const dels = ins.map(function (input, i) {
    //const lineSize = size > 0.75 ? size * ((i + 1) / len) : size * ( 1  / len )  ;
    const lineSize = size * ( 1  / len )  ;
   
    return el.sdelay({ size: lineSize }, (i % 2) ? input : el.mul(-1, input) );  // do some polarity permutation
  });
  return H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col * scale, dels[j]);
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
  const md = el.mul( modDepth, 0.02);

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
      toneDial(input,  i * 10 ),
      el.mul(decay, el.smooth(0.0105, el.tapIn({ name: `${name}:fdn${i}` })))
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
      el.add(  5.0e-2 * primes[i + 5]   , el.mul( 1.0e-2, md)) ,
      ms2samps( primes[15 - i] * 5.0e-3 )
    );

    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay({ size: ms2samps(700 + primes[i]) }, readPos, 0, mm)   // more jiggying
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
  dimension: ElemNode;
  tone: ElemNode;
  // non-signal data
  sampleRate: number;
  key: string;
}

export default function srvbEarly(props: SRVBProps, xl, xr) {
  const { sampleRate, key } = props;

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
  const primes = next16Primes(13);
  const d1 = diffuse(primes, ms2samps(42.3), ...eight); // from EUVerb
  const d2 = diffuse(primes, ms2samps(51.45), ...d1);
  const d3 = diffuse(primes, ms2samps(76.91), ...d2);

  // Reverb network
  const d4 = dampFDN(
    `${key}:d4`,
    sampleRate,
    primes,
    props.tone,
    props.size,
    0.004,
    props.excursion,
    ...d3
  );
  const r0 = dampFDN(
    `${key}:r0`,
    sampleRate,
    primes,
    props.tone,
    props.size,
    props.decay,
    props.excursion,
    ...d4
  );

  // interleaved Downmix
  let yl = el.mul(0.25, el.add(r0[0], r0[2], r0[4], r0[6]));
  let yr = el.mul(0.25, el.add(r0[1], r0[3], r0[5], r0[7]));

  // Wet dry mixing
  return [el.select(props.mix, yl, xl), el.select(props.mix, yr, xr)];
}
  