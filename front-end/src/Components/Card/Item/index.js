import PropTypes from 'prop-types';
import Amount from '../Amount';

function ItemCard(props) {
  const { description, image, index, price } = props;
  return (
    <div>
      <div>
        <p data-testid={ `customer_products__element-card-price-${index}` }>
          {price}
        </p>
      </div>
      <div>
        <img
          data-testid={ `customer_products__img-card-bg-image-${index}` }
          src={ image }
          alt={ description }
          width="100px"
        />
      </div>
      <h3
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        {description}
      </h3>
      <Amount index={ index } />
    </div>
  );
}

ItemCard.defaultProps = {
  description: PropTypes.undefined,
  image: PropTypes.undefined,
  index: PropTypes.undefined,
  price: PropTypes.undefined,
};

ItemCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  price: PropTypes.string,
};

export default ItemCard;
