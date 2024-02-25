const express = require("express");
const { login, register, logout, validate } = require("../controllers/auth");
const validateUser = require("../middlewares/validateUser");

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

authRouter.get("/validate", validateUser, (req, res) => {
  validate(req, res);
});

module.exports = authRouter;
