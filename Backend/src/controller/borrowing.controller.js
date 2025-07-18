const Borrowing = require("../models/borrowing.js");

class BorrowingController {
  async index(req, res) {
    res.json(await Borrowing.find({}));
  }

  async filterHistoryBook(req, res) {
    console.log(req.params.userId);
    if (req.params.userId === "undefined") res.json([]);

    res.json(await Borrowing.find({ maDocGia: req.params.userId }));
  }

  async borrowingBooks(req, res) {
    const { borrowingBooks } = req.body;

    borrowingBooks.forEach((item) => {
      Borrowing.create({
        ...item,
        ngayMuon: item.ngayMuon.slice(0, 10).split("-").reverse().join("-"),
        ngayTra: item.ngayTra.slice(0, 10).split("-").reverse().join("-"),
      });
    });

    res.json({ message: "thành công" });
  }
}

module.exports = new BorrowingController();
