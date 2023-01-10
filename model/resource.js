const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  nom: {type: String, required: true},
  description: { type: String, required: true },
  cout: { type: String, required: true },
  date: { type: Date, required: true },
  type: {
    type: String,
    enum: ['Loyer', 'Achat Piece', ''],
    required: true
  }
});

module.exports = mongoose.model('Resource', ResourceSchema);