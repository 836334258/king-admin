import { REDIRECT_NAME } from "./../../router/constant";
import { useLocalStore } from "./../../store/modules/locale";
import { useI18n } from "/@/hooks/web/usel18n";
import { useRouter } from "vue-router";
import { useGlobSetting } from "../setting";
import { useTitle as usePageTitle } from "@vueuse/core";
import { unref, watch } from "vue";

export function useTitle() {
  const { title } = useGlobSetting();
  const { t } = useI18n();
  const { currentRoute } = useRouter();
  const localeStore = useLocalStore();
  const pageTitle = usePageTitle();

  watch(
    [() => currentRoute.value.path, () => localeStore.getLocale],
    () => {
      const route = unref(currentRoute);
      if (route.name === REDIRECT_NAME) {
        return;
      }

      const tTitle = t(route?.meta?.title as string);
      pageTitle.value = tTitle ? ` ${tTitle} - ${title} ` : `${title}`;
    },
    {
      immediate: true,
    }
  );
}
