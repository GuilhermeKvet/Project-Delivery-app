import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import Button from '../../Components/Button';
import Address from '../../Components/address details';
import AppContext from '../../Context/AppContext';
import TotalPriceButton from '../../Components/TotalPriceButton';
// const navigate = useNavigate();

function Pedidos() {
  const { products, setProducts, totalPrice } = useContext(AppContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(cart);
  }, [setProducts]);

  const finishOrder = () => {};

  return (
    <div>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
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
                isEditable
              />
            ))}
          </tbody>
        </table>
        <TotalPriceButton
          totalPrice={ totalPrice }
          testId="customer_checkout__element-order-total-price"
        />
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <Address />
        <Button
          text="Finalizar pedido"
          testId="customer_checkout__button-submit-order"
          exec={ finishOrder }
          disable={ false }
        />
      </div>
    </div>
  );
}

export default Pedidos;
