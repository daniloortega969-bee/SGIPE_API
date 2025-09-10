const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  nombre:  { type: String, required: true, trim: true },
  sku:     { type: String, required: true, unique: true, uppercase: true },
  precio:  { type: Number, required: true, min: 0 },
  stock:   { type: Number, required: true, min: 0, default: 0 },
  descripcion: { type: String, trim: true }
}, { timestamps: true, versionKey: false });

module.exports = model('Product', ProductSchema);
