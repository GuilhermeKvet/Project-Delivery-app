const userService = require('../Services/userService');

const getAllSellers = async (_req, res) => {
  const sellers = await userService.getAllSellers();
  return res.status(200).json(sellers);
};

const getAllUsers = async (_req, res) => {
  const sales = await userService.getAllUsers();
  return res.status(200).json(sales);
};

const createUser = async (req, res) => {
  const sales = await userService.createUser(req.body);
  return res.status(201).json(sales);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (req.role === 'administrator') {
    await userService.deleteUser(id);
    return res.status(204).json({ message: 'Deleted' });
  }
  return res.status(401).json({ message: 'Protect route' });
};

module.exports = {
  getAllSellers,
  getAllUsers,
  createUser,
  deleteUser,
};
