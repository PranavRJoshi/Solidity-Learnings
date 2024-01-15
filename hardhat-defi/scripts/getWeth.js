const { getNamedAccounts, ethers } = require("hardhat");

const AMOUNT = ethers.parseEther("0.02");

async function getWeth () {
  const { deployer } = await getNamedAccounts();

  // call the deposit function on the weth contract
  // we need abi and the contract address to interact with a contract
  // weth mainnet:0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 
  // console.log(AMOUNT);
  // console.log(deployer);
  const signer = await ethers.provider.getSigner(); // To use the "deposit" method, we need to have a signer that can modify the contract
  const iWeth = await ethers.getContractAt("IWeth", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", signer);
  // console.log(iWeth); 
  const tx = await iWeth.deposit({ value: AMOUNT });
  await tx.wait(1);
  const wethBalance = await iWeth.balanceOf(deployer);
  console.log(`Got ${wethBalance.toString()} WETH`);
}

module.exports = {
  getWeth,
  AMOUNT,
}
