const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Імпорт контролера для обробки запитів

// Маршрути для роботи з замовленнями/поставками
router.get('/', orderController.getOrders);           // Отримати всі замовлення/поставки
router.delete('/:id', orderController.deleteOrder);   // Видалити замовлення/поставку

module.exports = router;
