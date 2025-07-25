const Books = require("../models/books.js");
const cloudinary = require("cloudinary").v2;

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

  async addBook(req, res) {
    console.log(req.body);

    const namXuatBan = new Date(req.body.namXuatBan).getFullYear();
    const image = req.body.image.map((item) => item.url);

    let count = 1;
    let exist;
    let maSach;
    do {
      maSach = `BK${String(count).padStart(3, "0")}`;
      exist = await Books.findOne({ maSach });
      ++count;
    } while (exist);

    await Books.create({
      ...req.body,
      namXuatBan,
      image,
      maSach,
    });

    res.json({ message: "Thành công" });
  }

  async removeBook(req, res) {
    cloudinary.config({
      // eslint-disable-next-line no-undef
      cloud_name: process.env.VITE_CLOUD_NAME,
      // eslint-disable-next-line no-undef
      api_key: process.env.VITE_API_KEY,
      // eslint-disable-next-line no-undef
      api_secret: process.env.VITE_API_SECRET,
    });

    const { public_id } = req.body;
    try {
      const result = await cloudinary.uploader.destroy(public_id);
      res.json({ message: "Xóa thành công", result });
    } catch (err) {
      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }
}

module.exports = new BooksController();
