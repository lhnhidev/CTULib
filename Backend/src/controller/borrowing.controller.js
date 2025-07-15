const Borrowing = require("../models/borrowing.js");

class BorrowingController {
  async index(req, res) {
    res.json(await Borrowing.find({}));
  }
}

module.exports = new BorrowingController();
