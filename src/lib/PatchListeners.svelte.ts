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
    UI_ChangingParamID.update({name , value: ui_normValue.getValue() + EPS});
  });

  ui_allParamsState.on("change", (newValues: Array<"host" | "ui" | number>) => {
    if (newValues !== null) {
      for (let [param, value] of Object.entries(newValues)) {
        if (param === "source") {
          ControlSource.update(value as string);
        } else {
          UI_ChangingParamID.update({ name: param, value: value });
          MessageToHost.requestParamValueUpdate(param, (value as number) + EPS);
        }
      }
    }
  });
}
