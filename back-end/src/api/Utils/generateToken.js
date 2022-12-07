const jwt = require('jsonwebtoken');
const fs = require('fs');
const { join } = require('path');

const JWT_SECRET = fs.readFileSync(join(__dirname, '../../../jwt.evaluation.key'));

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET);

module.exports = {
  generateToken,
};