import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../Context/AppContext';

function Button(props) {
  const { disableLoginButton } = useContext(AppContext);
  const { text, testId, type, exec } = props;

  return (
    <button
      data-testid={ `${testId}` }
      type="button"
      disabled={ type === 'login' ? disableLoginButton : false }
      onClick={ () => exec() }
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: PropTypes.undefined,
  exec: PropTypes.undefined,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  exec: PropTypes.func,
};

export default Button;
