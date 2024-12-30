const express = require('express');
const router = express.Router();
const drugController = require('../controllers/drugController'); // Імпорт контролера для обробки запитів

// Маршрути для роботи з ліками
router.get('/', drugController.getDrugs);             // Отримати список ліків
router.post('/', drugController.createDrug);          // Додати новий препарат
router.patch('/:id', drugController.updateDrug);      // Оновити інформацію про препарат
router.delete('/:id', drugController.deleteDrug);     // *Видалити препарат (якщо потрібно)

module.exports = router;
