<template>
  <div class="container my-5">
    <h1 class="mb-4">My Todo List</h1>
    <form
      @submit.prevent="addTodo"
      class="input-group mb-3"
    >
      <input
        v-model="todoStore.parameters.title"
        type="text"
        class="form-control"
        placeholder="What needs to be done?"
      />
      <button
        class="btn btn-primary px-5"
        type="submit"
      >
        Add
      </button>
    </form>
    <ul class="list-group">
      <li
        v-for="todo in todoStore.list"
        :key="todo._id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="updateTodo(todo)"
          />
          <span :class="{ 'text-decoration-line-through': todo.completed }">
            {{ todo.title }}
          </span>
        </div>
        <button
          class="btn btn-sm btn-danger px-5"
          @click="deleteTodo(todo._id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import type { TodoModel } from "@/models/TodoModel";
  import ApiService from "@/services/TodoService";
  import { useTodoStore } from "@/store/TodoStore";

  const todoStore = useTodoStore();

  const fetchTodos = async () => {
    const response = await ApiService.getTodos();
    todoStore.list = response.data;
  };

  const addTodo = async () => {
    if (!todoStore.parameters.title.trim()) return;
    const response = await ApiService.createTodo(todoStore.parameters);
    todoStore.list.push(response.data);
    todoStore.parameters = { title: "", completed: false }; 
  };

  const updateTodo = async (todo: TodoModel) => {
    await ApiService.updateTodo(todo._id, { completed: todo.completed, title: todo.title });
  };

  const deleteTodo = async (id: string) => {
    await ApiService.deleteTodo(id);
    todoStore.list = todoStore.list.filter((todo: TodoModel) => todo._id !== id);
  };

  onMounted(fetchTodos);
</script>

<style>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
</style>
