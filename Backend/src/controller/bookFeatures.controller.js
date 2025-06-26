const BookFeatures = require("../models/bookFeatures.js");

class BookFeaturesController {
  async index(req, res) {
    res.json(await BookFeatures.find({}));
  }
}

module.exports = new BookFeaturesController();
