const express = require("express");
const route = express.Router();
const cartController = require("../controller/cart.controller");

route.get("/:idUser", cartController.searchByUserId);

module.exports = route;
