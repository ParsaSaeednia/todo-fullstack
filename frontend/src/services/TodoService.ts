import api from "@/configs/axios";
import type { TodoModel } from "@/models/TodoModel";

class todoService {
  getTodos() {
    return api.get<TodoModel[]>("/todos");
  }

  getTodoById(id: string) {
    return api.get(`/todos/${id}`);
  }

  createTodo(parameters: Pick<TodoModel, "completed" | "title">) {
    return api.post<TodoModel>("/todos", parameters);
  }

  updateTodo(id: string, parameters: Pick<TodoModel, "completed" | "title">) {
    return api.put<TodoModel[]>(`/todos/${id}`, parameters);
  }

  deleteTodo(id: string) {
    return api.delete(`/todos/${id}`);
  }
}

export default new todoService();
