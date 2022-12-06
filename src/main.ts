import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
axios.defaults.withCredentials = true;

app.use(VueAxios, axios);

app.provide("axios", app.config.globalProperties.axios);
app.provide("router", router);
app.mount("#app");
