const Books = require("../models/books.js");

class BooksController {
  async index(req, res) {
    res.json(await Books.find({}));
  }

  async showBookDetail(req, res) {
    const id = req.params.id;
    if (id === undefined) {
      res.json({});
    }
    res.json(await Books.findOne({ maSach: id }));
  }
}

module.exports = new BooksController();
