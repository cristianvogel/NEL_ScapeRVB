import { REVERSE_BUFFER_PREFIX } from "../src/stores/constants";
import { ScapeSettings, 
    SharedSettings,  
    DefaultIRSlotName as SlotName,
    IRMetaData as SlotData } from "../src/types";
import { Slots, User_IR_Map, vfsPathHistory, refs } from "./main";
import { RefMap } from "./RefMap";

// later, the Elementary refs system will be used to
// parse and update the VFS paths of the default and user
// loaded impulse responses made available to the processor
export function parseAndUpdateIRRefs(scape: ScapeSettings, shared: SharedSettings) {

  const mode = scape.mode;
 const currentUserBank = scape.userBank - 1;

  const prefixUserBank = (name: string) => {
    return "USERBANK_" + currentUserBank + "_" + name;
  };

  const getActivePathName = (slotName, channel: number) => {

    const propsDefaultIR = Slots.get(slotName) ;
    const propsUserIR = User_IR_Map.get(slotName) ;
    const usingUserIR = propsUserIR && mode;

    let composedPath: string;
    let vfsPathWithChannel: string = `${propsDefaultIR?.pathStem}_${channel}`;

    if (usingUserIR) {
      vfsPathWithChannel = prefixUserBank(`${propsUserIR.pathStem}_${channel}`);
    }

    composedPath = scape.reverse > 0.5
      ? REVERSE_BUFFER_PREFIX + vfsPathWithChannel
      : vfsPathWithChannel;

    if (!vfsPathHistory.includes(composedPath)) {
      vfsPathHistory.push(composedPath);
    }


    return composedPath;
  };

  const getScale = (slotName: SlotName, chan: number = 0) => {
    const userIR = User_IR_Map.get(slotName) as SlotData;
    const defaultIR = Slots.get(slotName) as SlotData;
    const usingUserIR = userIR && mode;
    const panPosition = shared.position; // possibly use this to pan the IRs
    let result = usingUserIR ? userIR.att : defaultIR.att;
    return result;
  };

  const getRef = (refs: RefMap, slotName: SlotName, chan: number) => {
    let path = `${slotName}_${chan}`;
    refs.has(path); // invariant will throw if the name is not found 
    return path;
  };


  Slots.forEach((slot, slotName: SlotName) => {
    for (let chan = 0; chan < 2; chan++) {

      const path = getActivePathName(slotName, chan);
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
}
;
