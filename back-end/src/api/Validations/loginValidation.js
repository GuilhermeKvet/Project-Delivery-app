const md5 = require('md5');
const HttpException = require('../Helpers/httpError');

const TRUE = true;
const FALSE = false;

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password, user) => {
  if (md5(password) === user.password) {
    return TRUE;
  }
  throw new HttpException(404, 'Not found');
};

const validateName = (name) => {
  if (name.length >= 12) return TRUE;
  return FALSE;
};

const validateLogin = (email, password, user) => 
  (validateEmail(email) && validatePassword(password, user));

const validateRegister = (name, email) =>
  (validateEmail(email) && validateName(name));

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateLogin,
  validateRegister,
};