import { el } from "@elemaudio/core";
import { argMax, rotate } from "@thi.ng/arrays";
import SRVB, { NUM_SEQUENCES, OEIS_SEQUENCES } from "./srvb-er";
import { clamp, easeIn2, floorTo, roundTo } from "@thi.ng/math";
import type { Ramp } from "@thi.ng/ramp";
import { HERMITE_V, ramp, VEC3 } from "@thi.ng/ramp";
import SCAPE from "./scape";
import { Vec } from "@thi.ng/vectors";
import {
    JSONString,
    ProcessorSettings,
    ScapeProps,
    ScapePropsWithConvolvers,
    ScapeSettings,
    SharedSettings,
    SRVBProps,
    SrvbSettings,
    StructureData,
} from "../src/types";
import { buildStructures, castSequencesToRefs, updateStructureConstants } from "./OEIS-Structures";
import { parseAndUpdateIRRefs } from "./parseAndUpdateIRRefs";
import { remapPosition, roundedStructureValue } from "../src/utils/utils";
import { core } from "./main";
import { registerConvolverRefs, Slots } from "./convolverFactory";
import { RefMap } from "./RefMap";


let memoized: null | any;
let renderCount = 0;
let currentVFSKeys: Array<string>;
let refs: RefMap;
let structureData: StructureData = { nodes: [], max: 0 };


// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
// ▮▮▮▮▮▮▮▮ Handle updated state from the backend ▮▮▮▮▮▮▮ //
// ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ //
export function handleStateChange(_refs: RefMap, rawJSON: JSONString ) {
    
    // update the local vars
    refs = _refs;
    currentVFSKeys = refs.vfsKeys;
    
    //  parse the state
    const { state, srvb, shared, scape } = parseNewState( refs, rawJSON) as ProcessorSettings;
    // console.log('STATE::0');
    // then get or create the props for the DSP
    const { srvbProps, scapeProps } = getOrCreatePropsForDSP(srvb, shared, scape);
   //  console.log('STATE::1');
    // setup the structure series
    structureData = structureSetup( refs, structureData );
    // console.log('STATE::2');
    // now render or re-hydrate the graph
    // ▮▮▮▮▮▮▮▮▮▮▮ Elementary Audio Graph Renderer ▮▮▮▮▮▮▮▮▮▮ //
 
    if (shouldRender(memoized, state, renderCount)) {
        console.log('STATE::Render: ' + renderCount);
        updateMemoizedState(state, srvb, shared, scape);
        adjustStructurePosition(refs, srvb, structureData);
        renderAudioGraph(shared, srvbProps, scapeProps);
    } else {
      //  console.log('STATE::UPDATE');
        updateSignalRefs( refs, srvb, scape, shared);
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
function structureSetup(_refs: RefMap, structureData?: StructureData) {
    const defaultStructure = OEIS_SEQUENCES[0];
    const defaultMax = argMax(defaultStructure, 17);
    structureData = {
        nodes: castSequencesToRefs(defaultStructure, defaultMax, _refs),
        max: defaultMax,
    };
    return structureData;
}

function parseNewState(_refs: RefMap, rawState: JSONString) {
    const state = JSON.parse(rawState);
    refs = _refs;
    // interpreted state captured out into respective processor properties.
    // any adjustments should be done here before rendering to the graph
    const shared: SharedSettings = {
        sampleRate: state.sampleRate,
        dryInputs: [el.in({ channel: 0 }), el.in({ channel: 1 })],
        dryMix: state.dryMix,
    };
    // console.log('STATE::shared');

    refs.vfsKeys = state.vfsKeys;

    const srvb: SrvbSettings = {
        vfsKeys: refs.vfsKeys,
        structure: roundTo(state.structure || 0, 1/NUM_SEQUENCES) * NUM_SEQUENCES,
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
    // console.log('STATE::srvb');
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
        hasUserSlots: currentVFSKeys?.some((key) => key.includes("USERBANK"))
    };
    // console.log('STATE::scape');
    return { state, srvb, shared, scape };
}

function updateMemoizedState(state: any, srvb: SrvbSettings, shared: SharedSettings, scape: ScapeSettings)
{
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

// This function mutates structureData in place
function adjustStructurePosition(refs: RefMap, srvb: SrvbSettings, structureData: StructureData) {
    if (srvb.structure !== memoized?.structure) {
        structureData = buildStructures(refs, srvb.structure);
        // express the position as a rotation of the structure
        structureData.nodes = rotate(structureData.nodes, srvb.position * -16);
    }
    return structureData;
}

function shouldRender(previous: any, current: any, renderCount: number) {
    const result =
        renderCount === 0 ||
        refs.map.size === 0 ||
        current.sampleRate !== previous?.sampleRate ||
        Math.round(current.scapeBypass) !== previous?.scapeBypass ||
        Math.round(current.srvbBypass) !== previous?.srvbBypass ||
        roundedStructureValue(current.structure) !== previous?.structure;
    return result;
}

function renderAudioGraph(shared: SharedSettings, srvbProps: SRVBProps, scapeProps: ScapeProps) {
  
    if (srvbProps && scapeProps) {
        const graph = core.render(
            ...SCAPE(
                scapeProps,
                shared.dryInputs,
                ...SRVB(
                    srvbProps, shared.dryInputs, ...structureData.nodes
                )
            ).map((node, i) => {
                return el.add(el.mul(refs.get("dryMix"), shared.dryInputs[i]), node);
            }
            )
        );
        console.log('Graph updated');
        renderCount++;
    }
}

function updateSignalRefs(_refs:RefMap, srvb: SrvbSettings, scape: ScapeSettings, shared: SharedSettings) {
    refs = _refs;
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
        parseAndUpdateIRRefs(refs, currentVFSKeys, scape);
    }

    refs.update("dryMix", { value: shared.dryMix });
    refs.update("srvbBypass", { value: srvb.bypass });
}

function getOrCreatePropsForDSP(srvb: SrvbSettings, shared: SharedSettings, scape: ScapeSettings) {

    refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);

   const srvbProps: SRVBProps =
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

    const scapeProps: ScapePropsWithConvolvers =
    {
        key: "scape",
        IRs: Slots,
        sampleRate: shared.sampleRate,
        scapeBypass: scape.bypass || 0,
        vectorData: scape.vectorData,
        offset: scape.offset || 0,
        reverse: scape.reverse || 0,
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
    return { srvbProps, scapeProps };
}

