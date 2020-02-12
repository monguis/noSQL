// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const seed = require("./seeders/seed");
app.use(express.static("public"));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

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

  app.get("/api/workouts", ({body}, res) => {
      console.log("entra al inicio del site")
    res.sendFile((__dirname+"/public/stats.html"));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
