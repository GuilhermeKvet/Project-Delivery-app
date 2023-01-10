import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import SaleCard from '../../Components/SaleCard';
import color from '../../Utils/whatStatusColor';
import '../../Styles/sellerOrders.css';

function HomeSeller() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/seller/orders');
      const data = await response.json();
      setSales(data);
    };
    request();
  }, []);

  return (
    <div>
      <Header
        orderPageRoute="/seller/orders"
        page="seller"
      />
      <div className="sellerOrders">
        { sales.map((order, index) => (
          <SaleCard
            page="seller"
            key={ index }
            orderId={ order.id }
            date={ order.saleDate }
            totalPrice={ Number(order.totalPrice) }
            status={ order.status }
            adress={ order.deliveryAddress }
            deliveryNumber={ order.deliveryNumber }
            color={ color(order.status) }
          />
        ))}
      </div>
    </div>
  );
}

export default HomeSeller;
