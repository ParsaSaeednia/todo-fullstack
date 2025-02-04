import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGO_URI;

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};
