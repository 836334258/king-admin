import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import { setupRouter } from "./router";
import "ant-design-vue/dist/antd.css";
import { setupStore } from "./store";
import { setupI18n } from "./locales/setupI18n";

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);
  setupRouter(app);

  await setupI18n(app);

  app.mount("#app");
}

bootstrap();
