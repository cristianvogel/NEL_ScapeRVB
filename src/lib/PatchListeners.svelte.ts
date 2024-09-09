import {
  ConsoleText,
  UI_SrvbParams,
  UI_ChangingParamID,
  ControlSource,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_normValue = patch.getVar("ui_normValue");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_srvbParams = patch.getVar("ext_srvbParams_object");

  ui_normValue.on("change", (value) => {
    const name = UI_ChangingParamID.current.name;
    if (
      name !== null 
    ) {
      UI_ChangingParamID.update({
        name,
        value,
      });
    }
  });

  ui_mouseIsChangingParamID.on("change", (name: string) => {
    if (name === null) return;
    UI_ChangingParamID.update({ name, value: ui_normValue.getValue() });
    ControlSource.update("ui");
  });

  ui_srvbParams.on("change", (newValues) => {
    if (newValues !== null) {
      const param = UI_ChangingParamID.current;
      MessageToHost.requestParamValueUpdate(param.name, param.value);
    }
  });
}
