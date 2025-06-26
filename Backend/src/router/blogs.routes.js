const express = require("express");
const route = express.Router();
const blogsController = require("../controller/blogs.controller");

route.get("/", blogsController.index);

module.exports = route;
