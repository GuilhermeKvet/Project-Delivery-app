import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const SIX = 6;

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableLoginButton, setdisableLoginButton] = useState(true);
  // const [name, setName] = useState('');

  useEffect(() => {
    const validateLogin = () => {
      const regexEmail = /\S+@\S+\.\S+/;
      if (regexEmail.test(email) && password.length >= SIX) {
        setdisableLoginButton(false);
      } else {
        setdisableLoginButton(true);
      }
    };
    validateLogin();
  }, [password, email]);

  const obj = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    disableLoginButton,
  }), [email, password, disableLoginButton]);

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
