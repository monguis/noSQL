const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioModel = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  weight: {
    type: Number,
    unique: true,
    required: true
  },

  sets: {
    type: Number,
    unique: true,
    required: true
  },

  reps: {
    type: Number,
    unique: true,
    required: true
  },
  duration: {
    type: Number,
    unique: true,
    required: true
  }
});

const cardio = mongoose.model("cardio", CardioModel);

module.exports = cardio;