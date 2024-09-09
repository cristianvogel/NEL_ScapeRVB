<script>
  import { onMount } from "svelte";
  import {ConsoleText, UI_ChangingParamID } from "./stores/stores.svelte";
  import { fade } from "svelte/transition";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  let cablesLoaded = $state(false);

  onMount(() => {
    // Second setup the listener for CABLES loader
    document.addEventListener("CABLES.jsLoaded", function () {
      CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        prefixAssetPath: "",
        assetPath: "assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => (cablesLoaded = true),
        onFinishedLoading:   ()=>{},
        canvas: { willReadFrequently: true, alpha: true, premultipliedAlpha: true }, // make canvas transparent
      });
      // update stores related to Cables patch
      console.log("Patch vars ->", CABLES.patch.getVars());
      initPatchListeners( CABLES.patch );
      MessageToHost.requestReady();
      RegisterMessagesFromHost();
    });
  });

$inspect( UI_ChangingParamID.current );
</script>

<canvas id="glcanvas" width="100vw" height="100vh" willReadFrequently="true"></canvas>

{#if cablesLoaded}
  <pre class="console-text">{ConsoleText.current}</pre>
{:else}
  <pre class="console-text" in:fade>Loading...</pre>
{/if}

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: chartreuse;
    font-size: xx-small;
  }
</style>
