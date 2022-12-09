import React, { useContext, useEffect, useState } from 'react';
import ItemCard from '../../Components/Card';
import Header from '../../Components/Header';
import TotalPriceButton from '../../Components/TotalPriceButton';
import AppContext from '../../Context/AppContext';

function Products() {
  const [bebidas, setBebidas] = useState([]);
  const { totalPrice, setTotalPrice, setProducts } = useContext(AppContext);

  useEffect(() => {
    const requestBebidas = async () => {
      const response = await fetch('http://localhost:3001/customer/products');
      const data = await response.json();
      setBebidas(data);
    };

    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(cart);

    setTotalPrice(
      cart.reduce((acc, sale) => acc + (Number(sale.price) * sale.quantity), 0),
    );
    requestBebidas();
  }, [setProducts, setTotalPrice]);

  return (
    <div>
      <Header />
      <div>
        { bebidas.map((bebida, index) => (
          <ItemCard
            key={ `${index}${bebida.name}` }
            index={ index + 1 }
            description={ bebida.name }
            image={ bebida.urlImage }
            price={ bebida.price }
            id={ bebida.id }
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
