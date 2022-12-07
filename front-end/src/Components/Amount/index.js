import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import AppContext from '../../Context/AppContext';

function Amount(props) {
  const { totalPrice, setTotalPrice } = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);

  const { index, price, name } = props;

  const addItem = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const newSale = { name, price, quantity };

    if (carrinho.length === 0) {
      localStorage.setItem('carrinho', JSON.stringify([...carrinho, newSale]));
      console.log('if');
    } else if (carrinho.some((sale) => sale.name === name)) {
      // localStorage.setItem('carrinho', JSON.stringify([...carrinho, newSale]));
      console.log('else if', carrinho);
    } else {
      localStorage.setItem('carrinho', JSON.stringify([...carrinho, newSale]));
    }
    console.log('else');

    setTotalPrice(totalPrice + Number(price));
    setQuantity(quantity + 1);
  };

  const rmItem = () => {
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - Number(price));

    if (quantity <= 0) {
      setTotalPrice(0);
      setQuantity(0);
    }
  };

  return (
    <div>
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
        onClick={ rmItem }
        disabled={ quantity === 0 }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${index}` }
        value={ quantity }
        readOnly
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ addItem }
      >
        +
      </button>
    </div>
  );
}

Amount.defaultProps = {
  index: PropTypes.undefined,
  price: PropTypes.undefined,
  name: PropTypes.undefined,
};

Amount.propTypes = {
  index: PropTypes.number,
  price: PropTypes.string,
  name: PropTypes.string,
};

export default Amount;
