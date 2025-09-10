const Cliente = require('../models/Cliente');

exports.create = async (req, res) => {
  try {
    const doc = await Cliente.create(req.body);
    res.status(201).json({ status: 'ok', data: doc });
  } catch (e) {
    res.status(400).json({ status: 'error', message: e.message });
  }
};

exports.list = async (_req, res) => {
  const items = await Cliente.find().lean();
  res.json({ status: 'ok', data: items });
};

exports.get = async (req, res) => {
  const item = await Cliente.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};

exports.update = async (req, res) => {
  const item = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};

exports.remove = async (req, res) => {
  const item = await Cliente.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
  res.json({ status: 'ok', data: item });
};
