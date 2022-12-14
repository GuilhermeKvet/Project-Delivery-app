import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import OrderDetailsInfo from '../../Components/OrderDetailsInfo';
import Button from '../../Components/Button';

function SaleOrderDetails() {
  const [sale, setSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [sallerName, setSallerName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://localhost:3001/customer/orders/${id}`);
      const data = await response.json();
      setSallerName(data.seller.name);
      setSale(data);
      setProducts(data.products);
    };
    request();
  }, [id]);

  const changeStatus = async (status) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = `http://localhost:3001/seller/orders/${id}/status`;
    const response = await fetch(url, {
      body: JSON.stringify({ status }),
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: user.token,
      },
    });
    const data = await response.json();
    setSale(data);
  };

  return (
    <div>
      <Header
        orderPageRoute="/seller/orders"
        text="PEDIDOS"
      />
      <div>
        <h2>Detalhes do Pedido</h2>
        <OrderDetailsInfo
          page="seller_order_details"
          key={ sale.id }
          orderId={ sale.id }
          sellerName={ sallerName }
          status={ sale.status }
          data={ sale.saleDate }
          totalPrice={ sale.totalPrice }
        />
        <Button
          text="PREPARAR PEDIDO"
          testId="seller_order_details__button-preparing-check"
          exec={ () => changeStatus('Preparando') }
          disable={ sale.status !== 'Pendente' }
        />
        <Button
          text="SAIU PARA ENTREGA"
          testId="seller_order_details__button-dispatch-check"
          exec={ () => changeStatus('Em Trânsito') }
          disable={ sale.status !== 'Preparando' }
        />
        <table>
          <TableHeader />
          <tbody>
            {products.map((s, index) => (
              <OrderSale
                page="seller_order_details"
                key={ `${s.name}${index}` }
                index={ index }
                name={ s.name }
                price={ s.price }
                quantity={ s.SalesProducts.quantity }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SaleOrderDetails;
