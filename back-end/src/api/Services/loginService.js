const md5 = require('md5');
const HttpException = require('../Helpers/httpError');
const { User } = require('../../database/models');
const { validateLogin } = require('../Validations/loginValidation');

const TRUE = true;
const FALSE = false;

const login = async (email, password) => {
  if (!validateLogin(email, password)) throw new HttpException(401, 'All fields must be filled');
  
  const user = await User.findOne({ where: { email } });

  if (!user) throw new HttpException(404, 'Not found');

  const isValidPassword = md5(password) === user.password ? TRUE : FALSE;

  if (!isValidPassword) throw new HttpException(404, 'Not found');

  return user;
};

module.exports = {
  login,
};