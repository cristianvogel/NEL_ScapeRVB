import {
  UI_ChangingParamID,
  ControlSource,
  UI_NormValue,
  srvbBypassFSM,
  scapeBypassFSM,
  ConsoleText,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_normValue = patch.getVar("ui_normValue");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_allParamsState = patch.getVar("ext_srvbParams_object");
  const ui_srvbBypass = patch.getVar("ui_bypassSRVB");
  const ui_scapeBypass = patch.getVar("ui_bypassConvolver");


  if (ui_normValue && ui_mouseIsChangingParamID && ui_allParamsState) {
    // when the single object in the patch
    // that holds most of the UI params changes
    // we update the UI state of the currently changing param
    // with the currently changing normValue
    // They are independent of each other,
    // but should always come together and be correctly paired
    ui_allParamsState.on(
      "change",
      (state: any) => {
        if (state !== null && state.source !== "host") {
          MessageToHost.requestParamValueUpdate(
            UI_ChangingParamID.current,
            UI_NormValue.current
          );
        }
      }
    );

    ui_normValue.on("change", (value) => {
      ControlSource.update("ui");
      UI_NormValue.update(value);
    });

    ui_mouseIsChangingParamID.on("change", (name) => {
      if (name !== 'srvbBypass' && name !== 'scapeBypass') UI_ChangingParamID.update(name);
    });
  }
  ///////////// special case for bypasses and scapeLength
  if (ui_srvbBypass && ui_scapeBypass) {
    ui_srvbBypass.on("change", (value) => {
      ControlSource.update("ui");
      srvbBypassFSM.send("toggle");
      ConsoleText.update(">> srvbBypassFSM >> " + srvbBypassFSM.current);
      MessageToHost.requestParamValueUpdate("srvbBypass", parseInt(srvbBypassFSM.current));   
    });
    ui_scapeBypass.on("change", (value) => {
      ControlSource.update("ui");
      scapeBypassFSM.send("toggle");
      ConsoleText.update(">> scapeBypassFSM >> " + scapeBypassFSM.current);
      MessageToHost.requestParamValueUpdate("scapeBypass", parseInt(scapeBypassFSM.current));
    });

  }
}
