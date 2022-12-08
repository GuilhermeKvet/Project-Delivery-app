import React, { useContext, useEffect, useState } from 'react';
import ItemCard from '../../Components/Card';
import Header from '../../Components/Header';
import TotalPriceButton from '../../Components/TotalPriceButton';
import AppContext from '../../Context/AppContext';

function Products() {
  const [bebidas, setBebidas] = useState([]);
  const { totalPrice } = useContext(AppContext);

  useEffect(() => {
    const requestBebidas = async () => {
      const response = await fetch('http://localhost:3001/customer/products');
      const data = await response.json();
      setBebidas(data);
    };
    requestBebidas();
  }, []);

  return (
    <div>
      <Header />
      <div>
        { bebidas.map((bebida, index) => (
          <ItemCard
            key={ `${index}${bebida.name}` }
            index={ index + 1 }
            description={ bebida.name }
            image={ bebida.url_image }
            price={ bebida.price }
          />
        ))}
      </div>
      <TotalPriceButton
        totalPrice={ totalPrice }
        testId="customer_products__button-cart"
      />
    </div>
  );
}

export default Products;
