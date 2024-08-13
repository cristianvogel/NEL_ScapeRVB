<script lang="ts">
  import { equiv } from "@thi.ng/equiv";
  import { HostState, CablesPatch } from "../stores/stores.svelte";
  import { REGISTERED_PARAM_NAMES } from "../stores/constants";

  let hostStateMemo = {};
  $effect(() => {
    const current = HostState.current;
    // iterate over the keys and values of DialValues.current and send MessageToHost
    Object.keys(current).forEach((param) => {
      // branches for dealing with the different types of parameters
      // and an optimisation to avoid sending the same value twice
      
      if (equiv(current[param], hostStateMemo[param])) return;
      console.log("param ->", param);
      if (REGISTERED_PARAM_NAMES.includes(param)) {
        composeDialValuesUpdate(param, current[param] || 0);
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

  function messageToUI(param, value) {
    let targetVar = CablesPatch.current.getVar("rcv_" + param);
    if (targetVar) {
      targetVar.setValue(value);
    }
  }

  function composeDialValuesUpdate(param, value) {
    let targetVar = CablesPatch.current.getVar("ui_dialValues_object");
    if (targetVar) {
        let currentValue = targetVar.getValue();
        targetVar.setValue( {...currentValue, [param]: value} );
    }
  }
</script>
