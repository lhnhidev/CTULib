const Borrowing = require("../models/borrowing.js");

class BorrowingController {
  async index(req, res) {
    res.json(await Borrowing.find({}));
  }

  async filterHistoryBook(req, res) {
    if (req.params.userId === "undefined") res.json([]);

    res.json(await Borrowing.find({ maDocGia: req.params.userId }));
  }

  async borrowingBooks(req, res) {
    const { borrowingBooks } = req.body;

    const number = await Borrowing.countDocuments();

    borrowingBooks.forEach((item, index) => {
      Borrowing.create({
        ...item,
        ngayMuon: item.ngayMuon.slice(0, 10).split("-").reverse().join("-"),
        ngayTra: item.ngayTra.slice(0, 10).split("-").reverse().join("-"),
        maPhieu: `LIB-${String(number + index + 1).padStart(3, "0")}`,
      });
    });

    res.json({ message: "thành công" });
  }

  async updateStateForm(req, res) {
    const idForm = req.params.idForm;

    await Borrowing.updateOne(
      { maPhieu: idForm },
      { trangThai: req.body.trangThai },
    );
    res.json({ message: "cập nhật thành công" });
  }

  async filterHistoryBookPage(req, res) {
    const { start, end } = req.query;
    const startIndex = parseInt(start);
    const endIndex = parseInt(end);

    const limit = endIndex - startIndex + 1;

    const docs = await Borrowing.find()
      .skip(startIndex - 1)
      .limit(limit);

    res.json(docs);
  }

  async searchForm(req, res) {
    const form = await Borrowing.findOne({ maPhieu: req.params.idForm });
    res.json(form);
  }
}

module.exports = new BorrowingController();
