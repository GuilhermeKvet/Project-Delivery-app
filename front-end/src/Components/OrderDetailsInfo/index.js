function OrderDetailsInfo(prop) {
  const { orderId, totalPrice, data, status, sellerName } = prop;
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`pedido 000${orderId}`}
      </span>
      &nbsp;
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {`${sellerName}`}
      </span>
      &nbsp;
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </span>
      &nbsp;
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {`data ${data}`}
      </span>
      &nbsp;
      <span data-testid="customer_order_details__element-order-total-price">
        {`R$: ${totalPrice}`}
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status !== 'entregue' }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetailsInfo;
