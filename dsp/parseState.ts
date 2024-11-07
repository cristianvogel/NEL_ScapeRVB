import { el } from "@elemaudio/core";
import { JSONString, ScapeSettings, SharedSettings, SrvbSettings } from "../src/types";
import { remapPosition } from "../src/utils/utils";
import {clamp, easeIn2} from "@thi.ng/math";

export function parseNewState(stateReceivedFromNative: JSONString, HERMITE, currentVFSKeys) {
    const state = JSON.parse(stateReceivedFromNative);
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared: SharedSettings = {
      sampleRate: state.sampleRate,
      dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
      dryMix: state.dryMix,
  
    };
    const srvb: SrvbSettings = {
      structure: Math.floor((state.structure || 0) * 16),
      size: state.size,
      diffuse: state.diffuse,
      tone: clamp(state.tone * 2 - 1, -0.99, 1),
      level: easeIn2(state.mix),  
      // DEPRECATING STRUCTURE MAX
      // doing the normalisation inside SRVB
      structureMax: Math.round(state.structureMax) || 137, // handle the case where the max was not computed
      bypass: (Math.round(state.srvbBypass) || 0) as 1 | 0,
      position: remapPosition(state.position)
    };
    const scape: ScapeSettings = {
      reverse: Math.round(state.scapeReverse) as 1 | 0,
      level: state.scapeLevel * 1.5,
      ir: state.scapeLength,
      vectorData: HERMITE.at(state.scapeLength),
      bypass: (Math.round(state.scapeBypass) || 0) as 1 | 0,
      mode: (Math.round(state.scapeMode) || 0) as 1 | 0,
      offset: state.scapeOffset || 0,
      userBank: state.userBank,
      position: state.position,
      hasUserSlots: !!currentVFSKeys.find((key) => key.includes("USERBANK")),
    };
    return { state, srvb, shared, scape };
  }
  