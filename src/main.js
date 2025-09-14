import "vue-toastification/dist/index.css";
import "./style.css";

import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import Toast, { POSITION } from "vue-toastification";
import { createI18n } from "vue-i18n";
import { createApp } from "vue";

import messages from "./i18n/messages";
import router from "./routes";
import App from "./App.vue";


const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});
app.mount("#app");
