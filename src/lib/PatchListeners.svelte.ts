
import {
  GestureSource_SCAPE,
  GestureSource_SRVB,
  GestureSource_REVERSE,
  GestureSource_IRMode,
  GestureSource_STRUCTURE,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to update the host with a new value
// and update the gesture source for those pesky bool vars
interface GestureSource {
  current: string;
  update: (source: string) => void;
}

interface HostUpdate {
  paramId: string;
  roundedValue: number;
}

function updateHost(
  paramId: string, 
  gestureSource: GestureSource, 
  roundedValue: number
): void {
  if (gestureSource.current === "ui") {
    MessageToHost.updateHost(paramId, roundedValue);
  }
  console.log("Updating host with: ", paramId, roundedValue);
  gestureSource.update("ui");
}


// Function to initialize listeners for vars coming
// via the Cables patch
// Note that the vars are named in the Cables patch
interface PatchVar {
  on(event: 'change', callback: (value: number) => void): void;
}

interface Patch {
  getVar(name: string): PatchVar;
}

export function initPatchListeners(patch: Patch): void {
  const ui_srvbBypass: PatchVar = patch.getVar("ui_srvbBypass");
  const ui_scapeBypass: PatchVar = patch.getVar("ui_scapeBypass");
  const ui_scapeReverse: PatchVar = patch.getVar("ui_scapeReverse"); 
  const ui_scapeMode: PatchVar = patch.getVar("ui_scapeMode");
  const ui_structureIndex: PatchVar = patch.getVar("ui_structureIndex");

  try {
    ui_scapeMode.on("change", (value: number) => {
      const boolValue: number = value ?? 0.0 > 0.5 ? 1.0 : 0.0;
      GestureSource_IRMode.update("ui");
      updateHost("scapeMode", GestureSource_IRMode, boolValue);
    });

    ui_srvbBypass.on("change", (value: number) => {
      const boolValue: number = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SRVB.update("ui");
      updateHost("srvbBypass", GestureSource_SRVB, boolValue);
    });

    ui_scapeBypass.on("change", (value: number) => {
      const boolValue: number = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SCAPE.update("ui");
      updateHost("scapeBypass", GestureSource_SCAPE, boolValue);
    });

    ui_scapeReverse.on("change", (value: number) => {
      const boolValue: number = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_REVERSE.update("ui");
      updateHost("scapeReverse", GestureSource_REVERSE, boolValue);
    });

    ui_structureIndex.on("change", (value: number) => {
     const structureIndex: number = value || 0;
     const normStructureIndex = structureIndex * (1/16);
      GestureSource_STRUCTURE.update("ui");
      updateHost("structure", GestureSource_STRUCTURE, normStructureIndex);
    });

  } catch (e) {
    console.error("Error in patch listeners: " + e);
  }
}

