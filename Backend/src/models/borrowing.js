const mongoose = require("mongoose");

const Borrowing = new mongoose.Schema({
  maDocGia: {
    type: String,
    ref: "DocGia",
  },
  maSach: {
    type: String,
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
  maPhieu: String,
});

module.exports = mongoose.model("Borrowing", Borrowing, "TheoDoiMuonSach");
