const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../../database/models');
const HttpException = require('../Helpers/httpError');
const { validateRegister } = require('../Validations/loginValidation');
const { generateToken } = require('../Utils/generateToken');

const register = async (name, email, password, role) => {
  if (!validateRegister(name, email, password)) {
    throw new HttpException(401, 'All fields must be filled');
  }

  const hasUser = await User.findOne({
    where: { [Op.or]: [
        { name },
        { email },
    ] },
  });

  if (!hasUser) {
    const crypto = md5(password);
    
    const token = generateToken({});
    
    const newUser = await User.create({ name, email, password: crypto, role });
    
    delete newUser.dataValues.password;

    return { ...newUser.dataValues, token };
  }
  throw new HttpException(409, 'Conflict');
};

module.exports = {
  register,
};
