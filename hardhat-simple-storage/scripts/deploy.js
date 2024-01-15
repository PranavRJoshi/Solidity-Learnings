const { ethers, run, network } = require("hardhat");
require("dotenv").config();

async function main() {
	const SimpleStorageFactory = await ethers.getContractFactory(
		"SimpleStorage"
	);
	// const simpleStorage = await ethers.deployContract("SimpleStorage")
	console.log("Deploying Contract...");
	const simpleStorage = await SimpleStorageFactory.deploy();
	//await simpleStorage.deployed();
	await simpleStorage.waitForDeployment();
	await simpleStorage.deploymentTransaction().wait(5);
	contract_address = await simpleStorage.getAddress();
	console.log(`Deployed Contract to: ${contract_address}`);

	// console.log(network.config); // displays the network configuration of the contract, can be used to see if the network is on hardhat locally or on some testnets
	if(network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
		await verify(contract_address, []);
	}

	const currentValue = await simpleStorage.displayNumber();
	console.log(`Current value is: ${currentValue}`);

	const transactionReceipt = await simpleStorage.setNumber(5);
	await transactionReceipt.wait(1);

	const updatedValue = await simpleStorage.displayNumber();
	console.log(`Updated value is: ${updatedValue}`);
}

async function verify(contractAddress, args) {
	console.log("Verifying Contract...");
	try {	
		await run("verify:verify", {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch(e) {
		if(e.message.toLowerCase().includes("already verified")) {
			console.log("Alreay Verified");
		}else {
			console.log(e);
		}
	}	
}

main()
	.then(() => {
		console.log("Crazy that the code works.");
		process.exit(0);
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});


	// Some links to refer to when you are stuck
	// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5677
	// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5776
