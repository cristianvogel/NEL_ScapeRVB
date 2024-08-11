//@ts-check

import { el, ElemNode } from "@elemaudio/core";
import { argMax } from "@thi.ng/arrays";
import { Smush32 } from "@thi.ng/random";

// THese number seies are from the OEIS and all sound really cool
const smush = new Smush32(0xcafebabe);
const oeisSequences = [
  [39, 31, 23, 17, 34, 68, 76, 63, 50, 37, 28, 20, 55, 110, 123, 102], // A035506		Stolarsky array read by antidiagonals.  ⭐️⭐️⭐️⭐️
  [16, 22, 31, 40, 52, 68, 90, 121, 152, 192, 244, 312, 402, 523, 644, 796], //  A007604		a(n) = a(n-1) + a(n-1-(number of odd terms so far))
  [22, 37, 21, 59, 27, 43, 24, 83, 35, 53, 26, 31, 20, 29, 18, 67], // A227413		a(1)=1, a(2n)=nthprime(a(n)), a(2n+1)=nthcomposite(a(n)), where nthprime = A000040, nthcomposite = A002808.
  [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79], // A000040		The prime numbers: a(n) = n-th prime.
  [17, 6, 33, 10, 65, 7, 129, 18, 11, 257, 513, 34, 1025, 13, 19, 66], // 		Inverse of sequence A052330 considered as a permutation of the natural numbers.
  [16, 5, 32, 9, 64, 6, 128, 17, 10, 256, 512, 33, 1024, 12, 18, 65], // A052331		Inverse of A052330; A binary encoding of Fermi-Dirac factorization of n, shown in decimal.
  [18, 22, 30, 42, 52, 82, 84, 126, 142, 174, 178, 180, 186, 192, 198, 216], // A064361		Numbers k such that prime(k)^2 + k is prime.
  [34, 47, 62, 79, 97, 118, 141, 166, 192, 221, 253, 285, 320, 357, 395, 436], // A064356		Dimension of J_(12n,n+1), the Jacobi form of weight 12n and index n+1.
  [11, 27, 59, 122, 266, 38, 67, 143, 232, 10, 22, 46, 101, 177, 376, 609], // A0355077 	Inverse Stolarsky array read by antidiagonals
  [34, 76, 63, 71, 50, 37, 25, 20, 55, 123, 102, 115, 81, 60, 41, 33], // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals. ⭐️⭐️⭐️
  [97, 66, 53, 35, 26, 144, 322, 267, 301, 212, 157, 107, 86, 57, 43, 28], // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals. ⭐️⭐️⭐️ quite large
  [ 27, 17, 11, 28, 7, 29, 18, 2, 30, 19, 12, 31, 8, 32, 20, 5 ], // A003603		Fractal sequence obtained from Fibonacci numbers 
  [17, 34, 13, 28, 25, 46, 75, 42, 69, 104, 37, 62, 95, 58, 55, 86 ], // A316667		Squares visited by a knight moving on a spirally numbered board always to the lowest available unvisited square.
  [ 9, 17, 25, 37, 49, 65, 81, 101, 121, 145, 169, 197, 225, 257, 289, 325], // A080335 Diagonal in square spiral or maze arrangement of natural numbers.
  [ 17, 15, 14, 19, 16, 23, 18, 25, 22, 21, 20, 27, 26, 29, 24, 31, 35 ], // A257340		Arrange numbers in a single clockwise spiral so that each number is relatively prime to its four (N,S,E,W) neighbors.
  [ 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38 ] // A005132		Recamán's sequence 
];
export const NUM_SEQUENCES = oeisSequences.length - 1;

const seededNormMinMax: Array<number> = Array.from({ length: 8 }).map(() =>
  smush.normMinMax(0.01, 1.618)
); /// not using for now

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
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, -1, 1, -1, 1, -1, 1, -1],
  [1, 1, -1, -1, 1, 1, -1, -1],
  [1, -1, -1, 1, 1, -1, -1, 1],
  [1, 1, 1, 1, -1, -1, -1, -1],
  [1, -1, 1, -1, -1, 1, -1, 1],
  [1, 1, -1, -1, -1, -1, 1, 1],
  [1, -1, -1, 1, -1, 1, 1, -1],
];

// A diffusion step expecting exactly 8 input channels with
// a maximum diffusion time of 500ms
type Sequence = {
  integers: Array<number>;
  length: () => number;
  max: number;
};

type DiffuseProps = {
  seededNormMinMax?: number;
  sequence: Sequence;
  maxLengthSamp: number;
};

function diffuse(props: DiffuseProps, ...ins) {
  const { maxLengthSamp: size } = props;
  const { sequence } = props;
  const structure = sequence.integers;
  const structureMax = sequence.max;
  const len = ins.length; // 8

  const delayLineLevel = (i: number) => { return ( 1 - (structure[i] % structure.length) / structureMax ) }; // tap level normalised and distributed by series
// (i)=> Math.sqrt(0.5 / (1 + (series[i] % len) ) ); ;
  const dels = ins.map(function (input, i) {
    const lineSize = size * 1.0e-2; // perceptual scaling

    return el.delay(
      { size: lineSize, key: `srvb-diff:${i}` },
      1, //more randomisation seededNormMinMax[i],
      0,
      el.mul(input, el.db2gain(-1.5))
    );
  });
  return H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col * delayLineLevel(i), dels[j]);
      })
    );
  });
}

// An eight channel feedback delay network
type FDNProps = {
  name: string;
  sampleRate: number;
  sequence: Sequence;
  tone: ElemNode;
  size: ElemNode;
  decay: ElemNode;
  modDepth: ElemNode;
};

function dampFDN(props: FDNProps, ...ins) {
  const len = ins.length;
  const { name, sequence, tone, size, decay, modDepth } = props;
  const { sampleRate } = props;
  const structure = sequence.integers;
  const structureMax = sequence.max;

  const tapDelayLevel = (i: number) => (1/len) * ( 1 - (structure[i] % structure.length) / structureMax ); // tap level normalised and distributed by series


  const md = modDepth;

  if (len !== 8) throw new Error("Invalid FDN step!");

  const toneDial = (input, offset: number) => {
    const dial = el.smooth(el.tau2pole(0.5), el.le(tone, 0));
    const fcLPF = el.add(48, el.mul(12000 + offset, el.sub(1, el.abs(tone) ) ) );
    return el.select(
      dial,
      // darker
      el.svf(fcLPF, 1 / offset, el.mul( el.db2gain(0.5) , input)),
      // brighter
      el.svfshelf(
        { mode: "highshelf" },
        650 + offset,
        0.5,
        el.mul(tone, el.db2gain(6)),
        el.mul(el.db2gain(-1), input)
      )
    );
  };
  // The unity-gain one pole lowpass here is tuned to taste along
  // the range [0.001, 0.5]. Towards the top of the range, we get into the region
  // of killing the decay time too quickly. Towards the bottom, not much damping.
  const dels = ins.map(function (input, i) {
    return el.add(
      toneDial(input, structure[i]),
      el.mul(decay, el.smooth(0.25, el.tapIn({ name: `${name}:fdn${i}` })))
    );
  });

  let mix = H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col * tapDelayLevel(i), dels[j]);
      })
    );
  });

  return mix.map(function ( mm, i ) {
    const ms2samps = (ms) => sampleRate * (ms / 1000.0);

    const delaySize = el.mul(
      el.add( 1.0, el.sm(size) ),
      ms2samps( structure[i * 2] % structure.length )
    );

    const excursion = (x, rate, amt) => el.add(x, el.mul(amt, el.cycle(rate)));

    const delayScaleWithExcursion = excursion(delaySize, smush.normMinMax(0.001, 0.1), md);

    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay(
        { size: ms2samps( structure[i] ) },
        delayScaleWithExcursion,
        0.0,
       // el.mul( el.db2gain(7.5), mm )
       mm
      ) 
    );
  });
}
/** /
 * /// MAIN
**/
interface SRVBProps {
  size: ElemNode;
  decay: ElemNode;
  excursion: ElemNode;
  mix: ElemNode;
  tone: ElemNode;
  dimension: ElemNode; // rounded integer behaviour
  // non-signal data
  sampleRate: number;
  structure: number;
  key: string;
}

export default function srvbEarly(props: SRVBProps, xl, xr) {
  const { sampleRate, key, dimension, structure } = props;

  const series = oeisSequences[structure || 0];
  console.log(`Using series ${structure} `);
  const seriesMax = series[argMax(series)];
  console.log(`Max value in series is ${seriesMax}`);

  const sequence = {
    integers: series,
    max: seriesMax,
    length: () => series.length,
  };
  // normalise series using seriesMax

  // Upmix to eight channels
  const mid = el.mul(0.5, el.add(xl, xr));
  const side = el.mul(0.5, el.sub(xl, xr));
  const four = [xl, xr, mid, side];
  const eight = [...four, ...four.map((x) => el.mul(-1, x))];

  // Diffusion over 8 channels using core sequence for coefficients
  const ms2samps = (ms) => sampleRate * (ms / 1000.0);
  const d1 = diffuse({ sequence, maxLengthSamp: ms2samps(137) }, ...eight);
  const d2 = diffuse({ sequence, maxLengthSamp: ms2samps(137) }, ...d1);
  const d3 = diffuse({ sequence, maxLengthSamp: ms2samps(137) }, ...d2);

  // Reverb network
  const d4: ElemNode[] = dampFDN(
    {
      name: `${key}:d4`,
      sampleRate,
      sequence,
      tone: props.tone,
      size: props.size,
      decay: 0.01,
      modDepth: props.excursion,
    },
    ...d3
  );
  let r0: ElemNode[] = dampFDN(
    {
      name: `${key}:r0`,
      sampleRate,
      sequence,
      tone: props.tone,
      size: props.size,
      decay: props.decay,
      modDepth: props.excursion,
    },
    ...d4
  );

  // interleaved dimensional Downmix
  let dmx: ElemNode[] = r0.map((x, i) =>
    el.delay(
      { key: `downmix:${i}`, size: ms2samps(series[i]) },
      el.sm(el.sub(1, dimension)),
      0,
      x
    )
  );

  let yl = el.mul(el.db2gain(-3), el.add(dmx[0], r0[2], dmx[4], r0[6]));
  let yr = el.mul(el.db2gain(-3), el.add(r0[1], dmx[3], r0[5], dmx[7]));
  // Wet dry mixing
  return [el.select(props.mix, yl, xl), el.select(props.mix, yr, xr)];
}
