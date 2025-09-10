const { Schema, model } = require('mongoose');

const ProveedorSchema = new Schema({
  nombre:    { type: String, required: true, trim: true },
  email:     { type: String, unique: true, lowercase: true, trim: true },
  telefono:  { type: String, trim: true },
  direccion: { type: String, trim: true },
  empresa:   { type: String, trim: true }
}, { timestamps: true, versionKey: false });

module.exports = model('Proveedor', ProveedorSchema);
