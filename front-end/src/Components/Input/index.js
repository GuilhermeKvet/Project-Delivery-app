import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../Context/AppContext';
import '../../Styles/input.css';

function Input(props) {
  const { setEmail, setPassword, setName } = useContext(AppContext);
  const { lable, testId, placeholder, type, state } = props;
  const id = `${lable}${testId}`;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  return (
    <div className="container">
      <label htmlFor={ id } className="label">
        {lable}
        <input
          className="input"
          id={ id }
          data-testid={ `${testId}` }
          placeholder={ placeholder }
          type={ `${type}` }
          name={ type }
          value={ state }
          onChange={ (e) => handleChange(e) }
        />
      </label>
    </div>
  );
}

Input.defaultProps = {
  state: PropTypes.undefined,
};

Input.propTypes = {
  lable: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string,
};

export default Input;
