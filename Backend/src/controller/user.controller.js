const User = require("../models/users.js");

class UserController {
  async index(req, res) {
    const userId = req.params.id;
    res.json(await User.findOne({ maDocGia: userId }));
  }
}

module.exports = new UserController();
