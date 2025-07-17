const mongoose = require("mongoose");

const Books = new mongoose.Schema({
  tenSach: String,
  donGia: Number,
  soQuyen: Number,
  maNXB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NhaXuatBan",
  },
  namXuatBan: Number,
  desc: String,
  author: String,
  idFeatures: Array,
  lang: String,
  image: Array,
  vote: Number,
  maSach: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

Books.virtual("name")
  .get(function () {
    return this.tenSach;
  })
  .set(function (val) {
    this.tenSach = val;
  });

Books.virtual("price")
  .get(function () {
    return this.donGia;
  })
  .set(function (val) {
    this.donGia = val;
  });

Books.virtual("amount")
  .get(function () {
    return this.soQuyen;
  })
  .set(function (val) {
    this.soQuyen = val;
  });

Books.virtual("publisher")
  .get(function () {
    return this.maNXB;
  })
  .set(function (val) {
    this.maNXB = val;
  });

Books.virtual("release")
  .get(function () {
    return this.namXuatBan;
  })
  .set(function (val) {
    this.namXuatBan = val;
  });

Books.set("toObject", { virtuals: true });
Books.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Books", Books, "Sach");
