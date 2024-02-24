const Accident = require("../models/Accident");

const reportAccident = async (req, res) => {
  const accidentData = req.body;
  try {
    const accident = await Accident.create(accidentData);
    res.status(201).json(accident);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAccidents = async (req, res) => {
  try {
    const accidents = await Accident.find();
    res.status(200).json(accidents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  reportAccident,
  getAccidents,
};
