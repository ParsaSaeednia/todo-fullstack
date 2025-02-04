import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";
import { connectDB } from "./config/db";

const app = express();

app.use(express.json());
app.use(cors());
connectDB();
app.use("/", todoRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
