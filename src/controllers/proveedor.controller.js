const Proveedor = require('../models/Proveedor');

exports.create = async (req, res) => {
  try {
    const doc = await Proveedor.create(req.body);
    res.status(201).json({ status: 'ok', data: doc });
  } catch (e) {
    res.status(400).json({ status: 'error', message: e.message });
  }
};

exports.list = async (_req, res) => {
  const items = await Proveedor.find().lean();
  res.json({ status: 'ok', data: items });
};

exports.get = async (req, res) => {
  const item = await Proveedor.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};

exports.update = async (req, res) => {
  const item = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};

exports.remove = async (req, res) => {
  const item = await Proveedor.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};
