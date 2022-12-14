import dateFormat from '../../Utils/dateFormat';
import modelValue from '../../Utils/modelValue';

function OrderDetailsInfo(prop) {
  const { orderId, totalPrice, data, status, sellerName, page } = prop;

  return (
    <div>
      <span
        data-testid={ `${page}__element-order-details-label-order-id` }
      >
        {`pedido 000${orderId}`}
      </span>
      &nbsp;
      <span data-testid={ `${page}__element-order-details-label-seller-name` }>
        {sellerName}
      </span>
      &nbsp;
      <span
        data-testid={ `${page}__element-order-details-label-delivery-status` }
      >
        {status}
      </span>
      &nbsp;
      <span data-testid={ `${page}__element-order-details-label-order-date` }>
        {`data ${dateFormat(data)}`}
      </span>
      &nbsp;
      <span data-testid={ `${page}__element-order-total-price` }>
        {`${modelValue(Number(totalPrice))}`}
      </span>
    </div>
  );
}

export default OrderDetailsInfo;
