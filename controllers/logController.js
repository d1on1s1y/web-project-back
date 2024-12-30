const Log = require('../models/log'); // Імпорт моделі Log

// Отримати всі логи 
exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logs', error });
  }
};

// Додати новий лог
exports.createLog = async (req, res) => {
  try {
    const newLog = new Log(req.body);
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating log', error });
  }
};