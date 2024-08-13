import { UI_DialParams, UI_ExtraParams } from "../stores/stores.svelte";
import { equiv } from "@thi.ng/equiv";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
const ui_dialValues = patch.getVar("ui_dialValues_object");
  if (ui_dialValues) {
    ui_dialValues.on("change", (newValues) => {
      // Update the Svelte store with new 'dial' values
      // CablesUI always seems to send a null then an updated object...
      // Handle it here for now
     UI_DialParams.update( {...newValues} )
    });
  };

const ui_extraParams = { position: patch.getVar("ui_position"), scape: patch.getVar("ui_scape") };  
if (ui_extraParams.position && ui_extraParams.scape) {

  ui_extraParams.position.on("change", (position) => {
    if (equiv(position, UI_ExtraParams.current.position)) return;
    UI_ExtraParams.update( { ...UI_ExtraParams.current,  position } )
  });

  ui_extraParams.scape.on("change", (scape) => {
    if (equiv(scape, UI_ExtraParams.current.scape)) return;
    UI_ExtraParams.update( { ...UI_ExtraParams.current,  scape } )
  });
};

}; // end init patch listeners 