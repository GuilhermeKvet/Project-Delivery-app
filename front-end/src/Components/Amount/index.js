import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';

function Amount(props) {
  const { totalPrice, setTotalPrice } = useContext(AppContext);

  const { index, price, name } = props;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const currentSale = cart.find((sale) => sale.name === name);
    if (currentSale) {
      setQuantity(currentSale.quantity);
    } else {
      setQuantity(quantity);
    }
    setTotalPrice(
      cart.reduce((acc, sale) => acc + (Number(sale.price) * sale.quantity), 0),
    );
  }, [name, quantity, setTotalPrice]);

  const addSaleLocalStorage = (currentQuantity) => {
    setQuantity(currentQuantity);
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const newSale = { name, price, quantity: currentQuantity };

    if (cart.length === 0) {
      localStorage.setItem('carrinho', JSON.stringify([newSale]));
    }
    if (cart.some((sale) => sale.name === name)) {
      const newCart = cart.map((sale) => {
        if (sale.name === name) {
          sale.quantity = currentQuantity;
        }
        return sale;
      });
      localStorage.setItem('carrinho', JSON.stringify(newCart));
    } else {
      localStorage.setItem('carrinho', JSON.stringify([...cart, newSale]));
    }
  };

  const addItem = () => {
    setTotalPrice(totalPrice + Number(price));
    setQuantity(quantity + 1);
    addSaleLocalStorage(quantity + 1);
  };

  const rmItem = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - Number(price));

    const newCart = cart.map((sale) => {
      if (sale.name === name) {
        sale.quantity -= 1;
      }
      return sale;
    });

    const removeSaleWithZeroQuatity = newCart.filter((sale) => sale.quantity !== 0);

    localStorage.setItem('carrinho', JSON.stringify(removeSaleWithZeroQuatity));
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
        onChange={ (e) => addSaleLocalStorage(Number(e.target.value)) }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ addItem }
        disabled={ false }
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
