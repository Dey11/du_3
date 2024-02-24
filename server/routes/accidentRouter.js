const express = require("express");

const accidentRouter = express.Router();

accidentRouter.post("/report", (req, res) => {
  res.send("Accident reported");
});

accidentRouter.get("/", (req, res) => {
  res.send("Accident list");
});

module.exports = accidentRouter;
