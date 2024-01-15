const pinataSDK = require("@pinata/sdk");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataApiSecret = process.env.PINATA_SECRET_API_KEY;
const pinata = new pinataSDK(pinataApiKey, pinataApiSecret);

async function storeImages(imagesFilePath) {

  const fullImagesPath = path.resolve(imagesFilePath);
  // console.log(fullImagesPath);
  const files = fs.readdirSync(fullImagesPath);
  console.log(files);
  let responses = [];
  console.log("Uploading to IPFS...");
  // console.log(pinata);
  for (fileIndex in files) {
    // console.log(fileIndex); // returns 0, 1, 2 (index duh)
    const readableStreamForFile = fs.createReadStream(`${fullImagesPath}/${files[fileIndex]}`); // reading the bits of image file
    // console.log(`${fullImagesPath}/${files[fileIndex]}`); // returns the path for the file (duh)
    const options = {
      pinataMetadata: {
        name: files[fileIndex],
      },
    }
    try {
      const response = await pinata.pinFileToIPFS(readableStreamForFile, options);
      responses.push(response);
      // console.log(response); // returns a dictionary that contains key-value for IpfsHash. PinSize, Timestamp and isDuplicate 
    } catch (e) {
      console.error(e);
    }
  }
  return { responses, files }
}

async function storeTokenUriMetadata(metadata) {
  const options = {
    pinataMetadata: {
      name: metadata.name,
    },
  }
  try {
    const response = await pinata.pinJSONToIPFS(metadata, options);
    return response;
  } catch (e) {
    console.error(e);
  }
  return null;
}

module.exports = {
  storeImages,
  storeTokenUriMetadata,
}
