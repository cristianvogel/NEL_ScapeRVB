import { DialValues } from "../stores/stores.svelte";

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners(patch) {
  const ui_dialValues = patch.getVar("ui_dialValues");
  if (ui_dialValues) {
    // Will be called every time value changes
    ui_dialValues.on("change", (newValues) => {
      // Update the Svelte store with new values
      DialValues.update( newValues.map((v) => v.toFixed(2)) );
    });
  }
}