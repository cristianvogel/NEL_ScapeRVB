import { UI_ChangingParamID, ControlSource } from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_normValue = patch.getVar("ui_normValue");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_allParamsState = patch.getVar("ext_srvbParams_object");

  ui_mouseIsChangingParamID.on("change", (value) => {
    UI_ChangingParamID.updateName(value || "disengage");
  });

  ui_normValue.on("change", (value) => {
    const name = ui_mouseIsChangingParamID.getValue() || "disengage";
    
    UI_ChangingParamID.update({
      name: name || "disengage",
      value,
    });
  });

  ui_allParamsState.on("change", (newValues: Array<"host" | "ui" | number>) => {
    if (newValues !== null) {
      ControlSource.update(newValues["source"]);
      const param = UI_ChangingParamID.current;
      MessageToHost.requestParamValueUpdate(param.name, param.value);
    }
  });
}
