// app.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
// require('dotenv').config(); // Для завантаження змінних середовища з файлу .env

// Імпортуємо маршрути
const userRoutes = require('./routes/userRoutes');
const drugRoutes = require('./routes/drugRoutes');
const orderRoutes = require('./routes/orderRoutes');
const supplyRoutes = require('./routes/supplyRoutes');
const logRoutes = require('./routes/logRoutes');

// Створюємо додаток Express
const app = express();

// Середовище (порт та база даних)
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://dionisiygodofwine:TP2NYk3RUr7eANcJ@cluster0.ftu4i.mongodb.net/';

// Middleware
app.use(cors()); // Дозволяє роботу з CORS
app.use(morgan('dev')); // Логування HTTP-запитів
app.use(express.json()); // Парсинг JSON у тілі запиту

// Підключення до MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })    
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Основні маршрути
app.use('/api/users', userRoutes); // Робота з користувачами
app.use('/api/drugs', drugRoutes); // Робота з ліками
app.use('/api/orders', orderRoutes); // Робота з замовленнями/поставками
app.use('/api/supplies',supplyRoutes);
app.use('/api/logs', logRoutes); // Робота з логами

// Обробка помилок (middleware для обробки 404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Глобальна обробка помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});