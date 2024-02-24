const mongoose = require("mongoose");

const AccidentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
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
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  severity: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Accident = mongoose.model("Accident", AccidentSchema);
module.exports = Accident;
