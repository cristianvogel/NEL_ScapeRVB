<script >
  import { onMount } from "svelte";
  import { WWTimer } from "./lib/WorkerTimer.svelte";
  import { fade } from "svelte/transition";
  import Plugin from "./lib/Plugin.svelte";
  import { initPatchListeners } from "./lib/PatchListeners.svelte";
  import { MessageToHost, RegisterMessagesFromHost } from "./lib/NativeMessage.svelte";

 // @ts-ignore

  let cablesLoaded = $state(false);

  const timers = [new WWTimer(500), new WWTimer(1000), new WWTimer(2000)];

  let timedOut = $state(false);

  onMount(() => {
    // First setup the listener for CABLES loader
    document.addEventListener("CABLES.jsLoaded", function () {
      CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
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
      console.log("Patch vars ->", CABLES.patch.getVars());
      // set state flag
      cablesLoaded = true;
    });

      // Do first engine init
      RegisterMessagesFromHost()
      MessageToHost.requestReady()
  });
</script>

<svelte:head>
  <script type="text/javascript" src="/cables-ui/js/patch.js" async></script>
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
