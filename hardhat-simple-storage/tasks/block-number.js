const { task } = require("hardhat/config");

task("block-number", "Prints the current block number")
	.setAction(
		async(taskArgs, hre) => {
			const blockNumber = await hre.ethers.provider.getBlockNumber();
			console.log(`Current block number: ${blockNumber}`);
	})



// Learn more from the website
// https://hardhat.org/hardhat-runner/docs/advanced/create-task

module.exports = {}
