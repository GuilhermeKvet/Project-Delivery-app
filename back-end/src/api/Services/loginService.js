const HttpException = require('../Helpers/httpError');
const { User } = require('../../database/models');
const { validateLogin } = require('../Validations/loginValidation');
const { generateToken } = require('../Utils/generateToken');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) throw new HttpException(404, 'Not found');
  
  if (!validateLogin(email, password, user)) {
    throw new HttpException(401, 'All fields must be filled');
  }

  delete user.dataValues.password;

  const token = generateToken({});

  return { token, ...user.dataValues };
};

module.exports = {
  login,
};