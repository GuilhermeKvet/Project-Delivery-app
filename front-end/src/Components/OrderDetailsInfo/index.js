function OrderDetailsInfo(prop) {
  const { orderId, totalPrice, data, status, sellerName } = prop;
  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {`pedido ${orderId}`}
      </span>
      &nbsp;
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        {`P. Vend: ${sellerName}`}
      </span>
      &nbsp;
      <span
        data-testid="customer_order_details__element-order-details
      -label-delivery-status"
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
    </div>
  );
}

export default OrderDetailsInfo;
