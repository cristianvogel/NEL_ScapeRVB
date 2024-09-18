import {
  ControlSource,
  srvbBypassFSM,
  scapeBypassFSM,
  ConsoleText,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";


// Function to initialize listeners for vars coming
// via the Cables patch

// be aware they have different names in the patch than 
// in the manifest here.... todo: fix this
export function initPatchListeners(patch) {

  const ui_srvbBypass = patch.getVar("ui_bypassSRVB");
  const ui_scapeBypass = patch.getVar("ui_bypassConvolver");

  ///////////// special case for bypasses and scapeLength

   function handleBypassChange(bypassName, bypassFSM, value ) {
     MessageToHost.requestParamValueUpdate(bypassName, Math.round(value)  );
  }
  
  ui_srvbBypass.on("change", (value) => {
    handleBypassChange( "srvbBypass", srvbBypassFSM, value );
  });
  
  ui_scapeBypass.on("change", (value) => {
    handleBypassChange( "scapeBypass", scapeBypassFSM, value);
  });

};