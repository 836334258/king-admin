import { store } from "/@/store";
import { defineStore } from "pinia";
import { ErrorLogInfo } from "/#/store";
import { formatToDateTime } from "/@/utils/dateUtil";

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  errorLogListCount: number;
}

export const useErrorLogStore = defineStore("app-error-log", {
  state: (): ErrorLogState => ({
    errorLogInfoList: null,
    errorLogListCount: 0,
  }),
  getters: {
    getErrorLogInfoList(): ErrorLogInfo[] {
      return this.errorLogInfoList || [];
    },
    getErrorLogListCount(): number {
      return this.errorLogListCount;
    },
  },
  actions: {
    addErrorLogInfo(info: ErrorLogInfo) {
      const item = {
        ...info,
        time: formatToDateTime(new Date()),
      };

      this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
      this.errorLogListCount += 1;
    },
    setErrorLogListCount(count: number): void {
      this.errorLogListCount = count;
    },
  },
});

export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store);
}
