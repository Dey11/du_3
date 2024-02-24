const express = require("express");
const validateUser = require("../middlewares/validateUser");
const accidentRouter = express.Router();

accidentRouter.post("/report", (req, res) => {
  res.send("Accident reported");
});

accidentRouter.get("/:state", validateUser, (req, res) => {
  res.send("Accident list");
});

module.exports = accidentRouter;
