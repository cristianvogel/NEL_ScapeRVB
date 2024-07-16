import { initPatchListeners } from '../lib/PatchListeners.svelte';

document.addEventListener("CABLES.jsLoaded", function () {
    // Now CABLES is defined, proceed with initialization
    CABLES.patch =  new CABLES.Patch({
      patch: CABLES.exportedPatch,
      prefixAssetPath: "",
      assetPath: "assets/",
      jsPath: "js/",
      glCanvasId: "glcanvas",
      glCanvasResizeToWindow: true,
      onError: (e)=> console.error(e) ,
      onPatchLoaded: ()=>console.log( "Patch Loaded" )  ,
      onFinishedLoading: initPatchListeners,
      canvas: { alpha: true, premultipliedAlpha: true }, // make canvas transparent
    });
    console.log( 'Patch vars ->', CABLES.patch.getVars() );

  });

