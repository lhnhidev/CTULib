const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  maNhanVien: String,
  hoTenNhanVien: String,
  password: String,
  chucVu: String,
  diaChi: String,
  dienThoai: String,
  email: String,
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dpsj6nk7y/image/upload/v1752603322/avatar_xpfbvj.svg",
  },
  role: {
    type: String,
    default: "admin",
  },
});

module.exports = mongoose.model("Admin", Admin, "NhanVien");
