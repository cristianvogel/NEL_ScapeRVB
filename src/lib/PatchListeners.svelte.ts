import {
  GestureSource_SCAPE,
  GestureSource_SRVB,
  ConsoleText,
} from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";


// Function to initialize listeners for vars coming
// via the Cables patch

// be aware they have different names in the patch than 
// in the manifest here.... todo: fix this
export function initPatchListeners(patch) {

  const ui_bypassSRVB = patch.getVar("ui_bypassSRVB");
  const ui_bypassConvolver = patch.getVar("ui_bypassConvolver");

  ui_bypassSRVB.on("change", (value) => {
    if ( GestureSource_SRVB.prev === "host" ) return;
    if ( GestureSource_SRVB.current === "ui" ) updateView( "srvbBypass", value );
  });
  
  ui_bypassConvolver.on("change", (value) => {
    if ( GestureSource_SCAPE.prev === "host" ) return;
    if ( GestureSource_SCAPE.current === "ui" ) updateView( "scapeBypass", value);
  });

};   

function updateView(bypassName, value ) {
     MessageToHost.updateHost( bypassName, value < 0.5 ? 0.0 : 1.0 );
}