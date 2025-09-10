const jwt = require('jsonwebtoken');
const User = require('../models/User');

function signToken(user) {
  const payload = { id: user._id, email: user.email, role: user.role, name: user.name };
  const secret  = process.env.JWT_SECRET || 'dev_secret';
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.status(201).json({ status: 'ok', data: { user, token } });
  } catch (e) {
    res.status(400).json({ status: 'error', message: e.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ status: 'error', message: 'Credenciales inválidas' });
  const ok = await user.comparePassword(password);
  if (!ok) return res.status(400).json({ status: 'error', message: 'Credenciales inválidas' });
  const token = signToken(user);
  res.json({ status: 'ok', data: { user, token } });
};
