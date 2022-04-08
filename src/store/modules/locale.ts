import type { LocalType, LocalSetting } from "/#/config";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { createLocalStorage } from "/@/utils/cache";
import { LOCALE_KEY } from "/@/enums/cacheEnum";
import { localeSetting } from "/@/settings/localeSetting";

const ls = createLocalStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocalSetting;

interface LocalState {
  localeInfo: LocalSetting;
}

export const useLocalStore = defineStore("app-locale", {
  state: () => {
    return {
      localeInfo: lsLocaleSetting,
    };
  },
  getters: {
    getLocale(): LocalType {
      return this.localeInfo?.locale ?? "zh_CN";
    },
  },
});

export function useLocaleStoreWithOut() {
  return useLocalStore(store);
}
