export const HISTORY = [];

export function logOrder(order) {
  HISTORY.push({ time: Date.now(), order });
}
