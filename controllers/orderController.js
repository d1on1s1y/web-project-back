const Order = require('../models/order'); // Імпорт моделі Order

// Отримати всі замовлення/поставки
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

// Видалити замовлення/поставку
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Order not found', error });
  }
};