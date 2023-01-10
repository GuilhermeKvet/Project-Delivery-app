import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat from '../../Utils/dateFormat';
import modelValue from '../../Utils/modelValue';
import '../../Styles/saleCard.css';

function SaleCard(props) {
  const navigate = useNavigate();
  const { page, orderId, status, date, totalPrice,
    adress, deliveryNumber, color } = props;

  return (
    <button
      className="order"
      type="button"
      onClick={ () => navigate(`/${page}/orders/${orderId}`) }
    >
      <div className="orderId">
        <p
          className="SaleId"
          data-testid={ `${page}_orders__element-order-id--${orderId}` }
        >
          { `Pedido ${orderId}` }
        </p>
      </div>
      <div className="allInfoOrder">
        <div className="infoOrder">
          <div
            className="status"
            style={ { backgroundColor: color } }
          >
            <p
              data-testid={ `${page}_orders__element-delivery-status-${orderId}` }
            >
              { status }
            </p>
          </div>
          <div className="complementInfo">
            <p
              data-testid={ `${page}_orders__element-order-date-${orderId}` }
            >
              { dateFormat(date) }
            </p>
            <p
              data-testid={ `${page}_orders__element-card-price-${orderId}` }
            >
              { `R$ ${modelValue(totalPrice)}` }
            </p>
          </div>
        </div>
        { page === 'seller'
        && (
          <div className="adress">
            <p
              data-testid={ `${page}_orders__element-card-address-${orderId}` }
            >
              { `${adress}, ${deliveryNumber}` }
            </p>
          </div>
        )}
      </div>
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
  color: PropTypes.undefined,
};

SaleCard.propTypes = {
  page: PropTypes.string,
  orderId: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  totalPrice: PropTypes.number,
  adress: PropTypes.string,
  deliveryNumber: PropTypes.string,
  color: PropTypes.string,
};

export default SaleCard;
