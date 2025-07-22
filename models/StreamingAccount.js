const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  nombrePerfil: { type: String, required: true },
  tienePin: { type: Boolean, default: false },
  asignadoACliente: { type: String, default: null },
  estadoPerfil: {
    type: String,
    enum: ['Libre', 'Ocupado', 'Mantenimiento'],
    default: 'Libre'
  }
});

const StreamingAccountSchema = new mongoose.Schema({
  nombreServicio: { type: String, required: true },
  correoAcceso: { type: String, required: true },
  contrasenaAcceso: { type: String, required: true },
  perfiles: [ProfileSchema],
  fechaAdquisicion: Date,
  fechaExpiracion: Date,
  notasAdicionales: String
}, { timestamps: true });

module.exports = mongoose.model('StreamingAccount', StreamingAccountSchema);
