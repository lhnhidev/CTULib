const mongoose = require("mongoose");

const BookFeatures = new mongoose.Schema({
  featureName: String,
  featureValue: [
    {
      id: String,
      name: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model("BookFeatures", BookFeatures, "BookFeatures");
