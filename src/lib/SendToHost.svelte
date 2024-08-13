<script lang="ts">
  import { DialValues, ConsoleText, HostState } from "../stores/stores.svelte";
  import { MessageToHost } from "./NativeMessage.svelte";
  import SendToUI from "./SendToUI.svelte";

  let dialValuesMemo = {};
  $effect(() => {
    const current = DialValues.current; 

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
    };
  });


</script>

<div class="console-text"><pre>{Object.values(DialValues.current)} | {ConsoleText.current} </pre></div>

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: chartreuse;
    font-size: x-small;
  }
</style>
