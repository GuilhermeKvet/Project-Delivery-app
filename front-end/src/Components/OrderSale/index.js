import { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import modelValue from '../../Utils/modelValue';

function OrderSale(prop) {
  const { index, price, name, quantity, isEditable } = prop;

  const { setProducts } = useContext(AppContext);

  const rmItem = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    const newCart = cart.filter((sale) => sale.name !== name);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
    setProducts(newCart);
  };

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {modelValue(Number(price))}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {modelValue(Number(price * quantity))}
      </td>
      {isEditable
        && (
          <td>
            <button
              type="button"
              onClick={ rmItem }
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              Remover
            </button>
          </td>
        )}
    </tr>
  );
}

export default OrderSale;
