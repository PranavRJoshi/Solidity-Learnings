const { networkConfig, developmentChains } = require("../helper-hardhat-config");
const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

const VRF_SUB_FUND_AMOUNT = ethers.parseEther("2");

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	const chainId = network.config.chainId;
	
	let vrfCoordinatorV2Address;
	let subscriptionId;
	let vrfCoordinatorV2Mock;

	if (developmentChains.includes(network.name)) {
		// to make the ethers.getContract function work, we need to install the following package
		// `yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers`
		vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock");
		// console.log(vrfCoordinatorV2Mock);
		vrfCoordinatorV2Address = vrfCoordinatorV2Mock.target;
		// console.log(vrfCoordinatorV2Address);
		// vrfCoordinatorV2Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
		const transactionResponse = await vrfCoordinatorV2Mock.createSubscription();
		const transactionReceipt = await transactionResponse.wait(1);
		// console.log(transactionReceipt);
		// creating a subscriptionId for the contract to produce random words
		// subscriptionId = transactionReceipt.events[0].args.subId; // check https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5779
		subscriptionId = 1;
		// funding the subscription
		// usually costs LINK on real network
		await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, VRF_SUB_FUND_AMOUNT);
	} else {
		vrfCoordinatorV2Address = networkConfig[chainId]["vrfCoordinatorV2"];
		subscriptionId = networkConfig[chainId]["subscriptionId"];
		
	}

	const entranceFee = networkConfig[chainId]["entranceFee"];
	const gasLane = networkConfig[chainId]["gasLane"];
	// const subscriptionId = 3848;
	const callbackGasLimit = networkConfig[chainId]["callbackGasLimit"];
	const interval = networkConfig[chainId]["interval"];
	
	const args = [vrfCoordinatorV2Address, entranceFee, gasLane, subscriptionId, callbackGasLimit, interval];
	const raffle = await deploy("Raffle", {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	})
	
	// In latest version of Chainlink/contracts 0.6.1 or after 0.4.1, we need to add consumer explicitly after deployment of contract	
	if (developmentChains.includes(network.name)) {
		await vrfCoordinatorV2Mock.addConsumer(subscriptionId, raffle.address);
		log("Consumer is added!")
	}

	if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
		await verify(raffle.address, args);
	}

	console.log("----------------------------------------");	
}

module.exports.tags = ["all", "raffle"];
