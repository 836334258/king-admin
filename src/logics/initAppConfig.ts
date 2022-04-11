import { primaryColor } from "./../../build/config/themeConfig";
import projectSetting from "/@/settings/projectSetting";
import { deepMerge } from "/@/utils";
import { PROJ_CFG_KEY } from "./../enums/cacheEnum";
import { Persistent } from "./../utils/cache/persistent";
import { ProjectConfig } from "/#/config";
import { useAppStore } from "./../store/modules/app";
import { useLocalStore } from "./../store/modules/locale";
export function initAppConfigStore() {
  const localeStore = useLocalStore();
  const appStore = useAppStore();
  let projCfg: ProjectConfig = Persistent.getLocal(
    PROJ_CFG_KEY
  ) as ProjectConfig;
  projCfg = deepMerge(projectSetting, projCfg || {});
  const darkMode = appStore.getDarkMode;

  const {
    colorWeak,
    grayMode,
    themeColor,

    headerSetting: { bgColor: headerBgColor } = {},
    menuSetting: { bgColor } = {},
  } = projCfg;

  try {
    if (themeColor && themeColor !== primaryColor) {
      // todo changeTheme
    }

    grayMode && updateg;
  } catch (error) {
    console.log(error);
  }
}
