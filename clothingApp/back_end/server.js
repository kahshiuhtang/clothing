const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const PORT = process.env.PORT || 3100;
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const start = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`.green.underline.bold)
    );
  } catch (err) {
    console.log(`ERROR: ${err.message}`.bgRed.underline.bold);
  }
};

start();
