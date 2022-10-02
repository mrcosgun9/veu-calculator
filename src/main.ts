import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoDelete, CoAvTimer } from "oh-vue-icons/icons";
addIcons(CoDelete, CoAvTimer);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);

app.mount("#app");
