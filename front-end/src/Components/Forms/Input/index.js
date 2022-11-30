import './style.css';
import PropTypes from 'prop-types';

function Input(props) {
  const { lable, testId, placeholder } = props;
  const id = `${lable}${testId}`;
  return (
    <div>
      <lable htmlFor={ id }>
        {lable}
        <input
          id={ id }
          data-testid={ `${testId}` }
          placeholder={ placeholder }
        />
      </lable>
    </div>
  );
}

Input.propTypes = {
  lable: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
