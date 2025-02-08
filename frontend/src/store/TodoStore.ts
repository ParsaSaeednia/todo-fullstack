import { defineStore } from "pinia";
import todoService from "@/services/TodoService";
import type { TodoModel } from "@/models/TodoModel";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    list: [] as TodoModel[],
    parameters: {
      title: "",
      completed: false,
    },
  }),

  actions: {
    async fetchTodos(): Promise<void> {
      const response = await todoService.getTodos();
      this.list = response.data;
    },

    async addTodo(): Promise<void> {
      if (!this.parameters.title.trim()) return;
      const response = await todoService.createTodo(this.parameters);
      this.list.push(response.data);
      this.parameters = { title: "", completed: false };
    },

    async updateTodo(todo: TodoModel): Promise<void> {
      await todoService.updateTodo(todo._id, { completed: todo.completed, title: todo.title });
    },

    async deleteTodo(id: string): Promise<void> {
      await todoService.deleteTodo(id);
      this.list = this.list.filter((todo: TodoModel) => todo._id !== id);
    },
  },
});
