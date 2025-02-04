import express, { type Request, type Response } from "express";
import mongoose, { Document } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const todoSchema = new mongoose.Schema<ITodo>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});
const Todo = mongoose.model<ITodo>("Todo", todoSchema);

app.get("/todos", async (_req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req: Request, res: Response) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

app.put("/todos/:id", async (req: Request, res: Response) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

app.delete("/todos/:id", async (req: Request, res: Response) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
