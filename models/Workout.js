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
    default: function (){
      let res = 0;
      for(exer of this.exercises){
        res+=exer.duration;
      }
      return res;
    },
  }
});





const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;