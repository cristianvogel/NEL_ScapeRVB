//@ts-check

import {el, ElemNode} from "@elemaudio/core";
import {EPS} from "@thi.ng/math";
import type {Frame} from "@thi.ng/ramp";
import {hermite} from "@thi.ng/ramp";
import {Smush32} from "@thi.ng/random";
import {DiffuseProps, FDNProps, SRVBProps} from "../src/types";
import {normalizeSequences} from "./OEIS-Structures";

let positionMeasured = 0;
// THese number seies are from the OEIS and all sound really cool
const smush = new Smush32(0xcafebabe);
const OEIS_SEQUENCES_16 = [
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


const OEIS_NORMALISED: number[][] = normalizeSequences(OEIS_SEQUENCES);

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

// Keep this one uniform, have tried using the sequence data, but it loses all energy
const baseAttenuation = (): number => {
    const len = 8; // number of inputs
    return Math.sqrt(1.0 / len);
};

// A diffusion step expecting exactly 8 input channels
function diffuse(props: DiffuseProps, ...ins: ElemNode[]): ElemNode[] {
    const {maxLengthSamp} = props;
    const structure: Array<ElemNode> = props.structure;
    const delaySeries: ElemNode[] = ins.map(function (input: ElemNode, i: number) {
        const delaySize: number = maxLengthSamp;
        const delayKey: string = `srvb-diff:${i}`;
        const delayTime: ElemNode = structure[i % structure.length];
        const feedback: 0 = 0;

        return el.delay(
            {size: delaySize, key: delayKey},
            delayTime,
            feedback,
            input
        );
    });

    // Apply the Hadamard matrix to the delayed signals to achieve diffusion
    return H8.map(function (row: number[], rowIndex: number) {
        // For each row in the Hadamard matrix, create a new element node
        return el.add(
            ...row.map(function (col: number, colIndex: number) {
                // Multiply each element in the row by the corresponding delayed signal
                // and a diffusion stage level
                return el.mul(col, baseAttenuation(), delaySeries[colIndex]);
            })
        );
    });
}

// An eight channel feedback delay network
function dampFDN(props: FDNProps, ...ins: ElemNode[]): ElemNode[] {
    const len = ins.length / 2;
    const {size, decay} = props;
    const {sampleRate} = props;
    const structure: Array<ElemNode> = props.structureArray;
    const structureMax: ElemNode = props.structureMax;

    /**
     * Calculates the normalized scaling factor for the taps based on the structure.
     * The shortest taps will be the loudest.
     *
     * @param i - The index of the current tap.
     * @returns The scaling factor for the tap delay.
     */
    const tapDelayLevel = (i: number): ElemNode => {

        // Normalize the structure value for the current tap index
        const normalizedStructure = el.max(
            el.db2gain(-35), // Ensure the minimum gain is -35 dB
            el.sub(1 + EPS, el.div(structure[i % structure.length], structureMax)) // Normalize the structure value
        );

        // Calculate the final scaling factor by multiplying the normalized structure value with the base attenuation
        // Ensure the maximum gain is -0.5 dB to prevent the taps from exploding while maintaining enough energy
        return el.min(el.db2gain(-0.5), el.mul(normalizedStructure, baseAttenuation()));
    };

    //const md = modDepth;

    // The unity-gain one pole lowpass here is tuned to taste along
    // the range [0.001, 0.5]. Towards the top of the range, we get into the region
    // of killing the decay time too quickly. Towards the bottom, not much damping.
    const delayLines: ElemNode[] = ins.map(function (input: ElemNode, i: number) {
        return el.add(
            // too many instances of the filter, moving to output
            //  toneDial(input, structure[i]),
            input,
            el.mul(
                1 + EPS,
                decay,
                el.smooth(0.0025, el.tapIn({name: `srvb:fdn${i}`}))
            )
        );
    });
    let mix = H8.map(function (row, i) {
        return el.add(
            ...row.map(function (col, j) {
                return el.mul(col, tapDelayLevel(i), delayLines[j]);
            })
        );
    });

    return mix.map(function (mm, i) {
        const ms2samps = (ms: number): number => sampleRate * (ms / 1000.0);

        const delayScale = el.mul(
            el.add(1.0, el.sm(size)),
            el.ms2samps(el.smooth(el.tau2pole(i * 0.25), structure[i % structure.length]))
        );

        return el.tapOut(
            {name: `srvb:fdn${i}`},
            el.delay({size: ms2samps(137)}, delayScale, 0.0, mm)
        );
    });
} // end of dampFDN

/**
 * An FDN Reverb with Vector based diffusion and a Hadamard matrix
 * feedback delay network. Based on SignalSmith's work.
 *
 * @param props
 * @param inputs
 * @param structureArray
 */

export default function SRVB(props: SRVBProps, inputs: ElemNode[], ...structureArray: ElemNode[]) {

    const {sampleRate, key, structureMax, tone} = props;
    const level = el.sm(props.mix);
    const position = el.sm(props.position)
    const positionAsNumber = props.positionAsNumber;
    const ms2samps = (ms: number) => sampleRate * (ms / 1000.0);


    // Higher level DSP functions
    const toneDial = (input: ElemNode, offset: ElemNode) => {
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
                {mode: "highshelf"},
                el.add(650, offset),
                0.5,
                el.mul(tone, el.db2gain(6)),
                el.mul(el.db2gain(-1), input)
            )
        );
    };

    // xl , xr -- bypass to unprocessed inputs
    const [xl, xr] = inputs;
    const feedforward = (channel: number, _x: ElemNode) =>
        el.tapOut({name: "srvbOut:" + channel}, el.tanh(_x));
    const zero = el.const({value: 0, key: "mute::srvb"});


    let structurePositioning = (x: ElemNode, i: number): ElemNode => {
        // const scanDt = scanSequence( foldback01(positionAsNumber + ( i / 7 )), OEIS_NORMALISED[props.structure]) ;
        const scanDt: ElemNode = scanSequence(el.meter(props.position), OEIS_NORMALISED[props.structure]),
            scanG: ElemNode = scanSequence(el.meter(props.position), OEIS_NORMALISED[props.structure].reverse());
        return el.delay(
            {key: `down-mix:${i}`, size: ms2samps(55)},
            // delay time normalised by structure
            el.mul(el.sub(1.05, props.size), scanDt),
            // minimum feedback
            0,
            // node input, normalised by structure
            el.mul(scanG, x)
        );
    };

    const scanSequence = (position: ElemNode, values: number[]): ElemNode => {
        const index: number = positionMeasured;
        const stops: Frame<number>[] = [
            [0, values[0]],
            [1 / 7, values[1]],
            [2 / 7, values[2]],
            [3 / 7, values[3]],
            [4 / 7, values[4]],
            [5 / 7, values[5]],
            [6 / 7, values[6]],
            [1, values[7]]
        ];
        const rampH = hermite(stops);
        return el.const({key: 'hermite-' + index, value: rampH.at(index)});
    }


    // input attenuation
    const _xl = el.dcblock(xl);
    const _xr = el.dcblock(xr);
    // Build Matrix inputs...
    // Upmix to eight channels
    const mid = el.mul(0.5, el.add(_xl, _xr));
    const side = el.mul(0.5, el.sub(_xl, _xr));
    const four: ElemNode [] = [xl, xr, mid, side].map((x, i) => {
        return structurePositioning(x, i)
    });
    const spreadFour = four.map((x, i) => {
        return structurePositioning(toneDial(x, structureArray[(i * 2) % structureArray.length]), i + 4)
    });

    const eight: ElemNode [] = [...four, ...spreadFour];
    // Diffusion over 8 channels using 'structure' sequence for timing coefficients
    const d1: ElemNode [] = diffuse(
        {structure: structureArray, structureMax, maxLengthSamp: ms2samps(43)},
        ...eight
    );
    // const d2 = diffuse(
    //   { structure: structureArray, structureMax , maxLengthSamp: ms2samps(97) },
    //   ...d1
    // );
    // const d3 = diffuse(
    //   { structure: structureArray, structureMax , maxLengthSamp: ms2samps(117) },
    //   ...d2
    // );

    // Reverb network
    // const d4: ElemNode[] = dampFDN(
    //   {
    //     name: `${key}:d4`,
    //     sampleRate,
    //     structureArray,
    //     structureMax,
    //     tone: props.tone,
    //     size: props.size,
    //     decay: 0.004,
    //   },
    //   ...d1
    // );
    let r0: ElemNode[] = dampFDN(
        {
            name: `r0:`,
            sampleRate,
            structureArray,
            structureMax,
            tone: props.tone,
            size: props.size,
            decay: el.mul(props.decay, 0.7),
        },
        ...d1
    );

    // interleaved dimensional phase inverting downmix
    let pos = (i: number, x: ElemNode): ElemNode => {
        return el.mul(x, el.sin(i * 360))
    };


    const asLeftPan = (x: ElemNode): ElemNode => {
        return el.select(position, x, el.mul(x, el.db2gain(1.5)))
    };
    const asRightPan = (x: ElemNode): ElemNode => {
        return el.select(position, el.mul(x, el.db2gain(1.5)), x)
    };

    let yl = feedforward(0, asLeftPan(el.add(pos(0, r0[0]), pos(2, r0[2]), pos(4, r0[4]), pos(6, r0[6]))));
    let yr = feedforward(1, asRightPan(el.add(pos(1, r0[1]), pos(3, r0[3]), pos(5, r0[5]), pos(7, r0[7]))));


    // reflections
    if (props.srvbBypass)
        return [feedforward(0, xl), feedforward(1, xr)]
    else
        return [el.mul(level, yl), el.mul(level, yr)];
}

////////// Handle updated VFS /////////////////////////////////
// @ts-ignore
globalThis.__receivePositionValue__ = function (value: any) {
    const parsed: number = JSON.parse(value);
    positionMeasured = parsed;
    console.log(`Received position value: ${parsed}`);
}
