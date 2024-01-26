import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  name: String,
  uploadDate: new Date(),
});

const Address = mongoose.model("Address", addressSchema);
