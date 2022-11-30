import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [email] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  return (
    <AppContext.Provider value={ email }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
