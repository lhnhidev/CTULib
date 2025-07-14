const Users = require("../models/users.js");

class RegisterController {
  async index(req, res) {
    console.log(req.body);

    const dateStr = req.body.birthday;
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    await Users.create({
      email: `${req.body.email}`,
      password: `${req.body.password}`,
      avatar: ``,
      diaChi: ``,
      dienThoai: `${req.body.phone}`,
      hoLot: `${req.body.firstName}`,
      ngaySinh: `${formattedDate}`,
      phai: `${req.body.gender}`,
      ten: `${req.body.lastName}`,
    });

    res.json({ message: req.body });
    // res.json(await Blogs.find({}));
  }

  get(req, res) {
    res.send("hello");
  }
}

module.exports = new RegisterController();
