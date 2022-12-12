import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import OrdersInProcess from '../../Components/ordersProcesses';

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
      <Header />
      <div>
        {sales.map((s) => (
          <OrdersInProcess
            key={ s.id }
            orderId={ s.id }
            totalPrice={ s.totalPrice }
            data={ s.saleDate }
            status={ s.status }
          />
        ))}
        {console.log(sales)}
      </div>
    </div>
  );
}

export default CustomersOrders;
