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

  async getBookPag(req, res) {
    const { start, end } = req.query;
    const startIndex = parseInt(start);
    const endIndex = parseInt(end);

    const limit = endIndex - startIndex + 1;

    const docs = await Books.find()
      .skip(startIndex - 1)
      .limit(limit);

    res.json(docs);
  }
}

module.exports = new BooksController();
