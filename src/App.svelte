<script>
  import { onMount } from "svelte";
  import {
    ConsoleText,
    CablesReady,
    HostState,
    VFSKeys,
    WebSocketPort,
  } from "./stores/stores.svelte";
  import { fade } from "svelte/transition";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  import WebSocketClient from "./lib/WebSocketClient.svelte";
    import { CURRENT_UI_VERSION } from "./stores/constants";

  onMount(() => {
    RegisterMessagesFromHost();

    // Second setup the listener for CABLES loader
    document.addEventListener("CABLES.jsLoaded", function (event) {
      CABLES.patch = new CABLES.Patch({
        patchFile: "scape_space_ui/js/" + CURRENT_UI_VERSION + ".json",
        prefixAssetPath: "/assets/",
        assetPath: "/assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => console.count("UI loaded"),
        onFinishedLoading: () => {
          console.count("UI finished loading");
          initPatchListeners(CABLES.patch);
          MessageToHost.requestReady();
          CablesReady.update(true);
        },
        canvas: {
          willReadFrequently: true,
          alpha: false,
          premultipliedAlpha: true,
        },
        variables: {
        
        },
      });
    });
  });

  let firstRun = true;

  $effect(() => {
    if (firstRun && Object.keys(HostState.current).length > 0) {
      CABLES.patch
        .getVar("host_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      CABLES.patch
        .getVar("ui_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      firstRun = false;
    }
  });

  $effect(() => {
    if (ConsoleText.current.length > 0) {
      setTimeout(() => {
        ConsoleText.update("");
      },6000);
    }
  });




</script>



<canvas id="glcanvas" width="10vw" height="10vh" willReadFrequently="true"></canvas>

<!-- NOT NEEDED ON MAC
{#if WebSocketPort.current > 0} 
<WebSocketClient port = { WebSocketPort.current } />
{/if} -->

{#if CablesReady.current}
  <pre class="console-text">VFS: {VFSKeys.count} || {ConsoleText.current} </pre>
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
    z-index: 137;
  }
</style>
