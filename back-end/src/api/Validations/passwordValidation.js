const md5 = require('md5');

const TRUE = true;

const validatePassword = (password, user) => {
  if (md5(password) === user.password) {
    return TRUE;
  }
  return false;
};
module.exports = {
  validatePassword,
};