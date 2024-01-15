const { getWeth, AMOUNT } = require("../scripts/getWeth");
const { getNamedAccounts, ethers } = require("hardhat");

async function main () {
  await getWeth();

  const { deployer } = await getNamedAccounts();
  const signer = await ethers.provider.getSigner(); 

  const lendingPool = await getLendingPool(signer);

  const lendingPoolAddress = await lendingPool.getAddress();
 
  console.log(`Information about Lending Pool is: ${lendingPoolAddress}`);
  // console.log(`Lending Pool Address: ${lendingPool.address}`); 
  // this method apparently does not provide the address of the lending Pool
  // but using the getAddress method deos provide the address of the lendingPool
  
  // deposit 
  const wethTokenAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  // approve
  await approveErc20(wethTokenAddress, lendingPoolAddress, AMOUNT, signer);
  console.log(`Depositing...`);
  await lendingPool.deposit(wethTokenAddress, AMOUNT, signer, 0);
  console.log("Deposited!");
  // deposit and approved section finished
  
  // Borrowing
  // We need to check how much we have borrowed, how much we have in collateral and how much we can borrow
  let { availableBorrowsETH, totalDebtETH } = await getBorrowedUserData(lendingPool, signer);
  const daiPrice = await getDaiPrice();
  const amountDaiToBorrow = availableBorrowsETH.toString() * 0.95 * (1 / Number(daiPrice)); 
  // the function used to convert daiPrice in the video is: daiPrice.toNumber() which does not work, but the Number function works fine.
  console.log(`You can borrow ${amountDaiToBorrow} DAI.`);
  const amountDaiToBorrowWei = ethers.parseEther(amountDaiToBorrow.toString());
  const daiTokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  await borrowDai(daiTokenAddress, lendingPool, amountDaiToBorrowWei, signer);
  await getBorrowedUserData(lendingPool, signer);
  await repay(amountDaiToBorrowWei, daiTokenAddress, lendingPool, signer, lendingPoolAddress);
  await getBorrowedUserData(lendingPool, signer);
}

async function repay (amount, daiAddress, lendingPool, account, lendingPoolAddress) {
  console.log(`Getting ready for the repayment procedure...`);
  await approveErc20(daiAddress, lendingPoolAddress, amount, account);
  const repayTx = await lendingPool.repay(daiAddress, amount, 2, account);
  await repayTx.wait(1);
  console.log("Repaid!");
}

async function borrowDai (daiAddress, lendingPool, amountDaiToBorrowWei, account) {
  console.log(`Borrowing Dai...`);
  const borrowTx = await lendingPool.borrow(daiAddress, amountDaiToBorrowWei, 2, 0, account); // interestRateMode when set to 1 causes Validation Logic but when changed to 2 gives stable output
  // stolen from https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/6070#discussioncomment-7089935
  await borrowTx.wait(1);
  console.log(`You have borrowed!`);
}

async function getDaiPrice () {
  console.log(`Getting the price of DAI...`);
  const daiEthPriceFeed = await ethers.getContractAt(
    "AggregatorV3Interface", 
    "0x773616e4d11a78f511299002da57a0a94577f1f4", 
  )
  
  const price = (await daiEthPriceFeed.latestRoundData())[1]; // the first index returns the price which is our only need

  console.log(`The DAI/ETH price is: ${price.toString()}`)
  
  return price
}

async function getBorrowedUserData (lendingPool, account) {
  console.log(`Getting the user data...`);
  const { totalCollateralETH, totalDebtETH, availableBorrowsETH } = await lendingPool.getUserAccountData(account);
  console.log(`You have ${totalCollateralETH} worth of ETH deposited.`);
  console.log(`You have ${totalDebtETH} worth of ETH borrowed,`);
  console.log(`You can borrow ${availableBorrowsETH} worth of ETH`);
  return { availableBorrowsETH, totalDebtETH }
}

async function getLendingPool (account) {
  // Lending pool address provider: 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
  console.log(`Obtaining the lending pool...`);

  const lendingPoolAddressProvider = await ethers.getContractAt("ILendingPoolAddressesProvider", "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5", account);

  const lendingPoolAddress = await lendingPoolAddressProvider.getLendingPool();

  const lendingPool = await ethers.getContractAt("ILendingPool", lendingPoolAddress, account);

  return lendingPool;
}

async function approveErc20 (erc20Address, spenderAddress, amountToSpend, account) {
  console.log(`Approving the ERC20 token...`);
  const erc20Token = await ethers.getContractAt("IERC20", erc20Address, account);

  const tx = await erc20Token.approve(spenderAddress, amountToSpend);
  await tx.wait(1);
  console.log(`Approved!`);
}

main()
  .then(() => {
    console.log("It worked?");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
