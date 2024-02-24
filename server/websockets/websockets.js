const io = require("../index");

const fun = () => {
  io.emit("accident", "accidentData");
};

module.exports = { fun };
