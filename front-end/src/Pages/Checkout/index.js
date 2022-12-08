import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import OrderSale from '../../Components/OrderSale';
import TableHeader from '../../Components/TableHeader';
import Address from '../../Components/address details';
import AppContext from '../../Context/AppContext';
// const navigate = useNavigate();

function Pedidos() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(cart);
  }, [setProducts]);

  return (
    <div>
      <Header />
      <div>
        <h2>Finalizar Pedido</h2>
        <table>
          <TableHeader />
          <tbody>
            {products.map((sale, index) => (
              <OrderSale
                key={ `${sale.name}${index}` }
                index={ index }
                name={ sale.name }
                price={ sale.price }
                quantity={ sale.quantity }
              />
            ))}
          </tbody>
        </table>
      </div>
      <Address />
    </div>
  );
}

export default Pedidos;
