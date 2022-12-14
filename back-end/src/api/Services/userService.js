const { User } = require('../../database/models');
const { register } = require('./loginService');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getAllSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });
  return sellers;
};

const createUser = async (user) => {
  const { name, email, password, role } = user;
  const newUser = await register(name, email, password, role);
  return newUser;
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  getAllUsers,
  getAllSellers,
  createUser,
  deleteUser,
};
