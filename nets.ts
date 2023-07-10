
import { bins, net } from "capi/nets"

const bin = bins({
  polkadot: ["polkadot-fast", "v0.9.38"],
  polkadotParachain: ["polkadot-parachain-fast", "v0.9.380"],
})

export const polkadotDev = net.dev({
  bin: bin.polkadot,
  chain: "polkadot-dev",
})
export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
  version: "v0.9.40",
})
