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

  onMount(() => {
    RegisterMessagesFromHost();

    // Second set up the listener for CABLES loader
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
          "ext_consoleMessage" : `𝌺 ${CURRENT_UI_VERSION} <br> Welcome.` 
        },
      });
    });
  });

  let firstRun = true;
  let getUserConsole = () => {};

  $effect(() => {
    if (CablesReady.current && firstRun && Object.keys(HostState.current).length > 0) {
      getUserConsole = ()=> CABLES.patch.getVar("ext_consoleMessage");
      CABLES.patch
        .getVar("host_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      CABLES.patch
        .getVar("ui_scapeReverse")
        .setValue(HostState.snapshot.scapeReverse);
      firstRun = false;
    }
  });

  $effect(()=> {
    if ( CablesReady.current && ConsoleText.current.length > 0) {
      getUserConsole().setValue(ConsoleText.snapshot);
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
    background-color: rgba(191, 192, 191, 0.75);
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
