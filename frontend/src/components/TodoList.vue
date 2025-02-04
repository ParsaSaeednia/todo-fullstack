<template>
  <div class="container my-5">
    <h1 class="mb-4">My ToDo List</h1>

    <!-- Add Todo Form -->
    <form @submit.prevent="addTodo" class="input-group mb-3">
      <input v-model="newTodo" type="text" class="form-control" placeholder="What needs to be done?" />
      <button class="btn btn-primary" type="submit">Add</button>
    </form>

    <!-- Todo Items -->
    <ul class="list-group">
      <li v-for="todo in todos" :key="todo._id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)" />
          <span :class="{ 'text-decoration-line-through': todo.completed }">{{ todo.title }}</span>
        </div>
        <button class="btn btn-sm btn-danger" @click="deleteTodo(todo._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const newTodo = ref('');

const fetchTodos = async () => {
  const response = await axios.get<Todo[]>('http://localhost:3000/todos');
  todos.value = response.data;
};

const addTodo = async () => {
  if (!newTodo.value.trim()) return;
  const response = await axios.post<Todo>('http://localhost:3000/todos', { title: newTodo.value, completed: false });
  todos.value.push(response.data);
  newTodo.value = '';
};

const updateTodo = async (todo: Todo) => {
  await axios.put(`http://localhost:3000/todos/${todo._id}`, { completed: todo.completed });
};

const deleteTodo = async (id: string) => {
  await axios.delete(`http://localhost:3000/todos/${id}`);
  todos.value = todos.value.filter(todo => todo._id !== id);
};

onMounted(fetchTodos);
</script>

<style>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
