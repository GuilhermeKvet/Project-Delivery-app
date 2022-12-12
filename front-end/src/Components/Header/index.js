import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import AppContext from '../../Context/AppContext';

function Header() {
  const { name } = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    navigate('/login');
  };

  const productsPage = () => {
    navigate('/customer/products');
  };

  return (
    <header id="RegisterComponent">
      <Button
        testId="customer_products__element-navbar-link-products"
        text="PRODUTOS"
        exec={ productsPage }
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
    </header>
  );
}

export default Header;
