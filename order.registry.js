export function loadOrders() {
  console.log("Loading orders...");

  return [
    { id: 1, type: "BUY", price: 100, amount: 5 },
    { id: 2, type: "SELL", price: 100, amount: 3 },
    { id: 3, type: "SELL", price: 105, amount: 4 }
  ];
}
