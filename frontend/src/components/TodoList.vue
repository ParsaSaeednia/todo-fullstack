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
  import { useTodoStore } from "@/store/TodoStore";
  import type { TodoModel } from "@/models/TodoModel";

  const todoStore = useTodoStore();

  const fetchTodos = async (): Promise<void> => await todoStore.fetchTodos();
  const addTodo = async (): Promise<void> => await todoStore.addTodo();
  const updateTodo = async (todo: TodoModel): Promise<void> => await todoStore.updateTodo(todo);
  const deleteTodo = async (id: string): Promise<void> => await todoStore.deleteTodo(id);

  onMounted(fetchTodos);
</script>

<style>
  .text-decoration-line-through {
    text-decoration: line-through;
  }
</style>
