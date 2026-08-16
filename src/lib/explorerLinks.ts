export const PI_NETWORK_TX =
  "fc7b880bf9b2514079fd9e2afd9b83a34e87039c647f55f8038202a96aaa7d6a";

export const OPENLEDGER_TX =
  "991d2816534c19d8a829c7330881176a05294d41017e1adefbce226fca025240";

export const PI_EXPLORER_TX_URL = `https://blockexplorer.minepi.com/testnet/transactions/${PI_NETWORK_TX}`;

export const OPENLEDGER_TX_URL = `https://www.openpyledger.space/tx/${OPENLEDGER_TX}`;

export const shortHash = (hash: string) => `${hash.slice(0, 8)}…${hash.slice(-6)}`;
