const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {}
  ]
});

const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;