const Cart = require("../models/cart.js");

class CartController {
  async searchByUserId(req, res) {
    res.json(await Cart.find({ maDocGia: req.params.idUser }));
  }
}

module.exports = new CartController();
