import { LocalType } from "./../../types/config.d";
import { LocalSetting } from "/#/config";

export const LOCALE: { [key: string]: LocalType } = {
  ZH_CN: "zh_CN",
  EN_US: "en",
};

export const localeSetting: LocalSetting = {
  showPicker: true,
  locale: LOCALE.ZH_CN,
  fallback: LOCALE.ZH_CN,
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};
