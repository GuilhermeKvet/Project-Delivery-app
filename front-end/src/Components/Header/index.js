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
    <header className="header" id="RegisterComponent">
      {page === 'customer' && <Button
        testId="customer_products__element-navbar-link-products"
        text="PRODUTOS"
        exec={ productsPage }
        className="headerButton"
      />}
      {page === 'customer' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="MEUS PEDIDOS"
        exec={ orderPage }
        className="headerButton"
      />}
      {page === 'seller' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="PEDIDOS"
        exec={ orderPage }
        className="headerButton"
      />}
      {page === 'adm' && <Button
        testId="customer_products__element-navbar-link-orders"
        text="GERENCIAR USUÁRIOS"
        exec={ orderPage }
        className="headerButton"
      />}
      <Button
        testId="customer_products__element-navbar-user-full-name"
        text={ `${name}` }
        exec={ () => {} }
        className="headerButton"
      />
      <Button
        testId="customer_products__element-navbar-link-logout"
        text="SAIR"
        exec={ logout }
        className="headerButton"
      />
    </header>
  );
}

Header.propTypes = {
  orderPageRoute: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Header;
