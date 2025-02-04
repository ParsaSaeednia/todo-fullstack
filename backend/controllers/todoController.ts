import type { Request, Response } from "express";
import { Todo } from "../models/todoModel";

export const getTodos = async (_req: Request, res: Response): Promise<void> => {
  const todos = await Todo.find();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
};

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
};

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
