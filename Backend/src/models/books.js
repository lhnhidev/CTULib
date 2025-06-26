const mongoose = require("mongoose");

const Books = new mongoose.Schema({
  image: Array,
  name: String,
  vote: Number,
  price: Number,
  amount: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publishers",
  },
  release: Number,
  desc: String,
  author: String,
  idFeatures: Array,
  lang: String,
  cmt: Array,
});

module.exports = mongoose.model("Books", Books, "books");
