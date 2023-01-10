import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../Context/AppContext';

function Amount(props) {
  const {
    totalPrice,
    setTotalPrice,
    setProducts,
    products,
  } = useContext(AppContext);

  const [quantity, setQuantity] = useState(0);

  const { index, price, name, id } = props;

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const currentSale = cart.find((sale) => sale.name === name);
    if (currentSale) {
      setQuantity(currentSale.quantity);
    } else {
      setQuantity(quantity);
    }
  }, [name, quantity]);

  const addSaleLocalStorage = (currentQuantity) => {
    setQuantity(currentQuantity);
    const newSale = { name, price, quantity: currentQuantity, id };

    if (products.length === 0) {
      localStorage.setItem('carrinho', JSON.stringify([newSale]));
      setProducts([newSale]);
    }
    if (products.some((sale) => sale.name === name)) {
      const newCart = products.map((sale) => {
        if (sale.name === name) {
          sale.quantity = currentQuantity;
        }
        return sale;
      });
      localStorage.setItem('carrinho', JSON.stringify(newCart));
      setProducts(newCart);
    } else {
      localStorage.setItem('carrinho', JSON.stringify([...products, newSale]));
      setProducts([...products, newSale]);
    }
  };

  const addItem = () => {
    setTotalPrice(totalPrice + Number(price));
    setQuantity(quantity + 1);
    addSaleLocalStorage(quantity + 1);
  };

  const rmItem = () => {
    setQuantity(quantity - 1);
    setTotalPrice(totalPrice - Number(price));

    const newCart = products.map((sale) => {
      if (sale.name === name) {
        sale.quantity -= 1;
      }
      return sale;
    });

    const removeSaleWithZeroQuatity = newCart.filter((sale) => sale.quantity !== 0);

    localStorage.setItem('carrinho', JSON.stringify(removeSaleWithZeroQuatity));
    setProducts(removeSaleWithZeroQuatity);
  };

  return (
    <div>
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
        onClick={ rmItem }
        disabled={ quantity === 0 }
        className="cardLessBt"
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${index}` }
        value={ quantity }
        onChange={ (e) => addSaleLocalStorage(Number(e.target.value)) }
        className="cardImput"
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
        onClick={ addItem }
        disabled={ false }
        className="cardPlusBt"
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
  id: PropTypes.undefined,
};

Amount.propTypes = {
  index: PropTypes.number,
  price: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default Amount;
