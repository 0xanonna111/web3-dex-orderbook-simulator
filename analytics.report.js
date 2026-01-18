export function generateReport(trades, depth) {
  console.log("----- Trade Report -----");

  if (trades.length === 0) {
    console.log("No trades executed.");
  } else {
    trades.forEach(t => {
      console.log("Trade:", t.buyId, "x", t.sellId, "Price:", t.price, "Amount:", t.amount);
    });
  }

  console.log("----- Market Depth -----");
  console.log("Buy Depth:", depth.buy);
  console.log("Sell Depth:", depth.sell);
  console.log("-------------------------");
}
