const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', // Зв'язок із колекцією User
  //   required: true,
  // },
  contributorName: {
    type: String,
    required: true,
  },
  time:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Log', logSchema);
