function OrdersInProcess(prop) {
  const { orderId, totalPrice, data, status } = prop;
  return (
    <div>
      <p data-testid="customer_orders__element-order-id-<id>">
        {`pedido ${orderId}`}
      </p>
      <br />

      <p data-testid="customer_orders__element-delivery-status-<id>">
        {status}
      </p>
      <br />

      <p data-testid="customer_orders__element-order-date-<id>">
        {`data ${data}`}
      </p>
      <br />

      <p data-testid="customer_orders__element-card-price-<id>">
        {`R$: ${totalPrice}`}
      </p>
      <br />
    </div>
  );
}

export default OrdersInProcess;
