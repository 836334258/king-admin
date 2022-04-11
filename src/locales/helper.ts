import { set } from "lodash-es";
import { LocaleType } from "/#/config";

export function genMessage(
  langs: Record<string, Record<string, any>>,
  prefix = "lang"
) {
  const obj: Recordable = {};

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split("/");
    const moduleName = keyList.shift();
    const objKey = keyList.join(".");

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });

  return obj;
}

export function setHtmlPageLang(locale: LocaleType) {
  document.querySelector("html")?.setAttribute("lang", locale);
}

export const loadLocalePool: LocaleType[] = [];

export function setLoadLocalePool(cb: (loadLocalPool: LocaleType[]) => void) {
  cb(loadLocalePool);
}
