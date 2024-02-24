const Accident = require("../db/models/accidentSchema");
const fun = require("../websockets/websockets");

const reportAccident = async (req, res) => {
  const accidentData = req.body;
  fun;
  try {
    const accident = await Accident.create(accidentData);
    res.status(201).json(accident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAccidents = async (req, res) => {
  const { state } = req.params;
  try {
    const accidents = await Accident.find({ state });
    res.status(200).json(accidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  reportAccident,
  getAccidents,
};
