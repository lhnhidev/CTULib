const express = require("express");
const route = express.Router();
const borrowingController = require("../controller/borrowing.controller");

route.get("/", borrowingController.index);
route.get("/:userId", borrowingController.filterHistoryBook);

module.exports = route;
