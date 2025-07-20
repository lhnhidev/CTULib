const Publishers = require("../models/publishers.js");

class PublishersController {
  async index(req, res) {
    res.json(await Publishers.find({}));
  }

  async getPublisher(req, res) {
    res.json(await Publishers.findOne({ maNXB: req.params.id }));
  }
}

module.exports = new PublishersController();
