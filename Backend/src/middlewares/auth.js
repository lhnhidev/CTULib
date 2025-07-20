const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Chưa đăng nhập" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token không có" });
  }

  try {
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded.role !== "user" && decoded.role !== "admin") {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log("Lỗi JWT:", err.message);
    return res.status(403).json({ message: "Token không hợp lệ" });
  }
}

function onlyAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Không có quyền admin" });
  }
  next();
}

function onlyUser(req, res, next) {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Không có quyền user" });
  }
  next();
}

module.exports = { verifyToken, onlyAdmin, onlyUser };
