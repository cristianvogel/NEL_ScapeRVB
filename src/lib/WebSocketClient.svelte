<script lang="ts">
  import { ConsoleText, WebSocketPort } from "../stores/stores.svelte";
  import { onDestroy } from 'svelte';

let { port } = $props();



// Create a new WebSocket connection
const socket = new WebSocket(`ws://localhost:${port}`);

// Handle WebSocket open event
socket.addEventListener('open', () => {
  console.log(`Svelte component ws connection: ${socket.url}`);
  // Send a message to the server
  socket.send( JSON.stringify( { requestState: true } ) );
  socket.send( JSON.stringify( {requestClientId: true } ) );
});

// Handle incoming messages
socket.addEventListener('message', (event) => {
 ConsoleText.extend(`Svelte rcv from ws`);
 console.log( event.data );
});



</script>
