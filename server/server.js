import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT || 3001;

mongoose.connect("mongodb://localhost:27017/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
