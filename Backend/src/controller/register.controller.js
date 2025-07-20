const Users = require("../models/users.js");
const Admins = require("../models/admin.js");
const bcrypt = require("bcrypt");

class RegisterController {
  async index(req, res) {
    let isExist = await Admins.findOne({ email: req.body.email });
    // res.send(isExist);
    if (isExist) {
      res.json({ messeage: "account is exist" });
      return;
    } else {
      isExist = await Users.findOne({ email: req.body.email });
      if (isExist) {
        res.json({ messeage: "account is exist" });
        return;
      }
    }

    const dateStr = req.body.birthday;
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const passwordHashed = await bcrypt.hash(req.body.password, 8);

    const countAdmin = await Admins.countDocuments();
    const countUser = await Users.countDocuments();

    if (req.body.role === "admin") {
      await Admins.create({
        email: `${req.body.email}`,
        password: `${passwordHashed}`,
        diaChi: ``,
        dienThoai: `${req.body.phone}`,
        hoTenNhanVien: `${req.body.fullName}`,
        maNhanVien: `STAFF${String(countAdmin + 1).padStart(3, "0")}`,
      });
      res.json({ message: req.body });
      return;
    }

    await Users.create({
      email: `${req.body.email}`,
      password: `${passwordHashed}`,
      diaChi: ``,
      dienThoai: `${req.body.phone}`,
      hoLot: `${req.body.firstName}`,
      ngaySinh: `${formattedDate}`,
      phai: `${req.body.gender}`,
      ten: `${req.body.lastName}`,
      maDocGia: `READER${String(countUser + 1).padStart(3, "0")}`,
    });

    res.json({ message: req.body });
  }
}

module.exports = new RegisterController();
