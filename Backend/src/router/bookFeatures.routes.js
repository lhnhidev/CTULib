const express = require("express");
const route = express.Router();
const bookFeaturesController = require("../controller/bookFeatures.controller");

route.get("/", bookFeaturesController.index);

module.exports = route;
