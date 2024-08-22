import { UI_DialParams, UI_ScapeParams, UI_AdditionalParams } from "../stores/stores.svelte";
import { equiv } from "@thi.ng/equiv";
import { roundTo } from "@thi.ng/math"

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {

const ui_dialValues = patch.getVar("ui_dialValues_object");
  if (ui_dialValues) {
    ui_dialValues.on("change", (newValues) => {
      // CablesUI always seems to send a null then an updated object...
      // Handle it here for now
     UI_DialParams.update( {...newValues} )
    });
  };

const ui_scapeParams = new Map([
  ["scapeLevel", patch.getVar("ui_scapeLevel")],
  ["scapeLength", patch.getVar("ui_scapeLength")],
  ["scapeReverse", patch.getVar("ui_scapeDirection")] // todo: rename in Cables to match
]);

ui_scapeParams.forEach((variable, param) => {
  if (variable) {
    variable.on("change", (newValue) => {
      if (equiv(newValue, UI_ScapeParams.current[param])) return;
      UI_ScapeParams.update({ ...UI_ScapeParams.current, [param]: newValue });
    });
  }
});

const ui_additionalParams = new Map([
  ["structure", patch.getVar("ui_structure")],
  ["position", patch.getVar("ui_position")],
]);

ui_additionalParams.forEach((variable, param) => {
  if (variable) {
    
    variable.on("change", ( _newValue) => {
      if (equiv( _newValue, UI_AdditionalParams.current[param] ) ) return;
      let newValue = _newValue;
      UI_AdditionalParams.update({ ...UI_AdditionalParams.current, [param]: newValue });
    });
  }
});


}; // end init patch listeners 