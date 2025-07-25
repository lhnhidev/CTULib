const express = require("express");
const route = express.Router();
const booksController = require("../controller/books.controller");

route.get("/", booksController.index);
route.get("/page", booksController.getBookPag);
route.get("/:id", booksController.showBookDetail);
route.post("/add", booksController.addBook);
route.post("/delete", booksController.removeBook);

module.exports = route;
