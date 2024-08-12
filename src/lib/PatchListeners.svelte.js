import { DialValues } from "../stores/stores.svelte";
import { equiv } from "@thi.ng/equiv";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_dialValues = patch.getVar("ui_dialValues_object");
 let prevValues = null;
  if (ui_dialValues) {
    // Will be called every time value changes
    ui_dialValues.on("change", (newValues) => {
      // Update the Svelte store with new values
      // CablesUI always seems to send a null then an updated object...
      // Handle it here for now
     if ( newValues  !== null && !equiv( newValues, prevValues ) ) DialValues.update( {...newValues} );
      prevValues = newValues;
    });
  }
}