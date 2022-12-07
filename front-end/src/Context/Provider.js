import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const SIX = 6;
const TWELVE = 12;
const TRUE = true;
const FALSE = false;

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [disableLoginButton, setdisableLoginButton] = useState(true);
  const [disableRegisterButton, setdisableRegisterButton] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const validateLogin = (emailRecive, passwordRecive) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(emailRecive) && passwordRecive.length >= SIX) {
      return TRUE;
    }
    return FALSE;
  };

  useEffect(() => {
    if (validateLogin(email, password)) {
      setdisableLoginButton(false);
    } else {
      setdisableLoginButton(true);
    }
    setError({});
  }, [password, email]);

  useEffect(() => {
    if (validateLogin(email, password) && name.length >= TWELVE) {
      setdisableRegisterButton(false);
    } else {
      setdisableRegisterButton(true);
    }
    setError({});
  }, [name, email, password]);

  const obj = useMemo(() => ({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    disableLoginButton,
    disableRegisterButton,
    error,
    setError,
    totalPrice,
    setTotalPrice,
  }), [
    name,
    email,
    password,
    disableLoginButton,
    disableRegisterButton,
    error,
    totalPrice,
  ]);

  return (
    <AppContext.Provider
      value={ obj }
    >
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
