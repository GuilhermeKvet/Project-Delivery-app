import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';

function Header(props) {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const { orderPageRoute, page } = props;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const productsPage = () => {
    navigate('/customer/products');
  };

  const orderPage = () => {
    navigate(`${orderPageRoute}`);
  };

  return (
    <header id="RegisterComponent">
      {page === 'customer' && <Button
        testId="customer_products__element-navbar-link-products"
        text="PRODUTOS"
        exec={ productsPage }
      />}
      {page === 'customer' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="MEUS PEDIDOS"
        exec={ orderPage }
      />}
      {page === 'seller' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="PEDIDOS"
        exec={ orderPage }
      />}
      {page === 'adm' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="GERENCIAR USUÁRIOS"
        exec={ orderPage }
      />}
      <Button
        testId="customer_products__element-navbar-user-full-name"
        text={ `${name}` }
        exec={ () => {} }
      />
      <Button
        testId="customer_products__element-navbar-link-logout"
        text="SAIR"
        exec={ logout }
      />
    </header>
  );
}

Header.propTypes = {
  orderPageRoute: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Header;
