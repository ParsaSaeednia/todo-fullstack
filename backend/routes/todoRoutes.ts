import { Elysia } from "elysia";
import TodoController from "../controllers/todoController";

const todoRoutes = new Elysia()
  .get("/todos", TodoController.getTodos)
  .post("/todos", TodoController.createTodo)
  .put("/todos/:id", TodoController.updateTodo)
  .delete("/todos/:id", TodoController.deleteTodo);

export default todoRoutes;
