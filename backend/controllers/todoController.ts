import type { Request, Response } from "express";
import { Todo } from "../models/todoModel";

class TodoController {
  async getTodos(_req: Request, res: Response): Promise<void> {
    const todos = await Todo.find();
    res.json(todos);
  }

  async createTodo(req: Request, res: Response): Promise<void> {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  }
}

export default new TodoController();
