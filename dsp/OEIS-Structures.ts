/*
 * This file contains functions to handle the structure effect.
 * The structure effect is a set of number sequences that can be used to control the
 * early reflection all pass filters in the SRVB effect.
 * The sequences are hand-picked from the OEIS database.
 * http://oeis.org/
 */

import { argMax } from "@thi.ng/arrays";
import { SrvbSettings, StructureData } from "../src/types";

import { RefMap } from "./RefMap";
import { OEIS_SEQUENCES } from "./srvb-er";

export function normalizeSequences(sequences: number[][]): number[][] {
  return sequences.map(sequence => {
    const max = Math.max(...sequence);
    return sequence.map(value => value / max);
  });
}

/*
 * OEIS_SEQUENCES is an array of arrays of number sequences.
 * Here we update the el.const values pertaining to this 'Structure' effect
 * Keys and refNames should match what was set up by handleStructureChange()
 */
export function updateStructureConstants(
  refs: RefMap,
  srvbSettings: SrvbSettings
) {
  if (!srvbSettings || !refs) return;
  OEIS_SEQUENCES[srvbSettings.structure].forEach((value, i) => {
    if (value !== undefined) refs.update(`node:structureConst:${i}`, { value });
  });
}
/*
 * Generate from structral sequences to ElemNodes and Refs
 */
export function buildStructures(refs: RefMap, currStructIndex = 0) {
  {
    let series = OEIS_SEQUENCES[currStructIndex];
    // console.log(`Using series ${series} `);
    // this should compute norm only on the set actually being used which is 8 elements long
    const seriesMax = series[argMax(series)];
    // convert the sequences to signals
    const sequenceAsSignals = castSequencesToRefs(series, seriesMax, refs);
    if (!sequenceAsSignals) return;
    const sd: StructureData = {
      consts: sequenceAsSignals,
      max: seriesMax,
    };
    return sd;
  }
}
/*
 * Converts a series of numbers to a series of ElemNodes
 * @param series - the series of numbers
 * @param seriesMax - the maximum value in the series
 * @param _refs - the RefMap to use
 * @returns an array of ElemNodes
 */
export function castSequencesToRefs(
  series: number[],
  seriesMax: number,
  refs: RefMap
) {

  return series.map((value, j) => {
    let updatedValue = value;
    // try to invent a value if it's not there
    if (value === null || value === undefined) {
      updatedValue = Math.random() * seriesMax;
    }
    const t = refs.getOrCreate(
      `node:structureConst:${j}`,
      "const",
      { value: updatedValue, key: `key:structureConst:${j}` },
      []
    );
    return t;
  });
}
