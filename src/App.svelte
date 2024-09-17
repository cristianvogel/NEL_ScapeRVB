<script>
  import { onMount } from "svelte";
  import {
    ConsoleText,
    CablesReady,
    ControlSource,
    UI_ChangingParamID,
  } from "./stores/stores.svelte";
  import { fade } from "svelte/transition";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  import { PARAM_DEFAULTS } from "./stores/constants";

  onMount(() => {
    // Second setup the listener for CABLES loader
    document.addEventListener("CABLES.jsLoaded", function (event) {
      CABLES.patch = new CABLES.Patch({
        patchFile: "MirrorScape-ui-ws/js/MirrorScape-ui-ws.json",
        prefixAssetPath: "/assets/",
        assetPath: "/assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => {},
        onFinishedLoading: () => {
          initPatchListeners(CABLES.patch);
          CablesReady.update(true);
          console.log("UI finished loading.");
        },
        canvas: {
          willReadFrequently: true,
          alpha: true,
          premultipliedAlpha: true,
        },
        variables: {
          ext_srvbParams_object: PARAM_DEFAULTS,
        },
      });
    });

    $effect(() => {
      if (CablesReady.current) {
        console.log("Registering messages with host.");
        RegisterMessagesFromHost();
        MessageToHost.requestReady();
      }
    });

    $effect(() => {
      if (ConsoleText.current.length > 0) {
        setTimeout(() => {
          ConsoleText.update('');
        }, 3000);
      }
    });

    console.log("ui_params set to ", PARAM_DEFAULTS);
    // $inspect( UI_ChangingParamID.current )
  });
</script>

<canvas id="glcanvas" width="100vw" height="100vh" willReadFrequently="true"
></canvas>

{#if CablesReady.current}
  <pre class="console-text">{ConsoleText.current}</pre>
  <!-- 
  <pre class="console-text" style="bottom: 2rem;">{ConsoleText.extended}</pre> -->
{:else}
  <pre class="console-text" in:fade>Loading...</pre>
{/if}

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 7rem;
    color: chartreuse;
    font-size: xx-small;
  }
</style>
