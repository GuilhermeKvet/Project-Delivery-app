import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderRow from '../../Components/OrderRow';
import TableOrderHeader from '../../Components/TableOrderHeader';
import Button from '../../Components/Button';
import Address from '../../Components/AddressDetails';
import AppContext from '../../Context/AppContext';
import TotalPriceButton from '../../Components/TotalPriceButton';

function Pedidos() {
  const navigate = useNavigate();
  const { products, setProducts, totalPrice, setTotalPrice } = useContext(AppContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(cart);
    setTotalPrice(
      cart.reduce((acc, sale) => acc + (Number(sale.price) * sale.quantity), 0),
    );
  }, [setProducts, setTotalPrice]);

  const finishOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const buyInfo = JSON.parse(localStorage.getItem('buyInfo'));

    const url = 'http://localhost:3001/customer/orders';

    const fields = {
      userId: user.id,
      sellerId: buyInfo.sellerId,
      totalPrice: Number(totalPrice.toFixed(2)),
      deliveryAddress: buyInfo.address,
      deliveryNumber: buyInfo.number,
      status: 'Pendente',
    };

    const orderProducts = products.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    }));

    const body = JSON.stringify({ fields, orderProducts });

    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: user.token,
      },
      body,
    });

    const id = await response.json();

    if (response.ok === false) {
      setError({ message: response.statusText, status: response.status });
    } else {
      navigate(`/customer/orders/${id}`);
    }
  };

  return (
    <div>
      <Header
        orderPageRoute="/customer/orders"
        page="customer"
      />
      <div>
        <h2>Finalizar Pedido</h2>
        <table>
          <TableOrderHeader isEditable />
          <tbody>
            {products.map((sale, index) => (
              <OrderRow
                page="customer_checkout"
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
        <h2>Detalhes e Endere??o para Entrega</h2>
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
