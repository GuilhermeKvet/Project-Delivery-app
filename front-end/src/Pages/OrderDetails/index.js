import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderRow from '../../Components/OrderRow';
import TableOrderHeader from '../../Components/TableOrderHeader';
import OrderDetailsInfo from '../../Components/OrderDetailsInfo';
import Button from '../../Components/Button';

function OrderDetails() {
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

  const changeStatus = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = `http://localhost:3001/customer/orders/${id}/status`;
    const response = await fetch(url, {
      body: JSON.stringify({ status: 'Entregue' }),
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
        orderPageRoute="/customer/orders"
        page="customer"
      />
      <div>
        <h2>Detalhes do Pedido</h2>
        <OrderDetailsInfo
          page="customer_order_details"
          key={ sale.id }
          orderId={ sale.id }
          sellerName={ sallerName }
          status={ sale.status }
          data={ sale.saleDate }
          totalPrice={ sale.totalPrice }
        />
        <Button
          text="MARCAR COMO ENTREGUE"
          testId="customer_order_details__button-delivery-check"
          exec={ changeStatus }
          disable={ sale.status !== 'Em Trânsito' }
        />
        <table>
          <TableOrderHeader />
          <tbody>
            {products.map((s, index) => (
              <OrderRow
                page="customer_order_details"
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

export default OrderDetails;
