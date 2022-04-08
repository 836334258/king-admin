export const mainOutRoutes = [
  {
    path: "/main-out",
    name: "MainOut",
    component: () => import("/@/views/demo/main-out/index.vue"),
    meta: {
      title: "MainOut",
      ignoreAuth: true,
    },
  },
];
