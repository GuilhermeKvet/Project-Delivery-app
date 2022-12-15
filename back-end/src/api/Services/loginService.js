const md5 = require('md5');
const { Op } = require('sequelize');
const HttpException = require('../Helpers/httpError');
const { User } = require('../../database/models');
const { validatePassword } = require('../Validations/passwordValidation');
const generateToken = require('../Utils/generateToken');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) throw new HttpException(404, 'Not found');
  
  if (!validatePassword(password, user.dataValues)) {
    throw new HttpException(401, 'All fields must be filled');
  }

  delete user.dataValues.password;

  const token = await generateToken.generateToken({ role: user.dataValues.role });

  return { token, ...user.dataValues };
};

const register = async (name, email, password, role) => {
  const hasUser = await User.findOne({
    where: { [Op.or]: [
        { name },
        { email },
    ] },
  });

  if (!hasUser) {
    const crypto = md5(password);
    
    const token = await generateToken.generateToken({ role });
    
    const newUser = await User.create({ name, email, password: crypto, role });
    
    delete newUser.dataValues.password;

    return { ...newUser.dataValues, token };
  }
  throw new HttpException(409, 'Conflict');
};

module.exports = {
  login,
  register,
};