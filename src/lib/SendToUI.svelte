<script lang="ts">
  import { equiv } from "@thi.ng/equiv";
  import { HostState, CablesPatch } from "../stores/stores.svelte";
  import { REGISTERED_PARAM_NAMES } from "../stores/constants";

  let hostStateMemo = {};
  $effect(() => {
    const current = HostState.current;
    console.log("current", current);
    // iterate over the keys and values of DialValues.current and send MessageToHost
    Object.keys(current).forEach((param) => {
      // branches for dealing with the different types of parameters
      // and an optimisation to avoid sending the same value twice
      
      if (equiv(current[param], hostStateMemo[param])) return;

      if (REGISTERED_PARAM_NAMES.includes(param)) {
        composeDialParamsUpdate(param, current[param] || 0);
        composeExtraParamsUpdate(param, current[param] || 0);
      }
      // now send and update the Svelte5 store
      messageToUI(param, current[param] || 0);
      hostStateMemo[param] = current[param];
    });
    return () => {
      // if a callback is provided, it will run
      // a) immediately before the effect re-runs
      // b) when the component is destroyed
    };
  });

  /**
    this can all be massively improved code-wise,
    just want to see it working first
  **/

  function messageToUI(param, value) {
    let targetVar = CablesPatch.current.getVar("rcv_" + param);
    if (targetVar) {
      targetVar.setValue(value);
    }
  }

  function composeDialParamsUpdate(param, value) {
    let targetVar = CablesPatch.current.getVar("ui_dialValues_object");
  
        let currentValue = targetVar.getValue();
        targetVar.setValue( {...currentValue, [param]: value} );
    
  }

 /**
  *  This is not working, causing conflicts between sender and receiver
  * todo: make Object of all extra parameters, like the Dials one
  */
  function composeExtraParamsUpdate(param, value) {
    let targetVar = CablesPatch.current.getVar("ui_position");
    if (targetVar && param === "position") {
        targetVar.setValue( value );
    }
    targetVar = CablesPatch.current.getVar("ui_scape");
    if (targetVar && param === "scape") {
        targetVar.setValue( value );
    }
  }


</script>
