const Books = require("../models/books.js");

class BooksController {
  async index(req, res) {
    res.json(await Books.find({}));
  }
}

module.exports = new BooksController();
