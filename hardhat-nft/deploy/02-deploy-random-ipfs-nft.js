const { network, ethers } = require("hardhat");
const { developmentChains, networkConfig } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const { storeImages, storeTokenUriMetadata } = require("../utils/uploadToPinata");

const imagesLocation = "./images/randomNft/";

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      trait_types: "Cuteness",
      value: 100,
    }
  ]
}

let tokenUris = [
  'ipfs://QmWftbwkJZHAA1mVBxJ1Gn3EPzGc8qvcWz5V7ZHpGcroM6',
  'ipfs://QmSdKZHnStsM6g2QmX6x1qC1mjGjPhaw61CzUx4B3EwRsw',
  'ipfs://QmQ1qRt7GWNq1tHVmyir3FJqfjPjdT2EbyYs4VNUbKg541'
];
const FUND_AMOUNT = ethers.parseEther("10");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let vrfCoordinatorV2Mock;

  let vrfCoordinatorV2Address, subscriptionId;

  // get the IPFS hashes of our images
  if (process.env.UPLOAD_TO_PINATA == "true") {
    tokenUris = await handleTokenUris();
  }

  if (developmentChains.includes(network.name)) {
    vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
    vrfCoordinatorV2Address = vrfCoordinatorV2Mock.target;
    const tx = await vrfCoordinatorV2Mock.createSubscription();
    const txReceipt = await tx.wait(1);
    // subscriptionId = txReceipt.events[0].args.subId;
    subscriptionId = 1;
    await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT);
  } else {
    vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
    subscriptionId = networkConfig[chainId].subscriptionId;
  }

  log("-----------------------------------------------------------");
  // await storeImages(imagesLocation);
  // the args in order are: address vrfCoordinatorV2, uint64 subscriptionId, bytes32 gasLane, uint32 callbackGasLimit, string[3] memory dogTokenUris, uint256 mintFee 
  const args = [vrfCoordinatorV2Address, subscriptionId, networkConfig[chainId].gasLane, networkConfig[chainId].callbackGasLimit, tokenUris, networkConfig[chainId].mintFee];

  // deploying the contract
  const randomIpfsNft = await deploy("RandomIpfsNft", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  })

  // adding the conumer to solve error (InvalidConsumer()) in testing (see reference: https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/1375)
  // await vrfCoordinatorV2Mock.addConsumer(subscriptionId, randomIpfsNft.address);

  // verifying the contract
  log("-----------------------------------------------------------");
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying...");
    await verify(randomIpfsNft.address, args);
  }
}

async function handleTokenUris() {
  let tokenUris = [];
  // Store the image in IPFS
  // Store the metadata in IPFS
  const { responses: imageUploadResponses, files } = await storeImages(imagesLocation);
  for (imageUploadResponseIndex in imageUploadResponses) {
    // create metadata and upload it
    let tokenUriMetadata = { ...metadataTemplate } // javascipt syntatic sugar which makes tokenUriMetadata equivalent to metadataTemplate
    tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".png", "");
    tokenUriMetadata.description = `An adorable ${tokenUriMetadata.name} pup!`;
    // tokenUriMetadata.image stores the ipfs link for the image
    tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
    console.log(`Uploading ${tokenUriMetadata.name}...`);
    // store the json to pinata/ipfs
    const metadataUploadResponse = await storeTokenUriMetadata(tokenUriMetadata);
    // storing the pinned ipfs data inside tokenUris
    // the code below stores the ipfs link that contains the json format about the metadata of the file we have stored in IPFS
    tokenUris.push(`ipfs://${metadataUploadResponse.IpfsHash}`);
  }
  console.log(`Token URIs are uploaded and they are:`);
  console.log(tokenUris);
  return tokenUris;
} 

module.exports.tags = ["all", "randomipfs", "main"];
