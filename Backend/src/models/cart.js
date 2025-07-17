const mongoose = require("mongoose");

const Cart = new mongoose.Schema({
  maDocGia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DocGia",
  },
  maSach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sach",
  },
  soLuong: Number,
  ngayThemVaoGio: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", Cart, "GioHang");
