import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
// import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
// import AppContext from '../../Context/AppContext';
import OrderDetailsInfo from '../../Components/OrderDetailsInfo';
// const navigate = useNavigate();

function OrderDetails() {
  const [sale, setSale] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const request = async () => {
      const response = await fetch(`http://localhost:3001/customer/orders/${id}`);
      const data = await response.json();
      setSale(data);
    };
    request();
  }, [id]);

  return (
    <div>
      <Header />
      <div>
        <h2>Detalhes do Pedido</h2>
        <OrderDetailsInfo
          key={ sale.id }
          orderId={ sale.id }
          sellerName={ sale.sellerName } // Só exemplo, vai ter que mudar depois, eu acho
          totalPrice={ sale.totalPrice }
          data={ sale.saleDate }
          status={ sale.status }
        />
        <table>
          <TableHeader />
          <tbody />
        </table>
      </div>
    </div>
  );
}

export default OrderDetails;
