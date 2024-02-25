const Admin = require("../db/models/adminSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ error: "Username not found" });
    }
    if (bcrypt.compareSync(password, admin.password)) {
      const token = jwt.sign({ username: admin.username }, process.env.SECRET);
      res.status(200).json({ token, username, state: admin.state });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  const { username, password, state } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (admin) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const newAdmin = await Admin.create({
      username,
      password: bcrypt.hashSync(password, salt),
      state,
    });
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  res.status(200).json({ message: "Logged out" });
};

const validate = async (req, res) => {
  const { username } = req.user;
  const user = await Admin.findOne({ username });
  res.status(200).json({ username, state: user.state });
};

module.exports = {
  login,
  register,
  logout,
  validate,
};
