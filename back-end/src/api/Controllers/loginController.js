const loginService = require('../Services/loginService');

const getAllUsers = async (_req, res) => {
  const sales = await loginService.getAllUsers();
  return res.status(200).json(sales);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  return res.status(200).json(user);
};

module.exports = {
  login,
  getAllUsers,
};