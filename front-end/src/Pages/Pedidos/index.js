import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import Button from '../../Components/Forms/Button';

function Pedidos() {
  const { name } = useContext(AppContext);
  return (
    <div>
      <header>

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
          text={ name }
        />

        <Button
          testId="customer_products__element-navbar-link-logout"
          text="SAIR"
        />
      </header>
      <div />
    </div>
  );
}

export default Pedidos;
