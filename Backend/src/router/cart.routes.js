const express = require("express");
const route = express.Router();
const cartController = require("../controller/cart.controller");
const { verifyToken, onlyUser } = require("../middlewares/auth");

route.get("/:idUser", cartController.searchByUserId);
route.post("/add", verifyToken, onlyUser, cartController.addBookToCart);
route.post("/delete", cartController.removeBookOutCart);

module.exports = route;
