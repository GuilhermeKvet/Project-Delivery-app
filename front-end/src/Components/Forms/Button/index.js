import PropTypes from 'prop-types';

function Button(props) {
  const { text, testId } = props;

  return (
    <button data-testid={ `${testId}` } type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
