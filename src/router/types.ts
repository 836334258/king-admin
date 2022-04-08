import { defineComponent } from "vue";
import type { RouteMeta, RouteRecordRaw } from "vue-router";

export type Component<T> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

// export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
//   name: string;
//   meta: RouteMeta;
//   component?: Component | string;
//   components?: Component;
//   children?: AppRouteRecordRaw[];
//   props?: Recordable;
//   fullPath?: string;
// }
