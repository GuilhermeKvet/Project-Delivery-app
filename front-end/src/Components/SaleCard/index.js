import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function SaleCard(props) {
  const navigate = useNavigate();
  const { saleNumber, status, date, value, adress, deliveryNumber } = props;

  return (
    <button
      type="button"
      onClick={ () => navigate(`/seller/orders/${saleNumber}`) }
    >
      <p
        className="SaleId"
        data-testid={ `seller_orders__element-order-id--${saleNumber}` }
      >
        { saleNumber }
      </p>
      <p
        className="Status"
        data-testid={ `seller_orders__element-delivery-status-${saleNumber}` }
      >
        { status }
      </p>
      <p
        className="Date"
        data-testid={ `seller_orders__element-order-date-${saleNumber}` }
      >
        { date }
      </p>
      <p
        className="Value"
        data-testid={ `seller_orders__element-card-price-${saleNumber}` }
      >
        { value }
      </p>
      <p
        className="Adress"
        data-testid={ `seller_orders__element-card-address-${saleNumber}` }
      >
        { `${adress}${deliveryNumber}` }
      </p>
    </button>
  );
}

SaleCard.defaultProps = {
  saleNumber: PropTypes.undefined,
  status: PropTypes.undefined,
  date: PropTypes.undefined,
  value: PropTypes.undefined,
  adress: PropTypes.undefined,
  deliveryNumber: PropTypes.undefined,
};

SaleCard.propTypes = {
  saleNumber: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.number,
  adress: PropTypes.string,
  deliveryNumber: PropTypes.string,
};

export default SaleCard;
