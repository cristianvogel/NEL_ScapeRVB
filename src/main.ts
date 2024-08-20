
import { mount } from 'svelte';
import App from './App.svelte'

    //// CABLES loaded this way works most reliably
    const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "/patch.js";
  script.async = true;
  document.head.appendChild(script);


//@ts-ignore
const app = mount(App, { target: document.getElementById("app") });

export default app;
