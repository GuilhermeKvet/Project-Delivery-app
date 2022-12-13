import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import OrderDetailsInfo from '../../Components/OrderDetailsInfo';

function OrderDetails() {
  // const navigate = useNavigate();

  const [sale, setSale] = useState([]);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://localhost:3001/customer/orders/${id}`);
      const data = await response.json();
      setSale(data);
      setProducts(data.products);
    };
    request();
  }, [id]);

  const delivered = async () => {
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
      <Header />
      <div>
        <h2>Detalhes do Pedido</h2>
        <OrderDetailsInfo
          key={ sale.id }
          orderId={ sale.id }
          sellerName={ sale.sellerId }
          status={ sale.status }
          data={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          changeStatus={ delivered }
        />
        <table>
          <TableHeader />
          <tbody>
            {products.map((s, index) => (
              <OrderSale
                page="order-details"
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
