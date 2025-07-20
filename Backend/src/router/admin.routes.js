const express = require("express");
const route = express.Router();
const adminController = require("../controller/admin.controller");

route.get("/:id", adminController.index);

module.exports = route;
