const SIX = 6;
const TRUE = true;
const FALSE = false;

const validateFields = (emailRecive, passwordRecive) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (regexEmail.test(emailRecive) && passwordRecive.length >= SIX) {
    return TRUE;
  }
  return FALSE;
};

export default validateFields;
