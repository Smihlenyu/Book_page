import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import store from "@/store/book";
import { createPinia } from "pinia";
import "@/assets/style/main.scss";
createApp(App).use(store).use(router).use(createPinia()).mount("#app");
