const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  if (password.length >= 6) return true;
  return false;
};

const validateLogin = (email, password) => 
  (validateEmail(email) && validatePassword(password));

module.exports = {
  validateEmail,
  validatePassword,
  validateLogin,
};