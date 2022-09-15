import 'dotenv/config'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    goerli: { 
      url: ALCHEMY_API_KEY_URL!,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  }
};

export default config;
