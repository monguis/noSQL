const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {}
  ],
  totalDuration: {
    type: Number,
    default:0
    
  }
});





const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;