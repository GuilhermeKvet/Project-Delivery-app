import PropTypes from 'prop-types';

function Button(props) {
  const { text, testId, exec, disable, className } = props;
  const disableStatus = disable || false;
  return (
    <button
      data-testid={ `${testId}` }
      type="button"
      disabled={ disableStatus }
      onClick={ () => exec() }
      className={ className }
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  exec: PropTypes.undefined,
  disable: PropTypes.undefined,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  exec: PropTypes.func,
  disable: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

export default Button;
