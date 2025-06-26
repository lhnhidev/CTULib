const Publishers = require("../models/publishers.js");

class PublishersController {
  async index(req, res) {
    res.json(await Publishers.find({}));
  }
}

module.exports = new PublishersController();
