<script lang='ts'>
import { DialValues } from "../stores/stores.svelte";


</script>


<div class="console-text" ><pre>{DialValues.current}</pre></div>

<style>
    .console-text {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      color: chartreuse;
    }
  </style>