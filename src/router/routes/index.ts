import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "./base";
import { PageEnum } from "./../../enums/pageEnum";
import { mainOutRoutes } from "./mainOut";
import { t } from "/@/hooks/web/usel18n";
export const RootRoute = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
  meta: {
    title: t("routes.basic.login"),
  },
};

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  // PAGE_NOT_FOUND_ROUTE 会报错
];
