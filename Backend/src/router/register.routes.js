const express = require("express");
const route = express.Router();
const registerController = require("../controller/register.controller");

route.post("/", registerController.index);

module.exports = route;
