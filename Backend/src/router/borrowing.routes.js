const express = require("express");
const route = express.Router();
const borrowingController = require("../controller/borrowing.controller");
const { verifyToken, onlyUser } = require("../middlewares/auth");

route.get("/", borrowingController.index);
route.get("/:userId", borrowingController.filterHistoryBook);
route.post(
  "/borrowingBooks",
  verifyToken,
  onlyUser,
  borrowingController.borrowingBooks,
);

module.exports = route;
