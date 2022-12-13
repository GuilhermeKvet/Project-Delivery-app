import PropTypes from 'prop-types';

function SaleCard(props) {
  const { saleNumber, status, date, value, adress } = props;

  return (
    <div className="SaleCard">
      <div className="SaleNumber">
        Pedido
        { saleNumber }
      </div>
      <div className="SaleInfo">
        <div className="Status">{ status }</div>
        <div className="Date">{ date }</div>
        <div className="Value">{ value }</div>
        <div className="Adress">{ adress }</div>
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
