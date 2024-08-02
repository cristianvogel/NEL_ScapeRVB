<script lang="ts">
  import { DialValues, ConsoleText } from "../stores/stores.svelte";
  import { MessageToHost, RegisterMessagesFromHost } from "./NativeMessage.svelte";

  RegisterMessagesFromHost();
  MessageToHost.requestReady();

  let dialValuesMemo = {};
  $effect(() => {
    const current = DialValues.current; 

     // iterate over the keys and values of DialValues.current and send MessageToHost
    Object.keys(current).forEach((param) => {
      if (current[param] === dialValuesMemo[param]) return;
      console.log(param, current[param]);
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
