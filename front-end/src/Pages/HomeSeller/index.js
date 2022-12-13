import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import SaleCard from '../../Components/SaleCard';

function HomeSeller() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/seller/orders');
      const data = await response.json();
      console.log(data);
      setSales(data);
    };
    request();
  }, []);

  return (
    <div>
      <Header />
      { sales.map((item, index) => (<SaleCard
        saleNumber={ item.id }
        status={ item.status }
        date={ item.saleDate }
        value={ Number(item.totalPrice) }
        adress={ item.deliveryAddress }
        deliveryNumber={ item.deliveryNumber }
        key={ index }
      />))}
    </div>
  );
}

export default HomeSeller;
