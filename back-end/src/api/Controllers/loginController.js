const loginService = require('../Services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  return res.status(200).json(user);
};

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = await loginService.register(name, email, password, role);
  return res.status(201).json(user);
};

module.exports = {
  login,
  register,
};