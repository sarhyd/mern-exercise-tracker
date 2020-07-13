const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //for parsing json

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  try {
    console.log("MongoDB Database Connection established! ");
  } catch (error) {
    console.log(error);
  }
});

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
