import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/index.css";

createApp(App).use(router).mount("#app");
