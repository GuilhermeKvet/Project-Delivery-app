import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const SIX = 6;
const TWELVE = 12;

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [disableLoginButton, setdisableLoginButton] = useState(true);
  const [disableRegisterButton, setdisableRegisterButton] = useState(true);

  useEffect(() => {
    const validateLogin = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      if (regexEmail.test(email) && password.length >= SIX) {
        setdisableLoginButton(false);
      } else {
        setdisableLoginButton(true);
      }
    };
    setError({});
    validateLogin();
  }, [name, password, email]);

  useEffect(() => {
    const validateRegister = () => {
      if (name.length >= TWELVE) {
        setdisableRegisterButton(false);
      } else {
        setdisableRegisterButton(true);
      }
    };
    setError({});
    validateRegister();
  }, [name]);

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
  }), [name, email, password, disableLoginButton, disableRegisterButton, error]);

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
