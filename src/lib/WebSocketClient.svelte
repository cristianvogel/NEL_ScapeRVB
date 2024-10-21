<script lang="ts">
  import { ConsoleText } from "../stores/stores.svelte";

  let { port } = $props();
  // Create a new WebSocket connection
  const socket = new WebSocket(`ws://127.0.0.1:${port}`);
  let repeatedSend: NodeJS.Timeout;

  function handleMessage(event) {
    // const message = JSON.parse(event.data);
  }

  socket.addEventListener("open", (event) => {
    console.log("Svelte:: WS connection " + socket.readyState);
  });

  socket.addEventListener("message", handleMessage);

  ConsoleText.extend("Svelte WS Client mounted");
</script>
