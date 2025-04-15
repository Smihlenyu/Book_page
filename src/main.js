import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import stores from "@/stores/index";
import { createPinia } from "pinia";
import "@/assets/style/main.scss";
createApp(App).use(stores).use(router).use(createPinia()).mount("#app");
