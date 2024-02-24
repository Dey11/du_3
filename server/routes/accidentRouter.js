const express = require("express");
const validateUser = require("../middlewares/validateUser");
const { reportAccident, getAccidents } = require("../controllers/accidents");
const accidentRouter = express.Router();

accidentRouter.post("/report", (req, res) => {
  reportAccident(req, res);
});

accidentRouter.get("/:state", validateUser, (req, res) => {
  getAccidents(req, res);
});

module.exports = accidentRouter;
