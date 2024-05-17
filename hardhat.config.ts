import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@polygon/hardhat";
import "hardhat-typechain";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.25",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    cardona: {
      url: process.env.POLYGON_CARDONA_TESTNET_URL || "https://rpc.cardona.zkevm-rpc.com",
      accounts: [process.env.POLYGON_TESTNET_PRIVATE_KEY || ""],
      chainId: 2442,
    },
  },
};

export default config;
