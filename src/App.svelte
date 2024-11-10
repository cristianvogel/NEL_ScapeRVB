<script>
  import { onMount } from "svelte";
  import {
    CablesReady,
    ConsoleText,
    HostState
  } from "./stores/stores.svelte";

  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  import { CURRENT_UI_VERSION } from "./stores/constants";



  let firstRun = true;
  let getUserConsole = null;

  onMount(() => {
    //  set up the listener for CABLES loader
    console.log("loading cables...");
    document.addEventListener("CABLES.jsLoaded", function (event) {
      CABLES.patch = new CABLES.Patch({
        patchFile: "scape_space_ui/js/" + CURRENT_UI_VERSION + ".json",
        prefixAssetPath: "/assets/",
        assetPath: "/assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => console.count("Patch loaded"),
        onFinishedLoading: () => {
          console.count("UI finished loading");
          getUserConsole = ()=> CABLES.patch.getVar("ext_consoleMessage");
          RegisterMessagesFromHost();
          MessageToHost.requestReady();
          initPatchListeners(CABLES.patch);
          CablesReady.update(true);
  
        },
        canvas: {
          willReadFrequently: true,
          alpha: false,
          premultipliedAlpha: true,
        },
      });
    });
  });


  $effect(() => {
    if (CablesReady.current && firstRun && Object.keys(HostState.current).length > 0) {
      CABLES.patch
        .getVar("host_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      CABLES.patch
        .getVar("ui_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      CABLES.patch
        .getVar("host_structure")
        .setValue(HostState.snapshot.structure);
        CABLES.patch
        .getVar("ui_structureIndex")
        .setValue(HostState.snapshot.structure);
      firstRun = false;
    }
  });

  $effect(()=> {
    if ( ConsoleText.current.length > 0) {
      if (typeof getUserConsole === "function")
      getUserConsole().setValue(ConsoleText.current);
    }
  });

</script>

<canvas id="glcanvas" width="100vw" height="100vh" willReadFrequently="true"
></canvas>

<!-- NOT NEEDED ON MAC
{#if WebSocketPort.current > 0} 
<WebSocketClient port = { WebSocketPort.current } />
{/if} -->

{#if CablesReady.current}
<!-- ready! -->
{:else}
<div class="loading-bar"></div>
{/if}

<style>
 .loading-bar {
    width: 100%;
    margin-top: 2px;
    height: 2px;
    background-color: rgba(10, 72, 10, 0.75);
    position: fixed;
    overflow: hidden;
  }

  .loading-bar::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: #111;
    animation: loading 1s infinite;
  }

  @keyframes loading {
    0% {
      left: -50%;
    }
    100% {
      left: 100%;
    }
  }
</style>
