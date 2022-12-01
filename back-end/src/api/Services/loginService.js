const { compare } = require('bcryptjs');
const HttpException = require('../Helpers/httpError');
// const generateTokenFunction = require('../Utils/generateToken');
const { User } = require('../../database/models');
const validateLogin = require('../Validations/login.validation');

const login = async (email, password) => {
  if (!validateLogin(email, password)) throw new HttpException(400, 'All fields must be filled');
  
  const user = User.findOne({ where: { email, password } });

  if (!user) throw new HttpException(404, 'Not found');

  const isValidPassword = await compare(password, user.password);

  if (!isValidPassword) throw new HttpException(404, 'Not found');

  return user;

  // const token = generateTokenFunction.generateToken(user);

  // return token;
};

module.exports = {
  login,
};