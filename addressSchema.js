import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  name: String,
  uploadDate: String,
});

const Address = mongoose.model("Address", addressSchema);