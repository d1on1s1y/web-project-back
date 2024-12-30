const express = require('express');
const router = express.Router();
const supplyController = require('../controllers/supplyController'); // Імпорт контролера для обробки запитів

// Маршрути для роботи з замовленнями/поставками
router.get('/', supplyController.getSupplies);           // Отримати всі замовлення/поставки
router.delete('/:id', supplyController.deleteSupply);   // Видалити замовлення/поставку

module.exports = router;

