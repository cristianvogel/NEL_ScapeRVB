import {
  GestureSource_SCAPE,
  GestureSource_SRVB,
  ConsoleText,
  GestureSource_Reverse,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch

// be aware they have different names in the patch than
// in the manifest here.... todo: fix this
export function initPatchListeners(patch) {
  const ui_srvbBypass = patch.getVar("ui_srvbBypass");
  const ui_scapeBypass = patch.getVar("ui_scapeBypass");
  const ui_scapeReverse = patch.getVar("ui_scapeReverse");

  const ui_scapeReverse_mouseEnter = patch.getVar(
    "ui_scapeReverse_mouseEnter_string"
  );

  const ui_srvbBypass_mouseEnter = patch.getVar(
    "ui_srvbBypass_mouseEnter_string"
  );
  const ui_scapeBypass_mouseEnter = patch.getVar(
    "ui_scapeBypass_mouseEnter_string"
  );
  try {
    ui_scapeBypass_mouseEnter.on("change", (value) => {
      ConsoleText.extend("scape: " + value);
    });

    ui_srvbBypass_mouseEnter.on("change", (value) => {
      ConsoleText.extend("srvb: " + value);
    });

    ui_srvbBypass.on("change", (value) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SRVB.update("ui");
      updateHost("srvbBypass", GestureSource_SRVB, boolValue);
    });

    ui_scapeBypass.on("change", (value) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_SCAPE.update("ui");
      updateHost("scapeBypass", GestureSource_SCAPE, boolValue);
    });

    ui_scapeReverse.on("change", (value) => {
      const boolValue = (value ?? 0.0) > 0.5 ? 1.0 : 0.0;
      GestureSource_Reverse.update("ui");
      updateHost("scapeReverse", GestureSource_Reverse, boolValue);
    });

  } catch (e) {
    console.error("Error in patch listeners: " + e);
    ConsoleText.extend("Error in patch listeners: " + e);
  }
}

function updateHost(toggleName, gestureSource, boolInt) {
  if (gestureSource.current === "ui") {
    MessageToHost.updateHost(toggleName, boolInt);
  }
  gestureSource.update("ui");
}
