const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();

//Set express bodyParser
app.use(express.urlencoded({ extended: true }));

//Set View Engine
app.set("view engine", "ejs");

//Connect mongodb
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Import routers
const indexRoute = require("./routes/index");

// Use routers
app.use("/", indexRoute);

//Create PORT
const PORT = process.env.PORT || 5000;

//Listen for server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App started at port ${PORT}`);
  }
});
