const express = require("express");
const { login, register, logout } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  login(req, res);
});

authRouter.post("/register", (req, res) => {
  register(req, res);
});

authRouter.get("/logout", (req, res) => {
  logout(req, res);
});

module.exports = authRouter;
