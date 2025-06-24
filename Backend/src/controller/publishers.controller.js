const Publishers = require("../models/publishers.js");

class publishersController {
  async index(req, res) {
    res.json(await Publishers.find({}));
  }
}

module.exports = new publishersController();
