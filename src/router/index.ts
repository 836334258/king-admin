import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { basicRoutes } from "./routes";

const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.anme);
    getRouteNames(item.children || []);
  });

getRouteNames(basicRoutes);

// ====== LOG START ======
console.log("\n");
console.group("Log");
console.log("WHITE_NAME_LIST", WHITE_NAME_LIST);
console.groupEnd();
console.log("\n");
// ====== LOG END ======

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
});

// ====== LOG START ======
console.log("\n");
console.group("Log");
console.log("router", router);
console.groupEnd();
console.log("\n");
// ====== LOG END ======

export function setupRouter(app: App) {
  app.use(router);
}
