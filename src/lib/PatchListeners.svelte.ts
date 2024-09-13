import {
  UI_ChangingParamID,
  ControlSource,
  UI_NormValue,
  srvbBypassFSM,
  scapeBypassFSM,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_normValue = patch.getVar("ui_normValue");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_allParamsState = patch.getVar("ext_srvbParams_object");

  ui_normValue.on("change", (value) => {
    UI_NormValue.update(value);
  });

  ui_mouseIsChangingParamID.on("change", (name) => {
    UI_ChangingParamID.update(name);
  });

  ui_allParamsState.on("change", (newValues: Array<"host" | "ui" | number>) => {
    if (newValues !== null ) {
      for (let [p, v] of Object.entries(newValues)) {
        if (p === "srvbBypass" && v !== parseInt(srvbBypassFSM.current)) {
          srvbBypassFSM.send( 'toggle' );
          MessageToHost.requestParamValueUpdate('srvbBypass', parseInt( srvbBypassFSM.current ));
          continue;
        };
        if (p === "scapeBypass" && v !== parseInt(scapeBypassFSM.current)) {
          scapeBypassFSM.send( 'toggle' );
          MessageToHost.requestParamValueUpdate('scapeBypass', parseInt( scapeBypassFSM.current ));
          continue;
        };
        MessageToHost.requestParamValueUpdate(
          UI_ChangingParamID.current,
          UI_NormValue.current
        );
      }
    }
  });
}
