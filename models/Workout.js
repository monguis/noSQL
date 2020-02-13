const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
  day: {
    type: Date,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "exercises"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;