<script lang="ts">
  import { DialValues } from "../stores/stores.svelte";
  import { MessageToHost, RegisterMessagesFromHost } from "./NativeMessage.svelte";

  let prevDialValues = [];

  RegisterMessagesFromHost();
  MessageToHost.requestReady();

  $effect(() => {
    const current = DialValues.current;
    const paramNames = ["size", "decay", "mode", "mix"];
    paramNames.forEach((param, index) => {
      if (current[index] !== prevDialValues[index]) {
        MessageToHost.requestParamValueUpdate(param, current[index] || 0);
      }
    });
    return () => {
      // if a callback is provided, it will run
      // a) immediately before the effect re-runs
      // b) when the component is destroyed
      prevDialValues = current;
    };
  });
</script>

<div class="console-text"><pre>{DialValues.current}</pre></div>

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: chartreuse;
  }
</style>
