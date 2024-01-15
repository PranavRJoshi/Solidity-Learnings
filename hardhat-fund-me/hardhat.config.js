// require("@nomicfoundation/hardhat-toolbox");
// require("hardhat-deploy");
// require("dotenv").config();
// // require("@nomicfoundation/hardhat-verify");
// require('hardhat-gas-reporter');
// require('@nomicfoundation/hardhat-ethers');
// // require('hardhat-deploy-ethers');

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require('hardhat-gas-reporter');
require("hardhat-deploy");
require('@nomicfoundation/hardhat-ethers');
// require('hardhat-deploy-ethers');
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		compilers: [{version: "0.8.8"}, {version: "0.6.6"}],
	},
	defaultNetwork: "hardhat",
	networks: {
		sepolia: {
			url: SEPOLIA_RPC_URL,
			accounts: [SEPOLIA_PRIVATE_KEY],
			chainId: 11155111,
			blockConfirmations: 5,
		}		
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		user: {
			default: 1,
		}
	},
	gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    	},
};
