import PropTypes from 'prop-types';

function SaleCard(props) {
  const { saleNumber, status, date, value, adress } = props;

  return (
    <div className="SaleCard">
      <div className="SaleNumber" data-testid="seller_orders__element-order-id-<id>">
        Pedido
        { saleNumber }
      </div>
      <div className="SaleInfo">
        <div
          className="Status"
          data-testid="seller_orders__element-delivery-status-<id>"
        >
          { status }
        </div>
        <div
          className="Date"
          data-testid="seller_orders__element-order-date-<id>"
        >
          { date }
        </div>
        <div
          className="Value"
          data-testid="seller_orders__element-card-price-<id>"
        >
          { value }
        </div>
        <div
          className="Adress"
          data-testid="seller_orders__element-card-address-<id>"
        >
          { adress }
        </div>
      </div>
    </div>
  );
}

SaleCard.propTypes = {
  saleNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  adress: PropTypes.string.isRequired,
};

export default SaleCard;
