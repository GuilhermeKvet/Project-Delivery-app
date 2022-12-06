const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  if (password.length >= 6) return true;
  return false;
};

const validateName = (name) => {
  if (name.length >= 12) return true;
  return false;
};

const validateLogin = (email, password) => 
  (validateEmail(email) && validatePassword(password));

const validateRegister = (name, email, password) => 
  (validateEmail(email) && validatePassword(password) && validateName(name));

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  validateLogin,
  validateRegister,
};