const Admin = require("../models/admin.js");

class AdminController {
  async index(req, res) {
    res.json(await Admin.findOne({ maNhanVien: req.params.id }));
  }
}

module.exports = new AdminController();
