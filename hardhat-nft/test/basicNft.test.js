const { deployments, ethers, getNamedAccounts, network } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains, networkConfig } = require("../helper-hardhat-config.js");

!developmentChains.includes(network.name) ? describe.skip :
describe("BasicNft Unit Tests", () => {
    let basicNft, deployer;
    const chainId = network.config.chainId;

    beforeEach(async () => {
      // deployer = (await getNamedAccounts()).deployer;
      const accounts = await ethers.getSigners();
      deployer = accounts[0];
      await deployments.fixture(["basicnft"]);
      basicNft = await ethers.getContract("BasicNft", deployer);
    })

    describe("Constructor", () => {
      it("initializes the ERC721 constructor", async () => {
        const name = await basicNft.name();
        const symbol = await basicNft.symbol();
        const tokenCounter = await basicNft.getTokenCounter();
        assert.equal("MuniMuni", name);
        assert.equal("Mun", symbol);
        assert.equal(0, tokenCounter);
      })
    })

    describe("Mint NFT", () => {
      beforeEach(async () => {
        const mintTx = await basicNft.mintNFT();
        await mintTx.wait(1);
      })

      it("Allows users to mint NFT and updates appropriately", async () => {
        const tokenCounter = await basicNft.getTokenCounter();
        const tokenURI = await basicNft.tokenURI(0);
        assert.equal("1", tokenCounter.toString());
        assert.equal(await basicNft.TOKEN_URI(), tokenURI); // calling an attribute of the contract, but it needs to be called like a function 
      })

      it("Shows the correct balance and owner of an NFT", async () => {
        const deployerAddress = deployer.address;
        const deployerBalance = await basicNft.balanceOf(deployerAddress); // balanceOf returns the number of tokens owned by the given address
        const owner = await basicNft.ownerOf(0); // ownerOf returns the owner of the given tokenId
        assert.equal(deployerAddress, owner);
        assert.equal("1", deployerBalance.toString());
      })
    })
  }
)
