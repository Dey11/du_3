const mongoose = require("mongoose");

const AccidentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  severity: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Accident = mongoose.model("Accident", AccidentSchema);
module.exports = Accident;
