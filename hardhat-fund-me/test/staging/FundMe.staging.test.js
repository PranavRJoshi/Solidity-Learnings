const { getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config.js");
const { assert } = require("chai");

developmentChains.includes(network.name) ? describe.skip : 
	describe("Fund Me test", () => {
		let fundMe;
		let deployer;
		const sendValue = ethers.parseEther("0.5");		
		let fundMeAddress;
	
		beforeEach(async () => {
			fundMeAddress = (await deployments.get("FundMe")).address;	
			console.log(fundMeAddress);
			deployer = (await getNamedAccounts()).deployer;
			console.log(deployer);
			fundMe = await ethers.getContractAt("FundMe", fundMeAddress);
			console.log(fundMe);
			// console.log(await fundMe.getPriceFeed());	
		})

		it("allows people to fund and withdraw", async () => {
			const fundTransfer = await fundMe.fund({ value: sendValue });
			await fundTransfer.wait(1);
			const fundWithdraw = await fundMe.withdraw();
			await fundWithdraw.wait(1);
			const endingBalance = await ethers.provider.getBalance(fundMeAddress);
			assert.equal(endingBalance.toString(), "0");
		})
	})

