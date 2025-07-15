require("dotenv").config();
const User = require("../models/users.js");
const Admin = require("../models/admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class LoginController {
  async index(req, res) {
    let account = await User.findOne({ email: req.body.email });

    if (!account) {
      account = await Admin.findOne({ email: req.body.email });

      if (!account) {
        res.json({ account: null, message: "Tài khoản không tồn tại!" });
        return;
      }
    }

    if (await bcrypt.compare(req.body.password, account.password)) {
      const token = jwt.sign(
        {
          id: account.maDocGia || account.maNhanVien,
          role: account.maDocGia ? "user" : "admin",
        },
        // eslint-disable-next-line no-undef
        process.env.SECRET_KEY,
        {
          expiresIn: "5h",
        },
      );

      res.json({ account, message: "success", token });
      return;
    }
    res.json({ account: null, message: "Mật khẩu không chính xác!" });
  }
}

module.exports = new LoginController();
