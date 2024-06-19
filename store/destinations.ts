export type TransactionDestination = {
  key?: string;
  label: string;
  iconUrl: string;
};

export const useDestinationsStore = defineStore("destinations", () => {
  const { l1Network } = storeToRefs(useNetworkStore());
  const { eraNetwork } = storeToRefs(useZkSyncProviderStore());
  const { selectedNetwork } = storeToRefs(useNetworkStore());

  const destinations = computed(() => ({
    era: {
      key: "era",
      label: eraNetwork.value.name,
      iconUrl: selectedNetwork.value.logoUrl || "",
    },
    ethereum: {
      key: "ethereum",
      label: l1Network.value ? l1Network.value.name : "",
      // iconUrl: "/img/ethereum.svg",
      iconUrl: "/img/supersonic_ic.svg",
    },
    layerswap: {
      key: "layerswap",
      label: "Layerswap",
      iconUrl: "/img/layerswap.svg",
    },
    ramp: {
      key: "ramp",
      label: "Ramp",
      iconUrl: "/img/ramp.svg",
    },
    moonpay: {
      key: "moonpay",
      label: "Moonpay",
      iconUrl: "/img/moonpay.svg",
    },
    binance: {
      key: "binance",
      label: "Binance",
      iconUrl: "/img/binance.svg",
    },
    zigzag: {
      key: "zigzag",
      label: "ZigZag",
      iconUrl: "/img/zigzag.svg",
    },
    rhino: {
      key: "rhino",
      label: "rhino.fi",
      iconUrl: "/img/rhino.svg",
    },
  }));

  return {
    destinations,
  };
});
