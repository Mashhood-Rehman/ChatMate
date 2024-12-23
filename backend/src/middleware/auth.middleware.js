const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protectRoute = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt;
    if (!token) {
      return res.status(500).json({ message: "Unauthorized-No TOken" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(500).json({ message: "Unauthorized-Invalid Token" });
    }
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(500).json({ message: "USer not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRuoute middleware", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = protectRoute;
