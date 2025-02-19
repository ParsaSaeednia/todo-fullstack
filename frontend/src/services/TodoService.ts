import api from "@/configs/axios";
import type { TodoModel } from "@/models/TodoModel";

class todoService {
  getTodos = () => api.get<TodoModel[]>("/todos");

  createTodo = (parameters: Pick<TodoModel, "completed" | "title">) => api.post<TodoModel>("/todos", parameters);

  updateTodo = (id: string, parameters: Pick<TodoModel, "completed" | "title">) =>
    api.put<TodoModel[]>(`/todos/${id}`, parameters);

  deleteTodo = (id: string) => api.delete(`/todos/${id}`);
}

export default new todoService();
