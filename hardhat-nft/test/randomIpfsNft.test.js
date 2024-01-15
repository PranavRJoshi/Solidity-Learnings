const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains, networkConfig } = require("../helper-hardhat-config.js");

!developmentChains.includes(network.name) ? 
describe.skip :
describe("RandomIpfsNft Unit Tests", () => {
  const chainId = network.config.chainId;
  let vrfCoordinatorV2Mock;
  let randomIpfsNft;
  let mintFee;
  let deployer;
  let randomIpfsNftAddress;

  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    const deploymentsResponse = await deployments.fixture(["main"]);
    randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer);
    vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer);
    mintFee = await randomIpfsNft.getMintFee();
  })

  describe("constructor", () => {
    it("initializes the RandomIpfsNft correctly", async () => {
      const name = await randomIpfsNft.name();
      const symbol = await randomIpfsNft.symbol();
      const tokenCounter = await randomIpfsNft.getTokenCounter();
      assert.equal("Random IPFS NFT", name);
      assert.equal("RIN", symbol);
      assert.equal(0, tokenCounter);
    })
  })

  describe("requestNft", () => {
    it("reverts when you don't pay enough", async () => {
      await expect(randomIpfsNft.requestNft()).to.be.revertedWithCustomError(
        randomIpfsNft,
        "RandomIpfsNft__NeedMoreETHSent"
      );
    })  
    it("reverts if payment amount is less than the mint fee", async () => {
      const fee = await randomIpfsNft.getMintFee(); // returns the mint fee, i.e. 0.01 ethers
      const lessThanMinFee = fee - ethers.parseEther("0.001");
      // The `sub` method shown in the github repo (https://github.com/PatrickAlphaC/hardhat-nft-fcc/blob/main/test/unit/randomIpfs.test.js) does not work
      await expect(randomIpfsNft.requestNft({ value: lessThanMinFee })).to.be.revertedWithCustomError(
          randomIpfsNft,
          "RandomIpfsNft__NeedMoreETHSent"
        );
    })
    it("emits an event and kicks off a random word request", async () => {
      const fee = await randomIpfsNft.getMintFee();
      await expect(randomIpfsNft.requestNft({ value: ethers.parseEther("0.1") })).to.emit(
        randomIpfsNft,
        "NftRequested"
      );
    })
  })
  
  describe("fulfillRandomWords", () => {
    it("mints an NFT after random number is returned", async () => {
      await new Promise(async (resolve, reject) => {
        // contract.once(event, listener) is used to subscribe once to event calling listener when the event occurs (reference: https://docs.ethers.org/v5/api/contract/contract/)
        randomIpfsNft.once("NftMinted", async () => {
          try {
            // tokenURI is a function defined inside ERC721.sol
            const tokenUri = await randomIpfsNft.tokenURI("0");
            const tokenCounter = await randomIpfsNft.getTokenCounter(); 
            assert.equal(true, tokenUri.toString().includes("ipfs://"))
            assert.equal(tokenCounter.toString(), "1");
            resolve();
          } catch (e) {
            console.error(e);
            reject(e);
          }
        })
        try {
          const fee = await randomIpfsNft.getMintFee();
          const nftRequestResponse = await randomIpfsNft.requestNft({ value: fee.toString() });
          const nftRequestReceipt = await nftRequestResponse.wait(1);
          // nftRequestReceipt.events does not work and the reason the argument 1 is passed is explained in raffle lesson's unit test file
          await vrfCoordinatorV2Mock.fulfillRandomWords(nftRequestReceipt.logs[1].args.requestId, randomIpfsNft.target);
        } catch (e) {
          console.error(e);
          reject(e);
        }
      })
    })
  })

  describe("getBreedFromModdedRng", () => {
    it("should return pug if moddedRng < 10", async () => {
      assert.equal(0, await randomIpfsNft.getBreedFromModdedRng(5));
    })
    it("should return shiba inu if 10 < moddedRng < 30", async () => {
      assert.equal(1, await randomIpfsNft.getBreedFromModdedRng(25));
    })
    it("should return st. bernard if moddedRng > 60", async () => {
      assert.equal(2, await randomIpfsNft.getBreedFromModdedRng(65));
    })
    it("should revert if moddedRng > 99", async () => {
      await expect(randomIpfsNft.getBreedFromModdedRng(100)).to.be.revertedWithCustomError(
        randomIpfsNft,
        "RandomIpfsNft__RangeOutOfBounds"
      )
    })
  })
})


