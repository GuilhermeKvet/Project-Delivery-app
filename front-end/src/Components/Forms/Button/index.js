import PropTypes from 'prop-types';

function Button(props) {
  const { text, testId, exec, disable } = props;

  return (
    <button
      data-testid={ `${testId}` }
      type="button"
      disabled={ disable }
      onClick={ () => exec() }
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  exec: PropTypes.undefined,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  exec: PropTypes.func,
  disable: PropTypes.bool.isRequired,
};

export default Button;
