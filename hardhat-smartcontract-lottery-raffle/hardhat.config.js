require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-verify");
// require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers"); // is required for ethers.getContract to function
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.8",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
		},
		localhost: {
			chainId: 31337
		},
		sepolia: {
			url: SEPOLIA_RPC_URL,
			accounts: [SEPOLIA_PRIVATE_KEY],
			chainId: 11155111,
			blockConfirmations: 5,
		}
	},
	etherscan: {
		apiKey: {
			sepolia: ETHERSCAN_API_KEY,
		}
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		player: {
			default: 1,
		}
	},
	gasReporter: {
		enabled: false,
		currency: "USD",
		outputFile: "gas-report.txt",
		noColors: true,
		// coinmarketcap: COINMARKETCAP_API_KEY,
	},
	mocha: {
		timeout: 500000, // max 500 seconds, input in miliseconds
	},
};
