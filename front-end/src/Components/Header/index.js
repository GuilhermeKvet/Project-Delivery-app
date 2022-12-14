import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import AppContext from '../../Context/AppContext';

function Header(props) {
  const { name } = useContext(AppContext);
  const { orderPageRoute, text } = props;

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
      { text === 'PRODUTOS' ? <Button
        testId="customer_products__element-navbar-link-products"
        text={ text }
        exec={ productsPage }
      /> : null }

      { text === 'PEDIDOS' ? <Button
        testId="customer_products__element-navbar-link-orders"
        text={ text }
        exec={ orderPage }
      /> : null }

      { text === 'GERENCIAR USUÁRIOS' ? <Button
        testId="customer_products__element-navbar-link-orders"
        text={ text }
        exec={ () => console.log('catapoing') }
      /> : null }
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

Header.propTypes = {
  orderPageRoute: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
