const mongoose = require("mongoose");

const Publishers = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("Publishers", Publishers, "publishers");
