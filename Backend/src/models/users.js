const mongoose = require("mongoose");

const User = new mongoose.Schema({
  maDocGia: String,
  email: String,
  password: String,
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752603322/avatar_xpfbvj.svg",
  },
  diaChi: String,
  dienThoai: String,
  hoLot: String,
  ngaySinh: String,
  phai: String,
  ten: String,
  role: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("User", User, "DocGia");
