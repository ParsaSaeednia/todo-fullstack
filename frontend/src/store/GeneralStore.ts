import { defineStore } from "pinia";

export const useGeneralStore = defineStore("loading", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    startLoading(): void {
      this.isLoading = true;
    },
    stopLoading(): void {
      this.isLoading = false;
    },
  },
});
