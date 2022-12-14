const jwt = require('jsonwebtoken');
const fs = require('fs');
const { join } = require('path');

const JWT_SECRET = fs.readFileSync(join(__dirname, '../../../jwt.evaluation.key'));

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { role } = jwt.verify(token, JWT_SECRET);

    req.role = role;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};