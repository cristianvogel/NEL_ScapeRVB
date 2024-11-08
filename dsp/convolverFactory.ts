import { el } from "@elemaudio/core";
import {
    ScapeSettings, DefaultIRSlotName as SlotName,
    IRMetaData as SlotData,
    Convolvers,
} from "../src/types";
import { RefMap } from "./RefMap";

const blockSizes = [512, 4096];
// MUST MATCH FILE NAMES IN THE PUBLIC IR FOLDER
export const Slots: Map<SlotName, SlotData> = new Map([
    ["LIGHT", { pathStem: "LIGHT", slotIndex: 0, att: 1.0 }],
    ["SURFACE", { pathStem: "SURFACE", slotIndex: 1, att: 0.96 }],
    ["TEMPLE", { pathStem: "TEMPLE", slotIndex: 2, att: 0.9 }],
    ["DEEPNESS", { pathStem: "DEEPNESS", slotIndex: 3, att: 0.675 }],
]);

// Utilise a factory pattern to generate the ref updaters
// for the Elem ref engine
function IR_SlotRefFactory(
    scape: ScapeSettings,
    refs: RefMap,
    slotName: SlotName,
    slotIndex: number,
    attenuation: number
) {
    if (!scape || !refs) return;
    return {
        [`${slotName}_0`]: refs.getOrCreate(
            `${slotName}_0`,
            "convolver",
            {
                path: `${slotName}_0`,
                process: scape.vectorData[slotIndex],
                scale: attenuation,
                blockSizes,
                offset: scape.offset
            },
            [el.tapIn({ name: `srvbOut:0` })]
        ),
        [`${slotName}_1`]: refs.getOrCreate(
            `${slotName}_1`,
            "convolver",
            {
                path: `${slotName}_1`,
                process: scape.vectorData[slotIndex],
                scale: attenuation,
                blockSizes,
                offset: scape.offset
            },
            [el.tapIn({ name: `srvbOut:1` })]
        ),
    }
}

export function registerConvolverRefs(scape: ScapeSettings, refs: RefMap) {
    let convolvers = {};
    Slots.forEach((slotData, slotName) => {
        convolvers = {
            ...convolvers,
            ...IR_SlotRefFactory(scape, refs, slotName, slotData.slotIndex, slotData.att),
        };
    });
    return <Convolvers>convolvers;
}