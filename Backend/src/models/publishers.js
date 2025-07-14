const mongoose = require("mongoose");

const Publishers = new mongoose.Schema({
  tenNXB: String,
  diaChi: String,
  image: String,
});

module.exports = mongoose.model("Publishers", Publishers, "NhaXuatBan");
