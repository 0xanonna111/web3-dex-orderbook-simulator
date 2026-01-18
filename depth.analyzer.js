export function analyzeDepth(orders) {
  const depth = {
    buy: 0,
    sell: 0
  };

  orders.forEach(order => {
    if (order.type === "BUY") depth.buy += order.amount;
    if (order.type === "SELL") depth.sell += order.amount;
  });

  return depth;
}
