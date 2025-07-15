const express = require("express");
const route = express.Router();
const loginController = require("../controller/login.controller");

route.post("/", loginController.index);

module.exports = route;
