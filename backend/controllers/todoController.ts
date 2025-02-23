import { Todo } from "../models/todoModel";

class TodoController {
  async getTodos() {
    return await Todo.find();
  }

  async createTodo({ body }: { body: { title: string; completed?: boolean } }) {
    const newTodo = new Todo(body);
    await newTodo.save();
    return newTodo;
  }

  async updateTodo({ params, body }: { params: { id: string }; body: { title?: string; completed?: boolean } }) {
    const updatedTodo = await Todo.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    return updatedTodo;
  }

  async deleteTodo({ params }: { params: { id: string } }) {
    await Todo.findByIdAndDelete(params.id);
    return { message: "Todo deleted" };
  }
}

export default new TodoController();
