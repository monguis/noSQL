// Add code to userModel.js to complete the model
let mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
// const seeeds = require("./seeders/seed")
const PORT = process.env.PORT || 3000;
const db = require("./models");
// const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Routes

// Route to post our form submission to mongoDB via mongoose
app.get("/exercise", ({body}, res) => {
  // Create a new user using req.body

  res.sendFile((__dirname+"/public/exercise.html"));
//   const user = new User(body);
//   // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
//   // You must create these methods in the model.
//   user.SetFullName();
//   user.lastUpdatedAt();
//   User.create(user)
//     .then(dbUser => {
//       // If saved successfully, send the the new User document to the client
//       res.json(dbUser);
//     })
//     .catch(err => {
//       // If an error occurs, send the error to the client
//       res.json(err);
//     });
});

app.get("/stats", ({body}, res) => {
    res.sendFile((__dirname+"/public/stats.html"));
  });

  app.get("/api/workouts/range", ({body}, res) => {
    db.Workouts.find().populate("").then(data =>{
      console.log(data)
      res.json(data);
    }).catch(()=>{
      res.status(500);
    })
  });

  app.get("/api/workouts/", ({body}, res) => {
    db.Workout.find({}).then(data =>{
      console.log(data)
      res.json(data);
    }).catch(()=>{
      res.status(500);
    })
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
