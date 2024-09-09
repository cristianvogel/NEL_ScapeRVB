import {
  ConsoleText,
  UI_SrvbParams,
  UI_ChangingParamID,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";
import { EPS } from "@thi.ng/math";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_srvbParams = patch.getVar("ext_srvbParams_object");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_normValue = patch.getVar("ui_normValue");


  ui_normValue.on("change", (value) => {
    const name = ui_mouseIsChangingParamID.getValue();
    if ( name !== null && name !== 'lastTouched' ) {
      UI_ChangingParamID.update({
        name,
        value,
      });
      ConsoleText.update(
        `Changing store: ${name} -> ${UI_ChangingParamID.current.value}`
      )};
  });

  ui_mouseIsChangingParamID.on("change", (name: string) => {
    UI_ChangingParamID.update({ name, value: ui_normValue.getValue() });
  });

  ui_srvbParams.on("change", (newValues) => {
    if (newValues !== null) {
      const param = UI_ChangingParamID.current;
      if (!param || !param.name) return;
      MessageToHost.requestParamValueUpdate(param.name, param.value);
    }
  });
}
