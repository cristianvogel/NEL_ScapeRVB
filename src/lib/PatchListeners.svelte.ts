
import {
  GestureSource_SCAPE,
  GestureSource_SRVB,
  GestureSource_REVERSE,
  GestureSource_IRMode,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";
import {ProxyStateObject} from "svelte/src/internal/client/types";

// Function to update the host with a new value
// and update the gesture source for those pesky bool vars
function updateHost(toggleName: string, gestureSource: ProxyStateObject, boolInt: number) {
  if (gestureSource.current === "ui") {
    MessageToHost.updateHost(toggleName, boolInt);
  }
  gestureSource.update("ui");
}


// Function to initialize listeners for vars coming
// via the Cables patch


// Note that the vars are named in the Cables patch
export function initPatchListeners(patch: CablesPatch) {
  const ui_srvbBypass = patch.getVar("ui_srvbBypass");
  const ui_scapeBypass = patch.getVar("ui_scapeBypass");
  const ui_scapeReverse = patch.getVar("ui_scapeReverse"); 
  const ui_scapeMode = patch.getVar("ui_scapeMode");

  try {
    ui_scapeMode.on("change", (value: number ) => {
      const boolValue = value ?? 0.0 > 0.5 ? 1.0 : 0.0;
      GestureSource_IRMode.update("ui");
      updateHost("scapeMode", GestureSource_IRMode, boolValue);
    });

    ui_srvbBypass.on("change", (value: number ) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SRVB.update("ui");
      updateHost("srvbBypass", GestureSource_SRVB, boolValue);
    });

    ui_scapeBypass.on("change", (value: number) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SCAPE.update("ui");
      updateHost("scapeBypass", GestureSource_SCAPE, boolValue);
    });

    ui_scapeReverse.on("change", (value: number) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_REVERSE.update("ui");
      updateHost("scapeReverse", GestureSource_REVERSE, boolValue);
    });

  } catch (e) {
    console.error("Error in patch listeners: " + e);
  }
}

