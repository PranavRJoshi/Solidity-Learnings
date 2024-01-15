const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains } = require("../../helper-hardhat-config.js")

!developmentChains.includes(network.name) ? describe.skip : 
describe("FundMe", () => {
	let fundMe;
	let deployer;
	let mockV3Aggregator;
	let fundMeAddress;
	let mockV3AggregatorAddress;
	// const provider = ethers.getDefaultProvider();
	const sendValue = ethers.parseEther("1") // sets the value of sendValue to 1 followed by 18 zeros (basically converts the number inside the brackets to wei value) 
	beforeEach(async () => {
		// deploy our FundMe contract
		// using hardhat-deploy
		// we can run the required files from `deploy` folder using
		// the fixture method, it  will take in an arg
		// which is a list of tags to determine which files
		// to use for deployment
		// const { deployer } = await getNamedAccounts(); // (using another one)
		// another way to define a deployer (for a testnet)
		// const accounts  = ethers.getSigners();
		// const accountZero = accounts[0];
		deployer = (await getNamedAccounts()).deployer;
		// console.log(deployer) // returns an address, presumably of the "deployer"
		const deploymentsResponse = await deployments.fixture(["all"]); // used to deploy all the contracts 
		// console.log(deploymentsResponse) // it shows all the information about the contracts, like it's address, abi, bytecode, etc
		fundMeAddress = deploymentsResponse["FundMe"].address; // returns the address for the contract FundMe
		mockV3AggregatorAddress = deploymentsResponse["MockV3Aggregator"].address; // returns the address for the contract MockV3Aggregator
		// console.log(await provider.getBalance(fundMeAddress));
		// console.log(fundMeAddress); // returns the address of the contract FundMe
		// console.log(mockV3AggregatorAddress); // returns the address of the contract MockV3Aggregator
		fundMe = await ethers.getContractAt("FundMe", fundMeAddress);
		mockV3Aggregator = await ethers.getContractAt(
			"MockV3Aggregator",
			mockV3AggregatorAddress);
		// console.log(typeof(fundMe)); // returns a object type
		// console.log(fundMe); // returns a contract of FundMe
		// console.log(mockV3Aggregator); // returns a contract of MockV3Aggregator
	}) 

	describe("constructor", async () => {
		it("sets the aggregator address correctly", async () => {
			// const deploymentsResponse = await deployments.fixture(["all"]);
			// const mockV3AggregatorAddress = deploymentsResponse["MockV3Aggregator"].address;
			// we can skip the code written above by using the target property from the mockV3Aggregator object 
			// the target property returns the address of the mockV3Aggregator 
			const response = await fundMe.getPriceFeed();
			// console.log(typeof(response));
			// console.log(typeof(mockV3Aggregator));
			assert.equal(response, mockV3Aggregator.target);
			// assert.equal(response, mockV3AggregatorAddress);
		})
	})

	describe("fundme", async () => {
		it("Fails if you don't send enough ETH", async () => {
			await expect(fundMe.fund()).to.be.revertedWith("Didn't send enough!");
		})
		
		it("updated the amount funded to data structure", async () => {
			// console.log(sendValue.toString());
			// console.log(deployer);
			await fundMe.fund({ value: sendValue });
			const response = await fundMe.getFundersAddressToValue(deployer);
			assert.equal(response.toString(), sendValue.toString());
		})
		it("Adds funder to the array of s_Funders", async () => {
			await fundMe.fund({ value: sendValue });
			const funder = await fundMe.getFunders(0);
			// console.log(funder);
			assert.equal(funder, deployer);
		})
	})

	describe("withdraw", async () => {
		beforeEach(async () => {
			await fundMe.fund({ value: sendValue });
			// const response1 = await fundMe.Funders(0);
			// funders2 = await fundMe.fund({ value: sendValue });
			// const response2 = await fundMe.Funders(1);
		})

		it("withdraw ETH from a single founder", async () => {
			// we will perform the arrange, act, assert test
			// arrange
			const startingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const startingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// in the video, Patrick uses `fundMe.provider.getBalance(fundMe.address)` and
			// `fundMe.provider.getBalance(fundMe.address)` but we can't use it now
			// as it seems that we need to specify the ethers object explicitly rather than
			// using the methods on the contract `fundMe`
			
			// act
			const transactionResponse = await fundMe.withdraw();
			const transactionReceipt = await transactionResponse.wait(1);
			const { gasUsed, gasPrice } = transactionReceipt;
			// console.log(typeof(gasUsed));
			// console.log(typeof(gasPrice)); // they are of BigInt type
			const totalGasCost = gasUsed * gasPrice;
			// const transactionReceipt = await transactionResponse.wait(1);

			const endingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const endingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// getting the value of gasCost
			
			/*console.log(startingFundMeBalance.toString());
			console.log(endingFundMeBalance.toString());
			console.log(startingDeployerBalance.toString());
			console.log(endingDeployerBalance.toString());
			console.log(totalGasCost.toString());*/

			// assert
			assert.equal(endingFundMeBalance, 0);
			assert.equal(
				(startingFundMeBalance+startingDeployerBalance).toString(),
				(endingDeployerBalance+totalGasCost).toString()
			);
			// we used the add function because the types of those variable
			// is of bigNumber and there exist an add function to add them
		})
		
		it("allows us to withdraw with multiple funders", async () => {
			// arrange
			const accounts = await ethers.getSigners();
			// console.log(accounts); // returns a list of accounts which can be used for transaction 
			
			for (let i=1; i<6; i++) {
				const fundMeConnectedContract = await fundMe.connect(accounts[i]); 
				// Returns a new instance of the Contract, but connected to providerOrSigner.
				// console.log(fundMeConnectedContract);
				await fundMeConnectedContract.fund({ value: sendValue });
			}
			const startingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const startingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// console.log(startingFundMeBalance.toString());
			// console.log(startingDeployerBalance.toString());

			// act
			const transactionResponse = await fundMe.withdraw();
			const transactionReceipt = await transactionResponse.wait(1);
			const { gasUsed, gasPrice } = transactionReceipt;
			const totalGasCost = gasPrice * gasUsed;

			// console.log(totalGasCost.toString());

			// assert
			const endingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const endingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// console.log(endingFundMeBalance.toString());
			// console.log(endingDeployerBalance.toString());
			
			// assert
			assert.equal(endingFundMeBalance, 0);
			assert.equal(
				(startingFundMeBalance+startingDeployerBalance).toString(),
				(endingDeployerBalance+totalGasCost).toString()
			);

			// make sure that the Funders are reset properly
			// await expect(fundMe.Funders(0)).to.be.reverted;
			// uncommenting the code above gave an error like
			// TypeError: Expected a valid transaction hash, but got '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

			for (i=1; i<6; i++) {
				assert.equal(await fundMe.getFundersAddressToValue(accounts[i].address), 0);
			}
			
		})
		
		it("only allows owner to withdraw", async () => {
			const accounts = await ethers.getSigners();
			const attacker = accounts[1];
			// console.log(accounts);
			const attackerConnectedContract = await fundMe.connect(attacker);
			// await attackerConnectedContract.withdraw()
			await expect(attackerConnectedContract.withdraw()).to.be.revertedWithCustomError(fundMe, "FundMe__notOwner");
			// await expect(attackerConnectedContract.withdraw()).to.be.revertedWith("FundMe__notOwner"); // old method
		})

		it("cheaperWithdraw with multiple funders", async () => {
			// arrange
			const accounts = await ethers.getSigners();
			// console.log(accounts); // returns a list of accounts which can be used for transaction 
			
			for (let i=1; i<6; i++) {
				const fundMeConnectedContract = await fundMe.connect(accounts[i]); 
				// Returns a new instance of the Contract, but connected to providerOrSigner.
				// console.log(fundMeConnectedContract);
				await fundMeConnectedContract.fund({ value: sendValue });
			}
			const startingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const startingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// console.log(startingFundMeBalance.toString());
			// console.log(startingDeployerBalance.toString());

			// act
			const transactionResponse = await fundMe.cheaperWithdraw();
			const transactionReceipt = await transactionResponse.wait(1);
			const { gasUsed, gasPrice } = transactionReceipt;
			const totalGasCost = gasPrice * gasUsed;

			// console.log(totalGasCost.toString());

			// assert
			const endingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const endingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// console.log(endingFundMeBalance.toString());
			// console.log(endingDeployerBalance.toString());
			
			// assert
			assert.equal(endingFundMeBalance, 0);
			assert.equal(
				(startingFundMeBalance+startingDeployerBalance).toString(),
				(endingDeployerBalance+totalGasCost).toString()
			);

			// make sure that the s_Funders are reset properly
			// await expect(fundMe.s_Funders(0)).to.be.reverted;
			// uncommenting the code above gave an error like
			// TypeError: Expected a valid transaction hash, but got '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

			for (i=1; i<6; i++) {
				assert.equal(await fundMe.getFundersAddressToValue(accounts[i].address), 0);
			}
		})

		it("cheaperWithdraw from a single funder", async () => {
			// we will perform the arrange, act, assert test
			// arrange
			const startingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const startingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// in the video, Patrick uses `fundMe.provider.getBalance(fundMe.address)` and
			// `fundMe.provider.getBalance(fundMe.address)` but we can't use it now
			// as it seems that we need to specify the ethers object explicitly rather than
			// using the methods on the contract `fundMe`
			
			// act
			const transactionResponse = await fundMe.cheaperWithdraw();
			const transactionReceipt = await transactionResponse.wait(1);
			const { gasUsed, gasPrice } = transactionReceipt;
			// console.log(typeof(gasUsed));
			// console.log(typeof(gasPrice)); // they are of BigInt type
			const totalGasCost = gasUsed * gasPrice;
			// const transactionReceipt = await transactionResponse.wait(1);

			const endingFundMeBalance = await ethers.provider.getBalance(
				fundMeAddress
			);
			const endingDeployerBalance = await ethers.provider.getBalance(
				deployer
			);

			// getting the value of gasCost
			
			/*console.log(startingFundMeBalance.toString());
			console.log(endingFundMeBalance.toString());
			console.log(startingDeployerBalance.toString());
			console.log(endingDeployerBalance.toString());
			console.log(totalGasCost.toString());*/

			// assert
			assert.equal(endingFundMeBalance, 0);
			assert.equal(
				(startingFundMeBalance+startingDeployerBalance).toString(),
				(endingDeployerBalance+totalGasCost).toString()
			);
			// we used the add function because the types of those variable
			// is of bigNumber and there exist an add function to add them
		})
	})
})
