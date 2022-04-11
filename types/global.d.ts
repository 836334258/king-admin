interface ImportMetaEnv extends ViteEnv {
  // 让vite的env有代码提示
}

declare type Nullable<T> = T | null;

declare interface ViteEnv {
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_GLOB_APP_TITLE: string;
}

declare type Recordable<T = any> = Record<string, T>;

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
