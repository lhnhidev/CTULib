const express = require("express");
const route = express.Router();
const userController = require("../controller/user.controller");

route.get("/:id", userController.index);

module.exports = route;
