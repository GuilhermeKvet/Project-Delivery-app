import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat from '../../Utils/dateFormat';
import modelValue from '../../Utils/modelValue';

function SaleCard(props) {
  const navigate = useNavigate();
  const { page, orderId, status, date, totalPrice, adress, deliveryNumber } = props;

  return (
    <button
      type="button"
      onClick={ () => navigate(`/${page}/orders/${orderId}`) }
    >
      <p
        className="SaleId"
        data-testid={ `${page}_orders__element-order-id--${orderId}` }
      >
        { orderId }
      </p>
      <p
        className="Status"
        data-testid={ `${page}_orders__element-delivery-status-${orderId}` }
      >
        { status }
      </p>
      <p
        className="Date"
        data-testid={ `${page}_orders__element-order-date-${orderId}` }
      >
        { dateFormat(date) }
      </p>
      <p
        className="Value"
        data-testid={ `${page}_orders__element-card-price-${orderId}` }
      >
        { modelValue(totalPrice) }
      </p>
      { page === 'seller'
      && (
        <p
          className="Adress"
          data-testid={ `${page}_orders__element-card-address-${orderId}` }
        >
          { `${adress}${deliveryNumber}` }
        </p>
      )}
    </button>
  );
}

SaleCard.defaultProps = {
  page: PropTypes.undefined,
  orderId: PropTypes.undefined,
  status: PropTypes.undefined,
  date: PropTypes.undefined,
  totalPrice: PropTypes.undefined,
  adress: PropTypes.undefined,
  deliveryNumber: PropTypes.undefined,
};

SaleCard.propTypes = {
  page: PropTypes.string,
  orderId: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
  adress: PropTypes.string,
  deliveryNumber: PropTypes.string,
};

export default SaleCard;
