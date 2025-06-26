const express = require("express");
const route = express.Router();
const votesController = require("../controller/votes.controller");

route.get("/", votesController.index);

module.exports = route;
