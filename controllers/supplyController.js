const Supply = require('../models/supply'); // Імпорт моделі Supply

// Отримати всі замовлення/поставки
exports.getSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find();
    res.status(200).json(supplies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching supplies', error });
  }
};

// Видалити замовлення/поставку
exports.deleteSupply = async (req, res) => {
  try {
    const { id } = req.params;
    await Supply.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: 'Supply not found', error });
  }
};