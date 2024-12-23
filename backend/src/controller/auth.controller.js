const generateToken = require("../lib/utisl");
const User = require("../models/user.model");
const cloudinary = require("cloudinary");
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
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const logout = (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });
    res.status(200).json({ message: "User logged Out" });
  } catch (error) {
    res.status(500).json({ message: "Error in logout Consoler", error });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      return res.status(500).json({ message: "Profile Picture is Required" });
    }
    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error.message);
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("error in checkAuth controller ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout, updateProfile, checkAuth };
