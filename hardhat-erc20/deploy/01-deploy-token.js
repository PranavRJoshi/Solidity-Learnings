const { network } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");


module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = [INITIAL_SUPPLY];
  log("-----------------------------------");
  const ourToken = await deploy("OurToken", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`ourToken deployed at: ${ourToken.address}`);

  log("-----------------------------------");
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying...");
    await verify(ourToken.address, args);
  }
}

module.exports.tags = ["all", "token"];
