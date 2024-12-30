const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Імпорт контролера для обробки запитів

// Маршрути для роботи з користувачами
router.get('/', userController.getUsers);           // Отримати список користувачів
router.post('/', userController.createUser);        // Створити нового користувача
router.delete('/:id', userController.deleteUser);   // Видалити користувача

module.exports = router;