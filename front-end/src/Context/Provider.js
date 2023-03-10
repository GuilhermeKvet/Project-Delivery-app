import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import validateFields from '../Utils/validateFields';

const TWELVE = 12;

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [disableLoginButton, setdisableLoginButton] = useState(true);
  const [disableRegisterButton, setdisableRegisterButton] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (validateFields(email, password)) {
      setdisableLoginButton(false);
    } else {
      setdisableLoginButton(true);
    }
    setError({});
  }, [password, email]);

  useEffect(() => {
    if (validateFields(email, password) && name.length >= TWELVE) {
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
    products,
    setProducts,
    users,
    setUsers,
  }), [
    name,
    email,
    password,
    disableLoginButton,
    disableRegisterButton,
    error,
    totalPrice,
    products,
    users,
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
