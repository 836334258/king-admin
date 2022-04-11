import { LocaleType, LocaleSetting } from "/#/config";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { createLocalStorage } from "/@/utils/cache";
import { LOCALE_KEY } from "/@/enums/cacheEnum";
import { localeSetting } from "/@/settings/localeSetting";

const ls = createLocalStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

interface LocalState {
  localeInfo: LocaleSetting;
}

export const useLocalStore = defineStore("app-locale", {
  state: (): LocalState => {
    return {
      localeInfo: lsLocaleSetting,
    };
  },
  getters: {
    getLocale(): LocaleType {
      return this.localeInfo?.locale ?? "zh_CN";
    },
    getShowPicker(): boolean {
      return !!this.localeInfo?.showPicker;
    },
  },
  actions: {
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localeInfo = { ...this.localeInfo, ...info };
      ls.set(LOCALE_KEY, this.localeInfo);
    },
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localeInfo,
      });
    },
  },
});

export function useLocaleStoreWithOut() {
  return useLocalStore(store);
}
