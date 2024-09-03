<script lang="ts">
  import { UI_SrvbParams, ConsoleText, UI_ScapeParams, UI_AdditionalParams } from "../stores/stores.svelte";
  import { MessageToHost } from "./NativeMessage.svelte";

  let dialValuesMemo = {};
  let scapeValuesMemo = {};
  let additionalValuesMemo = {};

  $effect(() => {
    const current = UI_SrvbParams.current; 
    Object.keys(current).forEach((param) => {
      if (current[param] === dialValuesMemo[param]) return;
        MessageToHost.requestParamValueUpdate(param, current[param] || 0);   
        dialValuesMemo = current;
    });
  });

  $effect(() => {
    const current = UI_ScapeParams.current;
    Object.keys(current).forEach((param) => {
      if (current[param] === scapeValuesMemo[param]) return;
        MessageToHost.requestParamValueUpdate(param, current[param] || 0);   
        scapeValuesMemo = current;
    });
    return () => { }
  });

  $effect(() => {
    const current = UI_AdditionalParams.current;
    Object.keys(current).forEach((param) => {
      if (current[param] === additionalValuesMemo[param]) return;
        MessageToHost.requestParamValueUpdate(param, current[param] || 0);   
        additionalValuesMemo = current;
    });

    return () => { }
  });



</script>



<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: chartreuse;
    font-size: x-small;
  }
</style>
