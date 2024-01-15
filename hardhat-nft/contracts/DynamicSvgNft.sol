// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "base64-sol/base64.sol";

contract DynamicSvgNft is ERC721 {
  uint256 private s_tokenCounter;
  string private i_lowImageURI;
  string private i_highImageURI;
  string private constant base64EncodedSvgPrefix = "data:image/svg+xml;base64,";

  // Chainlink AggregatorV3Interface variables:
  AggregatorV3Interface internal immutable i_priceFeed;

  // ERC721 variables:
  mapping (uint256 => int256) public s_tokenIDToHighValue; 

  // Events
  event CreatedNFT (uint256 indexed tokenId, int256 highValue);

  constructor (address priceFeedAddress, string memory lowSvg, string memory highSvg) ERC721 ("Dynamic SVG NFT", "DSN") {
    s_tokenCounter = 0;
    i_lowImageURI = svgToImageURI(lowSvg);
    i_highImageURI = svgToImageURI(highSvg);
    i_priceFeed = AggregatorV3Interface(priceFeedAddress);
  }

  function mintNft (int256 highValue) public {
    s_tokenIDToHighValue[s_tokenCounter] = highValue; 
    _safeMint(msg.sender, s_tokenCounter);
    s_tokenCounter += 1;
    emit CreatedNFT(s_tokenCounter, highValue);
  }

  // Converting SVG to Base64 and obtaining the original image by plugging in the following url in the browser:
  // data:image/svg+xml;base64,{base64 output value}
  function svgToImageURI (string memory svg) public pure returns (string memory) {
    string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
    return string(abi.encodePacked(base64EncodedSvgPrefix, svgBase64Encoded));
  }

  function _baseURI () internal pure override returns (string memory) {
    return "data:application/json;base64,";
  }

  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    // require(_exists(tokenId), "URI query for non-existent token"); // tutorial shows the `_exists(tokenId)` method which seems to have been changed    
    // _exists has been removed as indicated in the openzeppelin changelogs: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/CHANGELOG.md 
    require(_ownerOf(tokenId) != address(0), "URI query for non-existent token");
    // data:image/svg+xml;base64,
    // data:application/json;base64,

    // string memory imageURI = "test";
    (, int256 price, , , ) = i_priceFeed.latestRoundData();
    string memory imageURI = i_lowImageURI;
    if (price >= s_tokenIDToHighValue[tokenId]) {
      imageURI = i_highImageURI;
    }
    // manually encoding the JSON format in the contract
    return string(abi.encodePacked(
      _baseURI(),
      Base64.encode(bytes(abi.encodePacked(
      '{"name":"', name(), 
      '", "description":"An NFT that changes based on the Chainlink Feed", ',
      '"attributes":[{"trait_type": "coolness", "value": 100}], "image":"', 
      imageURI, 
      '"}'
    ))))); // so, we created a json string, encoded it in bytes so we can encode it in base64 which is later appended by the baseURI for the formation of a URL that can be used to view the json format of the property of the said NFT
  }

  function getTokenCounter () public view returns (uint256 tokenCounter) {
    return s_tokenCounter;
  }

  function getPriceFeed () public view returns (AggregatorV3Interface) {
    return i_priceFeed;
  }

  function getLowSvgURI () public view returns (string memory) {
    return i_lowImageURI;
  }

  function getHighSvgURI () public view returns (string memory) {
    return i_highImageURI;
  }
}
