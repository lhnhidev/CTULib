const Borrowing = require("../models/borrowing.js");

class BorrowingController {
  async index(req, res) {
    res.json(await Borrowing.find({}));
  }

  async filterHistoryBook(req, res) {
    console.log(req.params.userId);
    if (req.params.userId === "undefined") res.json([]);

    console.log("Thành công");
    res.json(await Borrowing.find({ maDocGia: req.params.userId }));
  }
}

module.exports = new BorrowingController();
