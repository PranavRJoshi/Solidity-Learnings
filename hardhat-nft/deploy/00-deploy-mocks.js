const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

const DECIMALS = "18";
const INITIAL_PRICE = ethers.parseEther("2000");
const BASE_FEE = ethers.parseEther("0.25"); // 0.25 is the premium. It costs 0.25 LINK per request
const GAS_PRICE_LINK = 1e9; // calculated value based on the price of gas. link per gas.

// Chainlink nodes pay the gas fees to give us randomness and do external execution
// So the price of requests change based on the price of gas

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	const args = [BASE_FEE, GAS_PRICE_LINK];
		
	if(developmentChains.includes(network.name)) {
		log("Local network detected! Deploying mocks...");
		await deploy("VRFCoordinatorV2Mock", {
			contract: "VRFCoordinatorV2Mock",
			from: deployer,
			log: true,
			args: args,
		})
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    })
		log("Mocks deployed");
		log("--------------------------------------------");
	}
}

module.exports.tags = ["all", "mocks", "main"];
