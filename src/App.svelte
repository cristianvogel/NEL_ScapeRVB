<script type="ts">
  import { onMount } from "svelte";
  import { WWTimer } from "./lib/WorkerTimer.svelte";
  import { fade } from "svelte/transition";
  import Plugin from "./lib/Plugin.svelte";
  import { initPatchListeners } from "./lib/patchListeners.svelte";

 // @ts-ignore
 let cables = CABLES;
  let cablesLoaded = $state(false);

  const timers = [new WWTimer(500), new WWTimer(1000), new WWTimer(2000)];

  let timedOut = $state(false);

  onMount(() => {
    document.addEventListener("CABLES.jsLoaded", function () {
      // Now CABLES is defined, proceed with initialization
      cables.patch = new cables.Patch({
        patch: cables.exportedPatch,
        prefixAssetPath: "",
        assetPath: "assets/",
        jsPath: "js/",
        glCanvasId: "glcanvas",
        glCanvasResizeToWindow: true,
        onError: (e) => console.error(e),
        onPatchLoaded: () => console.log("Patch Loaded"),
        onFinishedLoading: initPatchListeners,
        canvas: { alpha: true, premultipliedAlpha: true }, // make canvas transparent
      });
      console.log("Patch vars ->", cables.patch.getVars());
      // set state flag
      cablesLoaded = true;
    });
  });
</script>

<svelte:head>
  <script type="text/javascript" src="/src/cables-js/patch.js" async></script>
</svelte:head>

<canvas id="glcanvas" width="100vw" height="100vh"></canvas>

{#if cablesLoaded}
  {timers[2].start(() => (timedOut = true))}
  <Plugin />
  {#if !timedOut}
    <pre class="console-text" out:fade>NEL SRVB v1.0</pre>
  {/if}
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
