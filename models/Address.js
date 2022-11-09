const { Schema, model } = require("mongoose")

const addressSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  contactType: {
    type: String,
    required: true,
  },
  contactNotes: {
    type: String,
    required: true,
  },
})

const Address = model("Address", addressSchema)

module.exports = Address
