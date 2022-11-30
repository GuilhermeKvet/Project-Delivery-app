import PropTypes from 'prop-types';

function Input(props) {
  const { lable, testId, placeholder, type } = props;
  const id = `${lable}${testId}`;
  return (
    <div>
      <label htmlFor={ id }>
        {lable}
        <input
          id={ id }
          data-testid={ `${testId}` }
          placeholder={ placeholder }
          type={ `${type}` }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  lable: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
