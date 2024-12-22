const generateToken = require("../lib/utisl");
const User = require("../models/user.model");

const bcrypt = require("bcryptjs");
// SignUp Logic-------------
const signup = async (req, res) => {
  const { fullName, email, password, profilePic } = req.body;
  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters" });
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      profilePic: profilePic || "",
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid User credentials" });
    }
  } catch (error) {
    console.log("Error in signup", error.message);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};
const login = (req, res) => {};
const logout = (req, res) => {};

module.exports = { signup, login, logout };
