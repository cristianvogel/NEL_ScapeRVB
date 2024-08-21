<script lang="ts">
  import { UI_DialParams, ConsoleText, UI_ScapeParams } from "../stores/stores.svelte";
  import { MessageToHost } from "./NativeMessage.svelte";
  import { equiv } from "@thi.ng/equiv";

  let dialValuesMemo = {};
  let scapeValuesMemo = {};

  $effect(() => {
    const current = UI_DialParams.current; 
     // iterate over the keys and values of DialValues.current and send MessageToHost
    Object.keys(current).forEach((param) => {
      if (current[param] === dialValuesMemo[param]) return;
        MessageToHost.requestParamValueUpdate(param, current[param] || 0);   
        dialValuesMemo = current;
    });
    return () => {
      // if a callback is provided, it will run
      // a) immediately before the effect re-runs
      // b) when the component is destroyed
    }
  });

  $effect(() => {
    const current = UI_ScapeParams.current;
    // iterate over the keys and values of ExtraValues.current and send MessageToHost
    Object.keys(current).forEach((param) => {
      if (current[param] === scapeValuesMemo[param]) return;
        MessageToHost.requestParamValueUpdate(param, current[param] || 0);   
        scapeValuesMemo = current;
    });
    return () => { }
  });



</script>

<div class="console-text"><pre>{ConsoleText.current}</pre></div>

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: chartreuse;
    font-size: x-small;
  }
</style>
