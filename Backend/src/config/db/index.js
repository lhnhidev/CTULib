const mongoose = require("mongoose");

const connect = async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CTULib");
    console.log("Kết nối database thành công");
  } catch {
    console.log("Kết nối database thất bại");
  }
};

module.exports = { connect };
