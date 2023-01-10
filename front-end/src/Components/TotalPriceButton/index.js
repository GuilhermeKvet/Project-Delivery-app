import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import modelValue from '../../Utils/modelValue';

function TotalPriceButton(props) {
  const { totalPrice, testId } = props;

  const navigate = useNavigate();

  return (
    <button
      data-testid={ `${testId}` }
      type="button"
      onClick={ () => navigate('/customer/checkout') }
      disabled={ totalPrice === 0 }
      className="totalValue"
    >
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {modelValue(totalPrice)}
      </span>
    </button>
  );
}

TotalPriceButton.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  testId: PropTypes.string.isRequired,
};

export default TotalPriceButton;
