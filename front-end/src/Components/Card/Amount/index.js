import PropTypes from 'prop-types';
import { useState } from 'react';

function Amount(props) {
  const [quantity, setQuantity] = useState(0);

  const { index } = props;

  const buttonUp = () => {
    setQuantity(quantity + 1);
  };

  const buttonDown = () => {
    setQuantity(quantity <= 0 ? 0 : quantity - 1);
  };

  return (
    <div>
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
        onClick={ buttonDown }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${index}` }
        value={ quantity }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ buttonUp }
      >
        +
      </button>
    </div>
  );
}

Amount.defaultProps = {
  index: PropTypes.undefined,
};

Amount.propTypes = {
  index: PropTypes.number,
};

export default Amount;
