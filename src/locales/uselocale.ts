import { compile, computed, unref } from "vue";
import { useLocaleStoreWithOut } from "../store/modules/locale";
import { i18n } from "./setupI18n";

export function useLocale() {
  const localeStore = useLocaleStoreWithOut();
  const getLocale = computed(() => localeStore.getLocale);

  const getAntdLocale = computed((): any => {
    console.log("i18n", i18n);
    return i18n.global.getLocaleMessage(unref(getLocale)?.antdLocale ?? {});
  });

  return {
    getAntdLocale,
  };
}
