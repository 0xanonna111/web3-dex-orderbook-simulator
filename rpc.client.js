import { JsonRpcProvider } from "ethers";
import { NETWORKS, NETWORK } from "./network.config.js";

export function connectRPC() {
  const rpcUrl = NETWORKS[NETWORK];
  const provider = new JsonRpcProvider(rpcUrl);

  console.log("RPC Connected:", rpcUrl);
  return provider;
}
