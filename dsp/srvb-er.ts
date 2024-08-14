//@ts-check

import { el, ElemNode } from "@elemaudio/core";
import { EPS } from "@thi.ng/math";
import { Smush32 } from "@thi.ng/random";
import { DiffuseProps, FDNProps, SRVBProps } from "../src/types";

// THese number seies are from the OEIS and all sound really cool
const smush = new Smush32(0xcafebabe);
const  OEIS_SEQUENCES_16 = [
  [39, 31, 23, 17, 34, 68, 76, 63, 50, 37, 28, 20, 55, 110, 123, 102], // A035506		Stolarsky array read by antidiagonals.  ⭐️⭐️⭐️⭐️
  [16, 22, 31, 40, 52, 68, 90, 121, 152, 192, 244, 312, 402, 523, 644, 796], //  A007604		a(n) = a(n-1) + a(n-1-(number of odd terms so far))
  [22, 37, 21, 59, 27, 43, 24, 83, 35, 53, 26, 31, 20, 29, 18, 67], // A227413		a(1)=1, a(2n)=nthprime(a(n)), a(2n+1)=nthcomposite(a(n)), where nthprime = A000040, nthcomposite = A002808.
  [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79], // A000040		The prime numbers: a(n) = n-th prime.
  [17, 6, 33, 10, 65, 7, 129, 18, 11, 257, 513, 34, 1025, 13, 19, 66], // 		Inverse of sequence A052330 considered as a permutation of the natural numbers.
  [17, 19, 23, 26, 30, 35, 40, 46, 52, 60, 67, 77, 87, 98, 111, 124], // A000607		Number of partitions of n into prime parts.
  [13, 18, 23, 30, 37, 47, 57, 70, 84, 101, 119, 141, 164, 192, 221, 255], // A01401 Number of partitions of n into at most 5 parts.
  [34, 47, 62, 79, 97, 118, 141, 166, 192, 221, 253, 285, 320, 357, 395, 436], // A064356		Dimension of J_(12n,n+1), the Jacobi form of weight 12n and index n+1.
  [17, 12, 26, 18, 37, 27, 54, 38, 76, 54, 106, 76, 145, 104, 199, 142], // A096441		Number of palindromic and unimodal compositions of n. 
  [15, 18, 22, 27, 32, 38, 46, 54, 64, 76, 89, 104, 122, 142, 165, 192], // A000009 number of partitions of n into distinct parts; number of partitions of n into odd parts.
  [97, 66, 53, 35, 26, 144, 322, 267, 301, 212, 157, 107, 86, 57, 43, 28], // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals.  quite large
  [16, 42, 20, 32, 24, 52, 18, 40, 24, 36, 28, 58, 16, 60, 30, 36], // A000010		Euler totient function phi(n)
  [17, 34, 13, 28, 25, 46, 75, 42, 69, 104, 37, 62, 95, 58, 55, 86], // A316667		Squares visited by a knight moving on a spirally numbered board always to the lowest available unvisited square.
  [17, 21, 26, 31, 37, 45, 53, 63, 75, 88, 103, 121, 141, 164, 191, 221], // A111133		Number of partitions of n into at least two distinct parts.
  [16, 22, 29, 37, 46, 56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211], // A000124		Central polygonal numbers (the Lazy Caterer's sequence)
  [17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38], // A005132		Recamán's sequence
];
// crop down to sequences of 8
export const OEIS_SEQUENCES = OEIS_SEQUENCES_16.map((seq) => seq.slice(0, 8));

export const NUM_SEQUENCES = OEIS_SEQUENCES.length - 1;

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
function diffuse(props: DiffuseProps, ...ins) {
  const { maxLengthSamp } = props;
  const structure: Array<ElemNode> = props.structure;

  const len = ins.length; // 8

  /* 
 keep this one uniform, have tried using the 
 sequence data, but it loses all energy 
 */
  const diffusionStageLevel = (): number => {
    const baseAtt = Math.sqrt(1.2 / len);
    return baseAtt;
  };

  const dels = ins.map(function (input, i) {
    return el.delay(
      { size: maxLengthSamp, key: `srvb-diff:${i}` },
      el.smooth( el.tau2pole( i * 0.21) , structure[i % structure.length] ) ,
      0,
      input
    );
  });
  return H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col, diffusionStageLevel(), dels[j]);
      })
    );
  });
}

// An eight channel feedback delay network
function dampFDN(props: FDNProps, ...ins) {
  const len = ins.length;
  const { name, tone, size, decay, modDepth } = props;
  const { sampleRate } = props;
  const structure: Array<ElemNode> = props.structureArray;
  const structureMax: ElemNode = props.structureMax;

  /**
   *
   * normalised scale the level of the taps according
   * to the structure. Shortest, loudest...
   *
   */
  const tapDelayLevel = (i: number) => {
    const baseAtt = Math.sqrt(1 / len);
    const normStruct = el.max(
      el.db2gain(-35),
      el.sub(1 + EPS, el.div(structure[i % structure.length], structureMax)  )
    );
    // this will help the taps not explode but have enough energy
    return  el.min( el.db2gain(-0.5) , el.mul( normStruct, baseAtt ) );
  };

  //const md = modDepth;

  const toneDial = (input, offset: ElemNode) => {
    const dial = el.smooth(el.tau2pole(0.5), el.le(tone, 0));
    const fcLPF = el.add(
      48,
      el.mul(el.add(12000, offset), el.sub(1, el.abs(tone)))
    );
    return el.select(
      dial,
      // darker
      el.svf(
        fcLPF,
        el.div(1, el.square(offset)),
        el.mul(el.db2gain(0.5), input)
      ),
      // brighter
      el.svfshelf(
        { mode: "highshelf" },
        el.add(650, offset),
        0.5,
        el.mul(tone, el.db2gain(6)),
        el.mul(el.db2gain(-1), input)
      )
    );
  };
  // The unity-gain one pole lowpass here is tuned to taste along
  // the range [0.001, 0.5]. Towards the top of the range, we get into the region
  // of killing the decay time too quickly. Towards the bottom, not much damping.
  const dels = ins.map( function (input, i) {
    return el.add(
      toneDial(input, structure[i]),
      el.mul(
        1 + EPS,
        decay,
        el.smooth(0.0025, el.tapIn({ name: `${name}:fdn${i}` }))
      )
    );
  });

  let mix = H8.map(function (row, i) {
    return el.add(
      ...row.map(function (col, j) {
        return el.mul(col, tapDelayLevel(i), dels[j]);
      })
    );
  });

  return mix.map(function (mm, i) {
    const ms2samps = (ms: number): number => sampleRate * (ms / 1000.0);

    const delayScale = el.mul(
      el.add(1.0, el.sm(size)),
       el.ms2samps( el.smooth( el.tau2pole( i * 0.25) , structure[i % structure.length] ) ) 
    );

    return el.tapOut(
      { name: `${name}:fdn${i}` },
      el.delay({ size: ms2samps(137) }, delayScale , 0.0, mm)
    );
  });
} // end of dampFDN
/** /
 * /// MAIN
 **/

export default function srvbEarly(props: SRVBProps, inputs: ElemNode[], ...structureArray: ElemNode[]) {
  // xl , xr -- unprocessed input
  const { sampleRate, key, position, structureMax, mix } = props;
  const [xl, xr] = inputs;
  // input attenuation
  const _xl = el.dcblock(el.mul(xl, el.db2gain(-1.5)));
  const _xr = el.dcblock(el.mul(xl, el.db2gain(-1.5)));
  // Upmix to eight channels
  const mid = el.mul(0.5, el.add(_xl, _xr));
  const side = el.mul(0.5, el.sub(_xl, _xr));
  const four = [_xl, _xr, mid, side];
  const eight = [...four, ...four.map((x) => el.mul(-1, x))];
  // Diffusion over 8 channels using core sequence for coefficients
  const ms2samps = (ms) => sampleRate * (ms / 1000.0);

  const d1 = diffuse(
    { structure: structureArray, structureMax , maxLengthSamp: ms2samps(43) },
    ...eight
  );
  const d2 = diffuse(
    { structure: structureArray, structureMax , maxLengthSamp: ms2samps(97) },
    ...d1
  );
  const d3 = diffuse(
    { structure: structureArray, structureMax , maxLengthSamp: ms2samps(117) },
    ...d2
  );

  // Reverb network
  const d4: ElemNode[] = dampFDN(
    {
      name: `${key}:d4`,
      sampleRate,
      structureArray,
      structureMax,
      tone: props.tone,
      size: props.size,
      decay: 0.004,
    },
    ...d3
  );
  let r0: ElemNode[] = dampFDN(
    {
      name: `${key}:r0`,
      sampleRate,
      structureArray,
      structureMax,
      tone: props.tone,
      size: props.size,
      decay: props.decay,
    },
    ...d4
  );

  // interleaved dimensional Downmix ( optimised to build the spatial delays when needed )
  let positioning = (i, x: ElemNode): ElemNode =>
    el.delay(
      { key: `downmix:${i}`, size: ms2samps(60 + i * 1.618) },
      el.sm(el.sub(1, position)),
      0,
      el.mul(-1, x)
    );

  let yl = el.mul(
    el.db2gain(-3),
    el.add(positioning(0, r0[0]), r0[3], positioning(5, r0[5]), r0[7])
  );

  let yr = el.mul(
    el.db2gain(-3),
    el.add(r0[1], positioning(2, r0[2]), r0[4], positioning(6, r0[6]))
  );
  // Wet dry mixing
  return [el.select( mix, yl, xl), el.select( mix, yr, xr)];
}
