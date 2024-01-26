import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = import.meta.env.VITE_PORT || 3001;

mongoose.connect("mongodb://localhost/db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
