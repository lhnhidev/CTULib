const express = require("express");
const route = express.Router();
const borrowingController = require("../controller/borrowing.controller");
const { verifyToken, onlyUser } = require("../middlewares/auth");

route.get("/", borrowingController.index);
route.get("/page", borrowingController.filterHistoryBookPage);
route.get("/form/:idForm", borrowingController.searchForm);
route.post(
  "/borrowingBooks",
  verifyToken,
  onlyUser,
  borrowingController.borrowingBooks,
);
route.get("/:userId", borrowingController.filterHistoryBook);
route.patch("/:idForm", borrowingController.updateStateForm);

module.exports = route;
