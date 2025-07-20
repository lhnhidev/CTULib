const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  maDocGia: {
    type: String,
    ref: "DocGia",
  },
  maSach: {
    type: String,
    ref: "Sach",
  },
  soLuong: Number,
  ngayThemVaoGio: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", Cart, "GioHang");
