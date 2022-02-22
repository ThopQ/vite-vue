import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },

  actions: {
    increment(val = 1) {
      this.count += val;
    },
  },

  getters: {
    doubleCount: (state) => state.count * 2,
  },
});

export default useCounterStore;
