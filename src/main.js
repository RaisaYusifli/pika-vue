import "./style.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import router from "./routes";
import App from "./App.vue";
import messages from "./i18n/messages";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

// Create a query client
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
app.mount("#app");
