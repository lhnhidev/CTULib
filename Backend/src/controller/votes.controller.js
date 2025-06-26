const Votes = require("../models/votes.js");

class VotesController {
  async index(req, res) {
    res.json(await Votes.find({}));
  }
}

module.exports = new VotesController();
