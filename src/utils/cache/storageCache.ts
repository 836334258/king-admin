import { isNullOrUnDef } from "../is";
import { cacheCipher } from "./../../settings/encryptionSetting";
export interface CreateStorageParams {
  key: string;
  iv: string;
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}

export const createStorage = ({
  prefixKey = "",
  storage = sessionStorage,
  timeout = null,
}: Partial<CreateStorageParams> = {}) => {
  const WebStorage = class WebStorage {
    private storage: Storage;
    private prefixKey?: string;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
    }

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: !isNullOrUnDef(expire) ? +new Date() + expire * 1000 : null,
      });

      const stringifyValue = stringData;
      this.storage.setItem(this.getKey(key), stringifyValue);
    }

    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;

      try {
        const decVal = val;
        const data = JSON.parse(decVal);
        const { value, expire } = data;

        if (isNullOrUnDef(expire) || expire > +new Date()) {
          return value;
        }
        this.remove(key);
      } catch (e) {
        return def;
      }
    }

    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    clear(): void {
      this.storage.clear();
    }
  };

  return new WebStorage();
};
