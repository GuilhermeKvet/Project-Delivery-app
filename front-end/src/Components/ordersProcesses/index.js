function OrdersInProcess(prop) {
  const { orderId, totalPrice, data, status } = prop;
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${orderId}` }>
        {`pedido ${orderId}`}
      </p>
      <p data-testid={ `customer_orders__element-delivery-status-${orderId}` }>
        {status}
      </p>
      <p data-testid={ `customer_orders__element-order-date-${orderId}` }>
        {`data ${data}`}
      </p>
      <p data-testid={ `customer_orders__element-card-price-${orderId}` }>
        {`R$: ${totalPrice}`}
      </p>
    </div>
  );
}

export default OrdersInProcess;
