const registerService = require('../Services/registerService');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await registerService.register(name, email, password, role);
  return res.status(201).json(user);
};

module.exports = {
  register,
};