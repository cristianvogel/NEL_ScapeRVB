import { get } from "http";
import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";
import {
  ScapeSettings,
  SharedSettings,
  DefaultIRSlotName as SlotName,
  IRMetaData as SlotData
} from "../src/types";
import { Slots, refs } from "./main";
import { RefMap } from "./RefMap";

// later, the Elementary refs system will be used to
// parse and update the VFS paths of the default and user
// loaded impulse responses made available to the processor
export function parseAndUpdateIRRefs(currentVFSKeys: Array<string>, scape: ScapeSettings, shared: SharedSettings) {

  let composedPath: string;
  const mode = scape.mode;
  let vfsPathWithChannel: string;
  let usingUserIR: boolean = ( mode && scape.hasUserSlots ) as boolean;

  const getPath = (slotName: SlotName, chan: number) => {

    if (usingUserIR && resourceExistsForSlot(currentVFSKeys, slotName, chan )) {
    let userBank = getHighestBankSuffix(slotName, currentVFSKeys);
    vfsPathWithChannel = `USERBANK_${userBank}_${slotName}_${chan}`;
    } else {
      vfsPathWithChannel = `${slotName}_${chan}`;
    }

    composedPath = scape.reverse > 0.5
      ? REVERSE_BUFFER_PREFIX + vfsPathWithChannel
      : vfsPathWithChannel;

      console.log('Composed VFS Path: ', composedPath);
    return composedPath;
  };

  const getScale = (slotName: SlotName, chan: number = 0) => {
    const defaultIR = Slots.get(slotName) as SlotData;
    //  const panPosition = shared.position; // possibly use this to pan the IRs
    let result = usingUserIR ? 0.95 : defaultIR.att;
    return result;
  };

  const getRef = (refs: RefMap, slotName: SlotName, chan: number) => {
    let ref = `${slotName}_${chan}`;
    refs.has(ref); // invariant will throw if the name is not found 
    return ref;
  };


  Slots.forEach((slot, slotName: SlotName) => {
    for (let chan = 0; chan < 2; chan++) {
      const path = getPath(slotName, chan);
      const ref = getRef(refs, slotName, chan);
      const scale = getScale(slotName, chan);
      const offset = scape.offset;
      const process = Math.min(scape.level, scape.vectorData[slot.slotIndex]); // todo: take another look at this

      // test for null or undefined
      if (ref === null || ref === undefined) return;
      if (path === null || path === undefined) return;
      if (scale === null || scale === undefined) return;
      if (offset === null || offset === undefined) return;
      if (process === null || process === undefined) return;

      refs.update(
        ref, {
        path,
        process,
        scale,
        offset
      });
    }
  });
};

function getHighestBankSuffix(slotName: SlotName, entries: string[]): number {
  let highestSuffix = 0;
  let suffix = 0;

  entries.forEach(entry => {
    // Extract the suffix after "USERBANK_"
    if (entry.includes("USERBANK_") && !entry.includes("REVERSED") && entry.includes(`_${slotName}_`)) {
        suffix = parseInt(entry.split('USERBANK_')[1].split('_')[0].charAt(0));
    }
    if (suffix > highestSuffix) {
      highestSuffix = suffix;
    }
  });

  return highestSuffix;
}

function resourceExistsForSlot(currentVFSKeys: Array<string>, slotName: SlotName, chan: number): boolean {
  let result = false;
  currentVFSKeys.forEach(key => {
    if ( key.includes(`USERBANK_`) && key.includes(`${slotName}_${chan}`) ) {
      result = true;
    }
  });
  return result;
}