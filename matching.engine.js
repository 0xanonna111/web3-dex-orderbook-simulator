export function matchOrders(orders) {
  console.log("Matching orders...");

  const buys = orders.filter(o => o.type === "BUY");
  const sells = orders.filter(o => o.type === "SELL");

  const trades = [];

  buys.forEach(buy => {
    sells.forEach(sell => {
      if (buy.price >= sell.price && buy.amount > 0 && sell.amount > 0) {
        const traded = Math.min(buy.amount, sell.amount);

        buy.amount -= traded;
        sell.amount -= traded;

        trades.push({
          buyId: buy.id,
          sellId: sell.id,
          price: sell.price,
          amount: traded
        });
      }
    });
  });

  return trades;
}
