const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  nombreCliente: { type: String, required: true },
  contacto: String
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);
