import { defineStore } from "pinia";
import type { TodoViewModel } from "@/models/TodoModel";

export const useTodoStore = defineStore("todo", {
  state: (): TodoViewModel => ({
    list: [],
    parameters: {
      title: "",
      completed: false,
    },
  }),
});
