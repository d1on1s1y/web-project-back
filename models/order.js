const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  drugId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drug', // Зв'язок із колекцією Drug
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
