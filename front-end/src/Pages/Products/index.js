import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import Button from '../../Components/Forms/Button';
import ItemCard from '../../Components/Card/Item';
// import bebidas from '../../images';

function Products() {
  const { name } = useContext(AppContext);
  const navigate = useNavigate();

  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const requestBebidas = async () => {
      const response = await fetch('http://localhost:3001/customer/products');
      const data = await response.json();
      setBebidas(data);
    };
    requestBebidas();
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header id="RegisterComponent">

      <Button
        testId="customer_products__element-navbar-link-products"
        text="PRODUTOS"
      />

      <Button
        testId="customer_products__element-navbar-link-orders"
        text="PEDIDOS"
      />

      <Button
        testId="customer_products__element-navbar-user-full-name"
        text={ `${name}` }
      />

      <Button
        testId="customer_products__element-navbar-link-logout"
        text="SAIR"
        exec={ logout }
      />
      { bebidas.map((bebida, index) => (
        <ItemCard
          key={ `${index}${bebida.name}` }
          index={ index + 1 }
          description={ bebida.name }
          image={ bebida.url_image }
          price={ bebida.price }
        />
      ))}
    </header>
  );
}

export default Products;
