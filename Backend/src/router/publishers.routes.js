const express = require("express");
const route = express.Router();
const publishersController = require("../controller/publishers.controller");

route.get("/", publishersController.index);
route.get("/:id", publishersController.getPublisher);

module.exports = route;
