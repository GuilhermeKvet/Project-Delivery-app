import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import AppContext from '../../Context/AppContext';
import TotalPriceButton from '../../Components/TotalPriceButton';
// const navigate = useNavigate();

function OrderDetails() {
  const { products, setProducts, totalPrice, setTotalPrice } = useContext(AppContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(cart);
    setTotalPrice(
      cart.reduce((acc, sale) => acc + (Number(sale.price) * sale.quantity), 0),
    );
  }, [setProducts, setTotalPrice]);

  return (
    <div>
      <Header />
      <div>
        <h2>Detalhes do Pedido</h2>
        <table>
          <TableHeader />
          <tbody>
            {products.map((sale, index) => (
              <OrderSale
                key={ `${sale.name}${index}` }
                index={ index }
                name={ sale.name }
                price={ sale.price }
                quantity={ sale.quantity }
              />
            ))}
          </tbody>
        </table>
        <TotalPriceButton
          totalPrice={ totalPrice }
          testId="customer_order_details__element-order-total-price"
        />
      </div>
    </div>
  );
}

export default OrderDetails;
