const BookFeatures = require("../models/bookFeatures.js");

class BookFeaturesController {
  async index(req, res) {
    res.json(await BookFeatures.find({}));
  }

  async getTheLoai(req, res) {
    res.json(await BookFeatures.findOne({ featureName: "Thể loại" }));
  }

  async getNgonNgu(req, res) {
    res.json(await BookFeatures.findOne({ featureName: "Ngôn ngữ" }));
  }

  async getNhaXuatBan(req, res) {
    res.json(await BookFeatures.findOne({ featureName: "Nhà Xuất Bản" }));
  }

  async getGiaBan(req, res) {
    res.json(await BookFeatures.findOne({ featureName: "Giá bán" }));
  }

  async getTuyChon(req, res) {
    res.json(await BookFeatures.findOne({ featureName: "Tùy chọn" }));
  }
}

module.exports = new BookFeaturesController();
