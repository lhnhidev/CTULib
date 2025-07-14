const mongoose = require("mongoose");

const Blogs = new mongoose.Schema({
  image: String,
  time: String,
  title: String,
  topic: String,
  desc: String,
});

module.exports = mongoose.model("Blogs", Blogs, "Blogs");
