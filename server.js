// Dependencies
const express = require("express");
const path = require("path");

const sequelize = require("./config/connection");

const User = require("./models/User");
const Questions = require("./models/Questions");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

// Sets up the routes
// app.use(require("./controllers/dish-routes"));

// Starts the server to begin listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log("Server listening on: http://localhost:" + PORT)
  );
});
