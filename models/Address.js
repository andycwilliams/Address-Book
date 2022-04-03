const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Address = model("Address", addressSchema);

module.exports = Address;
