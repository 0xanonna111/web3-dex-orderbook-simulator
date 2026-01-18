import { connectRPC } from "./rpc.client.js";
import { loadOrders } from "./order.registry.js";
import { matchOrders } from "./matching.engine.js";
import { analyzeDepth } from "./depth.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 DEX Orderbook Simulator");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const orders = loadOrders();

const trades = matchOrders(orders);
const depth = analyzeDepth(orders);

generateReport(trades, depth);
