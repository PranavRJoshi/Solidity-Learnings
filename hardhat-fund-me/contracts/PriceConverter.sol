// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice(AggregatorV3Interface priceFeed) internal view returns (uint256){
        // ABI
        // Address (for the conversion of ETH to USD): 0x694AA1769357215DE4FAC081bf1f309aDC325306

        // AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306).version();
        // AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);

        // this is the way to receive the returned values from other methods
        // (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedA, uint80 answeredInRound) = priceFeed.latestRoundData();

        // we can also only specify the variable which we will be using and leave other as is like:
        // this will return the value of 1 eth in terms of usd, which will contain 8 decimal places
        // for instance, the output received was: 187984000000, which will be: $1879.84000000
        (, int256 answer, , , ) = priceFeed.latestRoundData();

        return uint(answer * 1e10); // will result in 18 decimals which can be used to compare with msg.value
    }

    function getVersion(AggregatorV3Interface priceFeed) internal view returns (uint256){
        // AggregatorV3Interface priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return priceFeed.version();
    }

    function decimalLength(AggregatorV3Interface priceFeed) internal view returns (uint8) {
        // AggregatorV3Interface priceFeedDecimal = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        return(priceFeed.decimals());
    }

    function getConversionRate(uint256 ethAmount, AggregatorV3Interface priceFeed) internal view returns (uint256) {
        uint256 ethPrice = getPrice(priceFeed);
        return (ethPrice * ethAmount) / 1e18; // returns the eth amount in USD
    }

    /*function addFive(uint256 number) internal pure returns (uint256) {
        return number + 5;
    }*/ // Function created to test the library functionality 
}

