const mongoose = require("mongoose");

const User = new mongoose.Schema({
  maDocGia: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  email: String,
  password: String,
  avatar: String,
  diaChi: String,
  dienThoai: String,
  hoLot: String,
  ngaySinh: String,
  phai: String,
  ten: String,
});

module.exports = mongoose.model("User", User, "DocGia");
