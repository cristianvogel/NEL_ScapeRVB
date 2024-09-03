import { UI_SrvbParams } from "../stores/stores.svelte";
import { MessageToHost } from "./NativeMessage.svelte";
import { EPS } from "@thi.ng/math"

// Function to initialize listeners for vars coming
// via the Cables patch
export function initPatchListeners( patch ) {
  console.log("initPatchListeners");
  const ui_srvbParams = patch.getVar("ext_srvbParams_object");
  const ui_leftButtonIsDown = patch.getVar("ui_leftButtonIsDown");
  const ui_mouseIsChangingParamID = patch.getVar("ui_mouseIsChangingParamID");

  ui_srvbParams.on("change", (newValues) => {
    if (newValues === null) return;
    const curr = newValues;
    const activeParam = ui_mouseIsChangingParamID.getValue() ;
    const paramValue = curr[ activeParam ];
    const fallbackValue =  EPS;
    if ( newValues.source === "host" ) return;
    console.log("activeParam: " + activeParam + " value:" + paramValue)
    MessageToHost.requestParamValueUpdate( activeParam, paramValue || 0.0 );
  });




  };



