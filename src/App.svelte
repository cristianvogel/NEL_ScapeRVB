<script>
  import { onMount } from "svelte";
  import { SimpleTimer } from "./lib/Timer";
  import { CablesPatch } from "./stores/stores.svelte";
  import { fade } from "svelte/transition";
  import SendToHost from "./lib/SendToHost.svelte";
  import SendToUi from "./lib/SendToUI.svelte";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import {
    MessageToHost,
    RegisterMessagesFromHost,
  } from "./lib/NativeMessage.svelte";

  let cablesLoaded = $state(false);

  // Do first engine init
  RegisterMessagesFromHost();
  MessageToHost.requestReady();



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
        onFinishedLoading: initPatchListeners,
        canvas: { alpha: true, premultipliedAlpha: true }, // make canvas transparent
      });
      // update stores related to Cables patch
      console.log("Patch vars ->", CABLES.patch.getVars());

      CablesPatch.update(CABLES.patch);
    });
  });
</script>

<canvas id="glcanvas" width="100vw" height="100vh"></canvas>

{#if cablesLoaded}
  <SendToHost />
  <SendToUi />
{:else}
  <pre class="console-text" in:fade>Loading...</pre>
{/if}

<style>
  .console-text {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: chartreuse;
  }
</style>
