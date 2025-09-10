const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
  nombre:    { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true, trim: true },
  telefono:  { type: String, trim: true },
  direccion: { type: String, trim: true }
}, { timestamps: true, versionKey: false });

module.exports = model('Cliente', ClienteSchema);
