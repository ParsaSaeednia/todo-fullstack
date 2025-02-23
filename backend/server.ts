import { Elysia } from "elysia";
import { connectDB } from "./config/db";
import todoRoutes from "./routes/todoRoutes";
import { cors } from "@elysiajs/cors";

const app = new Elysia();

connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(todoRoutes);

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Server running on port ${process.env.PORT ?? 3000}`);
});
