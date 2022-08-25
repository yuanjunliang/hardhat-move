import * as dotenv from "dotenv";
dotenv.config();
const config = {
  networks: {
    testnet: {
      url: "https://fullnode.devnet.aptoslabs.com/",
      chainId: 24,
      accounts: [],
      gas: 1000,
      gasPrice: 1,
    },
  },
};

export default config;
