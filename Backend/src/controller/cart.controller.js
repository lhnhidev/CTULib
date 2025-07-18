const Cart = require("../models/cart.js");

class CartController {
  async searchByUserId(req, res) {
    res.json(await Cart.find({ maDocGia: req.params.idUser }));
  }

  async addBookToCart(req, res) {
    const { maSach, maDocGia, soLuong, coSan } = req.body;

    const onCart = await Cart.findOne({ maSach, maDocGia });

    if (onCart === null) {
      await Cart.create({ maDocGia, maSach, soLuong });
      res.json({ message: "Thêm vào giỏ hàng thành công" });
      return;
    } else {
      if (soLuong + onCart.soLuong > coSan) {
        res.json({ message: "Quá số lượng" });
        return;
      } else {
        onCart.soLuong += soLuong;
        await onCart.save();

        res.json({ message: "Cập nhật giỏ hàng thành công" });
        return;
      }
    }
  }

  async removeBookOutCart(req, res) {
    const { maSach, maDocGia } = req.body;
    try {
      await Cart.deleteOne({ maSach, maDocGia });
      res.json({ message: "Xóa khỏi giỏ thành công" });
      return;
    } catch (error) {
      res.json({ message: `Đã có lỗi khi xóa hàng ${error}` });
      return;
    }
  }
}

module.exports = new CartController();
