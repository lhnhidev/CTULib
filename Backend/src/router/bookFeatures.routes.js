const express = require("express");
const route = express.Router();
const bookFeaturesController = require("../controller/bookFeatures.controller");

route.get("/", bookFeaturesController.index);
route.get("/theloai", bookFeaturesController.getTheLoai);
route.get("/giaban", bookFeaturesController.getGiaBan);
route.get("/ngonngu", bookFeaturesController.getNgonNgu);
route.get("/nhaxuatban", bookFeaturesController.getNhaXuatBan);
route.get("/tuychon", bookFeaturesController.getTuyChon);

module.exports = route;
