const HttpException = require('../Helpers/httpError');
const { User } = require('../../database/models');
const { validateLogin } = require('../Validations/login.validation');
const md5 = require('md5');

const login = async (email, password) => {
  if (!validateLogin(email, password)) throw new HttpException(401, 'All fields must be filled');
  
  const user = await User.findOne({ where: { email } });

  if (!user) throw new HttpException(404, 'Not found');

  const isValidPassword = md5(password) === user.password ? true : false;

  if (!isValidPassword) throw new HttpException(404, 'Not found');

  return user;
};

module.exports = {
  login,
};