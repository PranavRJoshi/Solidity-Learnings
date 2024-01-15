const { ethers, network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  
  // console.log(deployer);

  // minting BasicNft
  const basicNft = await ethers.getContract("BasicNft", deployer);
  const basicMintTx = await basicNft.mintNFT();
  // await basicMintTx.wait(1);
  const basicNfttokenURI = await basicNft.tokenURI(0);
  console.log(`Basic NFT index 0 has tokenURI: ${basicNfttokenURI}`);

  // minting RandomIpfsNft
  const randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer);
  const mintFee = await randomIpfsNft.getMintFee();
  await new Promise (async (resolve, reject) => {
    setTimeout(() => reject("Timeout: 'NFTMinted Event did not fire"), 300000); // 50 mintues of timer for the callback
    randomIpfsNft.once("NftMinted", async () => {
      resolve();
    });
    const randomIpfsNftMintTx = await randomIpfsNft.requestNft({ value: mintFee.toString() });
    const randomIpfsNftMintTxReceipt = await randomIpfsNftMintTx.wait(1);
    if (developmentChains.includes(network.name)) {
      const requestId = randomIpfsNftMintTxReceipt.logs[1].args.requestId.toString();
      const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer);
      await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomIpfsNft.target);
    }
  });
  const randomIpfsNfttokenURI = await randomIpfsNft.tokenURI(0);
  console.log(`Random IPFS NFT index 0 has tokenURI: ${randomIpfsNfttokenURI}`);

  // minting DynamicSvgNft
  const highValue = ethers.parseEther("4000");
  const dynamicSvgNft = await ethers.getContract("DynamicSvgNft", deployer);
  const dynamicSvgNftTx = await dynamicSvgNft.mintNft(highValue);
  const dynamicSvgNftTxReceipt = await dynamicSvgNftTx.wait(1);
  const dynamicSvgNfttokenURI = await dynamicSvgNft.tokenURI(0);
  console.log(`Dynamic SVG NFT index 0 has tokenURI: ${dynamicSvgNfttokenURI}`);
}


module.exports.tags = ["all", "mint"];
