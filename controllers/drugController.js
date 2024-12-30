const Drug = require('../models/drug'); // Імпорт моделі Drug

// Отримати список ліків
exports.getDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drugs', error });
  }
};

// Додати новий препарат
exports.createDrug = async (req, res) => {
  try {
    const newDrug = new Drug(req.body);
    await newDrug.save();
    res.status(201).json(newDrug);
  } catch (error) {
    res.status(400).json({ message: 'Error creating drug', error });
  }
};

// Оновити інформацію про препарат
exports.updateDrug = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDrug = await Drug.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedDrug);
  } catch (error) {
    res.status(404).json({ message: 'Drug not found', error });
  }
};

// Видалити препарат
exports.deleteDrug = async (req, res) => {
  try {
    const { id } = req.params;
    await Drug.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Drug not found', error });
  }
};