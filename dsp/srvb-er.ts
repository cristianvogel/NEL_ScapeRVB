//@ts-check

import { el, ElemNode } from "@elemaudio/core";
import { shuffle, rotate, argMax  } from "@thi.ng/arrays";
import { Smush32 } from "@thi.ng/random";


const smush = new Smush32(0xcafebabe);
const oeisSequences = [ 
 
  [ 38, 67, 143, 232, 10, 22, 46, 101, 177, 376, 609, 11, 27, 59, 122, 266 ], // A0355077
  [ 35, 28, 117, 29, 119, 45, 37, 112, 123, 38, 55, 126, 39, 47, 129, 56 ], // A362023
  
 ];
// Function to shuffle seedArray
// let primes =  rotate(setOfPrimes(19).slice(), -8) ;
let series = oeisSequences[0];

let seriesMax = series[argMax(series)];

// Create an array of 8 shuffled versions of seedArray
const shuffledSeries: Array<number[]> = Array.from({ length: 16 }).map(() => { shuffle(series, 8, smush); return series.slice(); });
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

function setOfPrimes(start): Array<number> {
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
    if (isPrime) primes.push( num  );
    num++;
  }
  return primes;
}



// A diffusion step expecting exactly 8 input channels with
// a maximum diffusion time of 500ms
function diffuse( seededNormMinMax, series: Array<number>, size: number, ...ins) {

  const len = ins.length;   // 8
  const scale = (i)=> Math.sqrt(0.5 / (1 + (series[i] % len) ) ); ;

  const dels = ins.map(function (input, i) {

    const lineSize = size * 1.0e-2  ;
   
    return el.delay(
      { size: lineSize, key: `srvb-diff:${i}`}, 
       seededNormMinMax[i],
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

    const modulate = (x, rate, amt) => el.add(x, el.mul( el.sqrt(amt, el.cycle(rate) ) ));

    const readPos = modulate(
      delaySize,
      smush.float() * 0.001 ,
      md 
    );
    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay( { size: Math.abs( ms2samps(  series[i] ) ) }, readPos, 0.0, el.mul( el.db2gain( 6 ) , mm ))   // more jiggying
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
  key: string;
}

export default function srvbEarly(props: SRVBProps, xl, xr) {
  const { sampleRate, key, dimension } = props;

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
  const d1 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...eight); 
  const d2 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...d1);
  const d3 = diffuse( seededNormMinMax, series, ms2samps( 137 ), ...d2);

  // Reverb network
  const d4: ElemNode[] = dampFDN(
    `${key}:d4`,
    sampleRate,
    series,
    props.tone,
    props.size,
    0.004,
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
  