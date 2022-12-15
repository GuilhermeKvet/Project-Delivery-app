import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import SaleCard from '../../Components/SaleCard';

function CustomersOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/customer/orders');
      const data = await response.json();
      setSales(data);
    };
    request();
  }, []);

  return (
    <div>
      <Header
        orderPageRoute="/customer/orders"
        page="customer"
      />
      <div>
        {sales.map((order) => (
          <SaleCard
            page="customer"
            key={ order.id }
            orderId={ order.id }
            date={ order.saleDate }
            totalPrice={ Number(order.totalPrice) }
            status={ order.status }
            adress={ order.deliveryAddress }
            deliveryNumber={ order.deliveryNumber }
          />
        ))}
      </div>
    </div>
  );
}

export default CustomersOrders;
