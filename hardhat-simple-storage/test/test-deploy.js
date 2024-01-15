const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

/*async function main() {
	const simpleStorageFactory = await ethers.getContractFactory(
		"SimpleStorage"
	);
	const simpleStorage = await simpleStorageFactory.deploy();
	await simpleStorage.waitForDeploymnet();
}*/

describe("SimpleStorageTest", () => {
	let simpleStorageFactory, simpleStorage;	
	beforeEach(async function () {
		// let simpleStorage;
		simpleStorageFactory = await ethers.getContractFactory(
			"SimpleStorage"
		);
		simpleStorage = await simpleStorageFactory.deploy();
	})
	
	it("Should start the favNumber as 0", async function() {
		const currentValue = await simpleStorage.displayNumber();
		const expectedValue = "0";
		// we can use either the assert method or the expect method from the chai library
		assert.equal(currentValue.toString(), expectedValue);
	})

	it("Should update the favNumber when called", async function () {
		const expectedValue = "6"
		const transactionReceipt = await simpleStorage.setNumber(5);
		await transactionReceipt.wait(1);
		const updatedValue = await simpleStorage.displayNumber();
		
		assert.equal(updatedValue.toString(), expectedValue);
	})
})

/*main()
	.then(() => {
		console.log("Hope this works");
		process.exit(0);
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});*/
