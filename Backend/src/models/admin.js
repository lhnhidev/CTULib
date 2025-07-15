const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  maNhanVien: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  hoTenNhanVien: String,
  password: String,
  chucVu: String,
  diaChi: String,
  dienThoai: String,
  email: String,
  role: {
    type: String,
    default: "admin",
  },
});

module.exports = mongoose.model("Admin", Admin, "NhanVien");
