const books = require("../models/books.js");

class booksController {
  async index(req, res) {
    res.json(await books.find({}));
  }
}

module.exports = new booksController();
