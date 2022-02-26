import App from "./App.svelte";

const app = new App({
  target: document.querySelector("#bodyTag"),
  props: {
    name: "world",
  },
});

export default app;
