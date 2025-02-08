import { defineStore } from "pinia";
import { TodoModel } from "@/models/TodoModel";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    list: [] as TodoModel[],
    parameters: { title: "", completed: false } as Pick<TodoModel, "completed" | "title">,
  }),
});
