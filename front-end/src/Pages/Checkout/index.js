import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import Button from '../../Components/Button';
import Address from '../../Components/address details';
import AppContext from '../../Context/AppContext';
import TotalPriceButton from '../../Components/TotalPriceButton';
import modelValue from '../../Utils/modelValue';

function Pedidos() {
  // const navigate = useNavigate();
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
    const address = JSON.parse(localStorage.getItem('address'));
    const url = 'http://localhost:3001/customer/orders';
    const sales = products.map(() => {
      const fields = {
        user_id: user.id,
        seller_id: address.vendedora,
        total_price: modelValue(totalPrice),
        delivery_address: address.endereco,
        delivery_number: address.numero,
        status: 'pendente',
      };
      return fields;
    });

    const body = JSON.stringify(sales);

    const response = await fetch(url, {
      body,
      method: 'post',
      headers: { 'Content-type': 'application/json' },
    });

    const id = await response.json();

    if (response.ok === false) {
      setError({ message: response.statusText, status: response.status });
    } else {
      navigate(`/customer/orders/${id}}`);
    }
  };

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
