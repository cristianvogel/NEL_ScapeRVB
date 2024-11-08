import { el } from "@elemaudio/core";
import { argMax, rotate } from "@thi.ng/arrays";
import SRVB, { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import { clamp, easeIn2 } from "@thi.ng/math";
import type { Ramp } from "@thi.ng/ramp";
import { HERMITE_V, ramp, VEC3 } from "@thi.ng/ramp";
import SCAPE from "./scape";
import { Vec } from "@thi.ng/vectors";
import {
    JSONString,
    ProcessorSettings,
    ScapeProps,
    ScapeSettings,
    SharedSettings,
    SRVBProps,
    SrvbSettings,
    StructureData,
} from "../src/types";
import { buildStructures, castSequencesToRefs, updateStructureConstants } from "./OEIS-Structures";
import { parseAndUpdateIRRefs } from "./parseAndUpdateIRRefs";
import { remapPosition, roundedStructureValue } from "../src/utils/utils";
import { refs, core } from "./main";
import { registerConvolverRefs, Slots } from "./convolverFactory";

let currentVFSKeys: Array<string> = [];
let memoized: null | any;
let srvbProps;
let scapeProps;
let renderCount = 0;

export let vfsPathHistory = new Array<string>();
export function getSRVBProps() {
    return srvbProps as SRVBProps;
}
export function getScapeProps() {
    return scapeProps as ScapeProps;
}

// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
// ▮▮▮▮▮▮ Handle updated VFS keys from the backend ▮▮▮▮▮▮ //
// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
globalThis.__receiveVFSKeys__ = function (vfsCurrent: JSONString) {
    const parsedArray: Array<string> = JSON.parse(vfsCurrent);
    if (parsedArray.length > 0) {
        currentVFSKeys = parsedArray;
    }
}

// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
// ▮▮▮▮▮▮▮▮ Handle updated state from the backend ▮▮▮▮▮▮▮ //
// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
    // first parse the state
    const { state, srvb, shared, scape } = parseNewState(stateReceivedFromNative) as ProcessorSettings;
    // then get or create the props for the DSP
    getOrCreatePropsForDSP(srvb, shared, scape);

    // now render or re-hydrate the graph
    // ▮▮▮▮▮▮▮▮▮▮▮ Elementary Audio Graph Renderer ▮▮▮▮▮▮▮▮▮▮ //
    if (!memoized || shouldRender(memoized, state, renderCount)) {
        console.log('Render: ' + renderCount);
        updateMemoizedState(state, srvb, shared, scape);
        adjustStructurePosition(srvb);
        renderAudioGraph(getScapeProps, shared, getSRVBProps);
    } else {
        updateSignalRefs(srvb, scape, shared);
    }
};

// ##################################################################### //
// ####################### IMPLEMENTATION DETAIL ####################### //
// ##################################################################### //

// create the vector interpolation ramp, used to crossfade between 4 IRs
function createHermiteVecInterp(): Ramp<Vec> {
    return ramp(
      // use a vector interpolation preset with the VEC3 API
      HERMITE_V(VEC3),
      // keyframes used for crossfading between 4 IRs
      [
        [0.0, [1.0, 0, 0, 0]], // a
        [0.45, [0, 1.0, 0, 0]], // b
        [0.65, [0, 0, 1.0, 0]], // c
        [1.0, [0, 0, 0, 1.0]], // d
      ]
    );
  }
  
  // the Hermite vector interpolation ramp
  const HERMITE: Ramp<Vec> = createHermiteVecInterp();

  //////////////////////////////////////////////////////////////////////
  // setup the structure data
const defaultStructure = OEIS_SEQUENCES[0];
const defaultMax = argMax(defaultStructure, 17);
let structureData: StructureData = {
  nodes: castSequencesToRefs(defaultStructure, defaultMax, refs),
  max: defaultMax,
};
  
function parseNewState(stateReceivedFromNative: JSONString) {
    const state = JSON.parse(stateReceivedFromNative);
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared: SharedSettings = {
        sampleRate: state.sampleRate,
        dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
        dryMix: state.dryMix,

    };
    const srvb: SrvbSettings = {
        structure: Math.round((state.structure || 0) * NUM_SEQUENCES),
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

function updateMemoizedState(state, srvb, shared, scape) {
    memoized = {
        ...state,
        sampleRate: shared.sampleRate,
        structure: srvb.structure,
        scapeLength: scape.ir,
        structureMax: srvb.structureMax,
        reverse: scape.reverse,
        vectorData: scape.vectorData,
        scapeBypass: scape.bypass,
        srvbBypass: srvb.bypass,
        scapeMode: scape.mode,
        scapeOffset: scape.offset,
        userBank: scape.userBank,
    };
}

function adjustStructurePosition(srvb: SrvbSettings) {
    if (srvb.structure !== memoized?.structure) {
        structureData = buildStructures(refs, srvb.structure) || structureData;
        // express the position as a rotation of the structure
        structureData.nodes = rotate(structureData.nodes, srvb.position * -16);
    }
}

 function shouldRender(previous: any, current: any, renderCount: number) {
    console.log('current structure', roundedStructureValue(current.structure));
    console.log('previous', previous);
    const result =
      renderCount === 0 ||
      current === null ||
      refs.map.size === 0 ||
      current.sampleRate !== previous?.sampleRate ||
      Math.round(current.scapeBypass) !== previous?.scapeBypass ||
      Math.round(current.srvbBypass) !== previous?.srvbBypass ||
      roundedStructureValue(current.structure) !== previous?.structure;
    return result;
  }

function renderAudioGraph(getScapeProps: () => ScapeProps, shared: SharedSettings, getSRVBProps: () => SRVBProps) {
    if (srvbProps && scapeProps) {
        const graph = core.render(
            ...SCAPE(
                getScapeProps(),
                shared.dryInputs,
                ...SRVB(
                    getSRVBProps(), shared.dryInputs, ...structureData.nodes
                )
            )
                .map((node, i) => {
                    return el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node);
                }
                )
        );
        console.log('Graph updated');
        renderCount++;
    }
}

function updateSignalRefs(srvb: SrvbSettings, scape: ScapeSettings, shared: SharedSettings) {
    if (!srvb.bypass) {

        refs.update("size", { value: srvb.size });
        refs.update("diffuse", { value: srvb.diffuse });
        refs.update("mix", { value: srvb.level });
        refs.update("tone", { value: srvb.tone });
        refs.update("position", { value: srvb.position });
        refs.update("structureMax", { value: srvb.structureMax });
        if (srvb.structure !== memoized.structure) {
            // update the reflection structure constants
            updateStructureConstants(refs, srvb);
        }
    }

    if (!scape.bypass) {
        // and the scape refs
        refs.update("scapeLevel", { value: scape.level });
        refs.update("v1", { value: scape.vectorData[0] });
        refs.update("v2", { value: scape.vectorData[1] });
        refs.update("v3", { value: scape.vectorData[2] });
        refs.update("v4", { value: scape.vectorData[3] });
        refs.update("scapePosition", { value: scape.position });
        refs.update("scapeMode", { value: scape.mode });
        // update the convolvers, switch to user IRs if they exist
        parseAndUpdateIRRefs(currentVFSKeys, scape, shared);
    }

    refs.update("dryMix", { value: shared.dryMix });
    refs.update("srvbBypass", { value: srvb.bypass });
}

function getOrCreatePropsForDSP(srvb: SrvbSettings, shared: SharedSettings, scape: ScapeSettings) {

    refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);

    srvbProps =
    {
        key: "srvb",
        srvbBypass: srvb.bypass,
        dryMix: shared.dryMix,
        sampleRate: shared.sampleRate,
        size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
        decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
        mix: refs.getOrCreate("mix", "const", { value: srvb.level }, []),
        tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
        position: refs.getOrCreate("position", "const", { value: srvb.position }, []),
        structure: srvb.structure,
        structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, [])
    };

    scapeProps =
    {
        IRs: Slots,
        sampleRate: shared.sampleRate,
        scapeBypass: scape.bypass || 0,
        vectorData: scape.vectorData,
        offset: scape.offset,
        // RefNodes from now on
        srvbBypass: refs.getOrCreate("srvbBypass", "const", { value: srvb.bypass }, []),
        scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: scape.level }, []),
        scapePosition: refs.getOrCreate("scapePosition", "const", { value: scape.position }, []),
        scapeMode: refs.getOrCreate("scapeMode", "const", { value: scape.mode }, []),
        // the Hermite vector interpolation values as signals
        v1: refs.getOrCreate("v1", "const", { value: scape.vectorData[0] }, []),
        v2: refs.getOrCreate("v2", "const", { value: scape.vectorData[1] }, []),
        v3: refs.getOrCreate("v3", "const", { value: scape.vectorData[2] }, []),
        v4: refs.getOrCreate("v4", "const", { value: scape.vectorData[3] }, []),
        ...registerConvolverRefs(scape, refs)
    };
}

