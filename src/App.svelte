<script>
  import { onMount } from "svelte";
  import {
    ConsoleText,
    CablesReady,
    GestureSource_SRVB,
    GestureSource_SCAPE,
    HostState,
    WebSocketPort
  } from "./stores/stores.svelte";
  import { fade } from "svelte/transition";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  import { PARAM_DEFAULTS } from "./stores/constants";
  import WebSocketClient from "./lib/WebSocketClient.svelte";

  onMount(() => {
    RegisterMessagesFromHost();


    // Second setup the listener for CABLES loader
    document.addEventListener("CABLES.jsLoaded", function (event) {
      CABLES.patch = new CABLES.Patch({
        patchFile: "scape_space_ui_00/js/scape_space_ui_00.json",
        prefixAssetPath: "/assets/",
        assetPath: "/assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => {
        
        },
        onFinishedLoading: () => {
          initPatchListeners(CABLES.patch);
          MessageToHost.requestReady();
          CablesReady.update(true);
        },
        canvas: {
          willReadFrequently: true,
          alpha: true,
          premultipliedAlpha: true,
        },
        variables: {  },
      });
    });
  });

let firstRun = true;

 $effect(() => {
  if (  firstRun  && Object.keys(HostState.current).length > 0  ) {
    CABLES.patch.getVar("host_scapeReverse").setValue( HostState.snapshot.scapeReverse );
    CABLES.patch.getVar("ui_scapeReverse").setValue( HostState.snapshot.scapeReverse );
    firstRun = false;
  }
});


  $effect(() => {
    if (ConsoleText.current.length > 0) {
      setTimeout(() => {
        ConsoleText.update("");
      }, 3000);
    }
  });
</script>

<canvas id="glcanvas" width="100vw" height="100vh" willReadFrequently="true"></canvas>

{#if WebSocketPort.current > 1}
<WebSocketClient port={ WebSocketPort.current } />
{/if}

{#if CablesReady.current}  
  <pre
    class="console-text">{ConsoleText.current} </pre>

  <pre class="console-text" style="bottom: 2rem;">{ConsoleText.extended}</pre>
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
