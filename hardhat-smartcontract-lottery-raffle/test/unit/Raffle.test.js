const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains, networkConfig } = require("../../helper-hardhat-config.js");

!developmentChains.includes(network.name) ? describe.skip : 
describe("Raffle Unit Tests", () => {
	const chainId = network.config.chainId;
	let raffle;
	let vrfCoordinatorV2Mock;
	let raffleEntranceFee;
	let interval;
	let deployer;
	let raffleAddress;

	// const sendValue = ethers.parseEther("1");

	beforeEach(async () => {
		deployer = (await getNamedAccounts()).deployer;
		// we will be using the ethers.getSigners() function to get the accounts
		const deploymentsResponse = await deployments.fixture(["all"]);
		raffle = await ethers.getContract("Raffle", deployer);
		vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer);
		raffleEntranceFee = await raffle.getEntranceFee();
		interval = await raffle.getInterval();
		// raffleAddress = deploymentsResponse["Raffle"].address;
		// raffle = await ethers.getContractAt("Raffle", raffleAddress);
		// console.log(raffle);
		// console.log(deployer);
		// console.log(raffleAddress);
	})

	describe("constructor", () => {
		it("initlializes the raffle correctly", async () => {
			// ideally, we make our tests have just 1 assert per "it" 
			// console.log(raffle);
			// console.log(deployer);
			// console.log(raffleAddress);
			// const response = await raffle.getEntranceFee();
			// assert.equal(response, 10);

			const raffleState = await raffle.getRaffleState();
		 	const interval = await raffle.getInterval()
			// console.log(raffleState); // returns 0n if open 
			// console.log(interval); // returns 30n since we declared it 30
			assert.equal(raffleState.toString(), '0');
			assert.equal(interval.toString(), networkConfig[chainId]["interval"]);
		})
	})

	describe("enterLottery", () => {
		it("reverts when you don't pay enough", async () => {
			await expect(raffle.enterLottery()).to.be.revertedWithCustomError(
				raffle,
				"Raffle__NotEnoughETHEntered"
			);
		})

		it("records player when they enter", async () => {
			// console.log(raffleEntranceFee);
			await raffle.enterLottery({ value: raffleEntranceFee });
			const playerFromContract = await raffle.getPlayer(0);
			assert.equal(playerFromContract, deployer);
		})

		it("emits an event on enter", async () => {
			await expect(raffle.enterLottery({ value: raffleEntranceFee })).to.emit(
				raffle,
				"RaffleEnter"
			);
		})

		it("doesn't allow entrance when raffle is calculating", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			// console.log(await raffle.getEntranceFee());
			// console.log(raffleEntranceFee);
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1]);
			await network.provider.send("evm_mine", []);
			// console.log(await raffle.getLatestTimeStamp());
			// await raffle.performUpkeep(new Uint8Array);
			// await raffle.performUpkeep("0x");
			// const { upkeepNeeded } =  await raffle.checkUpkeep.staticCall(new Uint8Array())
			// console.log(upkeepNeeded);
			// console.log(await raffle.getRaffleState());
			await raffle.performUpkeep(new Uint8Array());
			// can also use the following syntax
			// await network.provider.request({ method: "method-name", params: [] });
			// We now pretend to be a chainlink keeper to call performUpkeep()
			// console.log(await raffle.getRaffleState());
			await expect(raffle.enterLottery({ value: raffleEntranceFee })).to.be.revertedWithCustomError(
				raffle,
				"Raffle__NotOpen"
			)
		})
	})

	describe("checkUpkeep", () => {
		it("returns false if people haven't sent any ETH", async () => {
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1]);
			await network.provider.send("evm_mine", []);
			const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
			assert(!upkeepNeeded);
		})

		it("returns false if raffle isn't open", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1]);
			await network.provider.send("evm_mine", []);
			// const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
			await raffle.performUpkeep("0x");
			const raffleState = await raffle.getRaffleState();
			const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
		 	assert.equal(raffleState.toString(), "1");
			assert.equal(upkeepNeeded, false); 
		})

		it("returns false if enough time hasn't passed", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) - 2]) // didn't work when i tried subtracting time by only one, but worked for two
			await network.provider.request({ method: "evm_mine", params: [] });
			const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
			assert(!upkeepNeeded);
		})

		it("returns true if enough time has passed, has players, eth and is open", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.request({ method: "evm_increaseTime", params: [Number(interval.toString()) + 1] });
			await network.provider.request({ method: "evm_mine", params: [] });
			const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
			assert(upkeepNeeded);
		})
	})

	describe("performUpkeep", () => {
		it("it can only run if checkUpkeep is true", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1]);
			await network.provider.send("evm_mine", []);
			const { upkeepNeeded } = await raffle.checkUpkeep.staticCall(new Uint8Array());
			const tx = await raffle.performUpkeep(new Uint8Array());
			// assert.equal(upkeepNeeded, true);
			assert(tx);
		})

		it("reverts when checkUpkeep is false", async () => {
			await expect(raffle.performUpkeep(new Uint8Array())).to.be.revertedWithCustomError(
				raffle,
				"Raffle__UpkeepNotNeeded"
			)
		})

		it("updates the raffle state, emits the event, and calls the vrfCoordinator", async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1]);
			await network.provider.send("evm_mine", []);
			const txResponse = await raffle.performUpkeep(new Uint8Array());
			const txReceipt = await txResponse.wait(1);
			// console.log(txReceipt);
		
			// const requestId = txReceipt.events[1].args.requestId; // the index of the event we are requesting is 1 because the 0th event is already emitted by the `requestRandomWords` function which is defined inside the VRFCoordinatorV2 (mock and the original both), and afterwards only we emit the event defined by us (in one of the way, the event we described is redundant as it containsthe similar info emitted by the `requestRandomWords`)
			
			// const requestId = vrfCoordinatorV2Mock.interface.parseLog( txReceipt.events[0] ).args.requestId;
			// const filter = raffle.filters.RequestedRaffleWinner();
			// const eventLogs = await raffle.queryFilter(filter);
			// console.log(txReceipt.logs[0]); // does not have the property `args`
			// console.log("----------- Getting Another Log -------------------");
			// console.log(txReceipt.logs[1]); // has the property `args`
			// console.log(eventLogs); // returns a list of events that are emitted
			/* eventLogs.forEach((log) => {
				console.log(log);
				console.log("------------------------------------");
				const eventData = log.args;
				console.log(`Event Data: ${eventData}`);
			}) */	
			const requestId = txReceipt.logs[1].args.requestId;
			const raffleState = await raffle.getRaffleState();
			// console.log(txReceipt.logs);
			assert(Number(requestId.toString()) > 0);
			assert(raffleState.toString() == "1");
		})
	})

	describe("fulfillRandomWords", () => {
		beforeEach(async () => {
			await raffle.enterLottery({ value: raffleEntranceFee });
			await network.provider.send("evm_increaseTime", [Number(interval.toString()) + 1 ]);
			await network.provider.send("evm_mine", []);
		})
		
		it("can only be called after performUpkeep", async () => {
			await expect(vrfCoordinatorV2Mock.fulfillRandomWords(0, raffle.target)).to.be.revertedWith("nonexistent request");
			await expect(vrfCoordinatorV2Mock.fulfillRandomWords(1, raffle.target)).to.be.revertedWith("nonexistent request");
		})

		// This test is by far the biggest one and needs a lot more focus
		it("picks a winner, resets the lottery, and sends money", async () => {
			const additionalEntrants = 3;
			const startingAccountIndex = 1;
			const accounts = await ethers.getSigners();

			for (let i = startingAccountIndex; i < startingAccountIndex + additionalEntrants; i++) {
				const accountConnectedRaffle = raffle.connect(accounts[i]);
				// console.log(accountConnectedRaffle);
				// console.log("----------------------- NEW ACCOUNT ---------------------------");
				await accountConnectedRaffle.enterLottery({ value: raffleEntranceFee });
			}

			// performUpkeep (mock being chainlink keepers)
			// fulfillRandomWords (mock being the chainlink VRF)
			// we will have to wait for the fulfillRandomWords to be called

			const startingTimeStamp = await raffle.getLatestTimeStamp();

			await new Promise(async (resolve, reject) => {
				raffle.once("WinnerPicked", async () => {
					console.log("Found the event!");
					try {
						const recentWinner = await raffle.getRecentWinner();
						console.log(recentWinner);
						console.log(accounts[0].address);
						console.log(accounts[1].address);
						console.log(accounts[2].address);
						// const recentWinner = await raffle.getRecentWinner();
						const raffleState = await raffle.getRaffleState();
						const endingTimeStamp = await raffle.getLatestTimeStamp();
						const numPlayers = await raffle.getNumberOfPlayers();
						// console.log(numPlayers);
						// console.log(raffleState);
						assert.equal(numPlayers.toString(), "0");
						assert.equal(raffleState.toString(), "0");
						assert(endingTimeStamp > startingTimeStamp);
					} catch (e) {
						reject(e);
					}
					resolve();		
					// setting up the listener
					// we can set the mocha timeout in `hardhat-config.js`
					// below, we will fire the event, and the listener will pick it up, and resolve
				});
				// const tx = await raffle.enterLottery({ value: raffleEntranceFee });
				// await tx.wait(1);
				const txRespnse = await raffle.performUpkeep(new Uint8Array());
				const txReceipt = await txRespnse.wait(1);

				// console.log(txReceipt.logs)
				// console.log("----------------------- NEW LOGS ---------------------------");

				vrfCoordinatorV2Mock.fulfillRandomWords(
					txReceipt.logs[1].args.requestId,
					raffle.target
				);
			})
		})
	})
})
