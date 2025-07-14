const mongoose = require("mongoose");

const Votes = new mongoose.Schema({
  vote: Number,
  comment: String,
  desc: String,
  author: String,
});

module.exports = mongoose.model("Votes", Votes, "Votes");
