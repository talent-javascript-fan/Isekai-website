import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 56: "https://bsc-dataseed.binance.org/" },
  qrcode: true,
});
