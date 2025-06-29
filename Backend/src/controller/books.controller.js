const Books = require("../models/books.js");

class BooksController {
  async index(req, res) {
    res.json(await Books.find({}));
  }

  async showBookDetail(req, res) {
    const id = req.params.id;
    res.json(await Books.findOne({ _id: id }));
  }
}

module.exports = new BooksController();
