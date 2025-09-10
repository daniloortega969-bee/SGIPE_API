const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ status: 'error', message: 'Token faltante' });
  try {
    const secret = process.env.JWT_SECRET || 'dev_secret';
    req.user = jwt.verify(token, secret);
    return next();
  } catch {
    return res.status(401).json({ status: 'error', message: 'Token inválido' });
  }
}
