const { network, ethers } = require("hardhat");
const { developmentChains, networkConfig } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const fs = require("fs");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let ethUsdPriceFeedAddress;

  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await ethers.getContract("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.target; // ethUsdAggregator.address does not return the address of the contract, maybe it is cause we are geting the contract and not deploying the contract as we did with DynamicSvgNft
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed;
  }

  log("---------------------------------------------");
  const lowSVG = await fs.readFileSync("./images/dynamicNft/frown.svg", { encoding: "utf8" });
  const highSVG = await fs.readFileSync("./images/dynamicNft/happy.svg", { encoding: "utf8" });
  const args = [ethUsdPriceFeedAddress, lowSVG, highSVG];
  const dynamicSvgNft = await deploy("DynamicSvgNft", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  // console.log(`The address at which MockV3Aggregator is deployed at is: ${ethUsdPriceFeedAddress}`);
  // console.log(`The address at which DynamicSvgNft is deployed at is: ${dynamicSvgNft.address}`);

  log("---------------------------------------------");
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...");
    await verify(dynamicSvgNft.address, args);
  }
}

module.exports.tags = ["all", "dynamicsvgnft", "main"];
