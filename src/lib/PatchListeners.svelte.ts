import { UI_ChangingParamID, ControlSource } from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";
import { EPS } from "@thi.ng/math";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_normValue = patch.getVar("ui_normValue");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");
  const ui_allParamsState = patch.getVar("ext_srvbParams_object");

  ui_mouseIsChangingParamID.on("change", (name) => {
    UI_ChangingParamID.updateName( name || "disengage");
    UI_ChangingParamID.updateValue();
  });

  ui_normValue.on("change", (value) => {
    const name = ui_mouseIsChangingParamID.getValue() || "disengage";
    ControlSource.update("ui");
    UI_ChangingParamID.update({
      name: name || "disengage",
      value: value + EPS,
    });
  });

  ui_allParamsState.on("change", (newValues: Array<"host" | "ui" | number>) => {
    if (newValues !== null) {
      ControlSource.update(newValues["source"]);
      const param = UI_ChangingParamID.current;
      MessageToHost.requestParamValueUpdate(param.name, param.value + EPS);
    }
  });
}
