const mongoose = require("mongoose");

const Borrowing = new mongoose.Schema({
  maDocGia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DocGia",
  },
  maSach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sach",
  },
  ngayMuon: String,
  ngayTra: String,
  trangThai: String,
  ghiChu: String,
  soLuongMuon: Number,
  ngayDangKyMuon: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Borrowing", Borrowing, "TheoDoiMuonSach");
