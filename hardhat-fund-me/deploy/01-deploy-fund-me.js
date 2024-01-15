// imports

// we can directly send an anonymous function containing the required library to module.exports
// function deployFunc() {
// 	console.log("What a weird rabbit hole");
// }

const { networkConfig, developmentChains } = require("../helper-hardhat-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	const chainId = network.config.chainId;
	
	let ethUsdPriceFeedAddress;
	if (developmentChains.includes(network.name)) {
		const ethUsdAggregator = await deployments.get("MockV3Aggregator");
		ethUsdPriceFeedAddress = ethUsdAggregator.address;
	} else {
		ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
	}
	
	// if chainId is W use address X
	// if chainId is Y use address Z
	// const ethUsdPriceFeedAddress = networkconfig[chainId]["ethUsdPriceFeed"];
	
	// what happens when we want to change chains?
	// when going for localhost or hardhat network, we want to use a mock
	const args = [ethUsdPriceFeedAddress];	
	const fundMe = await deploy("FundMe", {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	})
	
	if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
		// verify
		await verify(fundMe.address, args)
	}
	
	console.log("-----------------------------------------");
}

module.exports.tags = ["all", "fundme"];
