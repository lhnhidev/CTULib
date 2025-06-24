const mongoose = require("mongoose");

const Books = new mongoose.Schema({
  image: Array,
  brand: String,
  name: String,
  vote: Number,
  price: Number,
  amount: Number,
  isFavorite: Boolean,
  isFeture: Boolean,
  isNew: Boolean,
  publisher: String,
  release: Number,
});

module.exports = mongoose.model("Books", Books, "books");
