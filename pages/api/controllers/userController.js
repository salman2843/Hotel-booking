const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc Signup new user
// @route POST /api/users/signup
// @access Public
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id);
    res.status(201).json({
      message: "Sign up successful!",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc Login user
// @route POST /api/users/login
// @access Public
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user._id);
    res.status(200).json({
      message: "Login successful!",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
