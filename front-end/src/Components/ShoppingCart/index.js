import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

function ShoppingCart() {
  const { totalPrice } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ () => navigate('/customer/checkout') }
      disabled={ totalPrice === 0 }
    >
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalPrice.toFixed(2).replace('.', ',')}
      </span>
    </button>
  );
}

export default ShoppingCart;
