const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController'); // Імпорт контролера для обробки запитів

// Маршрути для роботи з логами
router.get('/', logController.getLogs);              // Отримати всі логи
router.post('/', logController.createLog);           // Додати новий лог

module.exports = router;