// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

// Goals: 
    // Get fund from users
    // Withdraw funds
    // Set a minimum funding value in USD

import "./PriceConverter.sol";

error FundMe__notOwner();

contract FundMe {

    using PriceConverter for uint256;

    uint256 public constant MINIMUM_USD = 50 * 1e18;
    address[] private s_Funders;
    mapping (address => uint256) private s_fundersAddressToValue;
    uint256 public s_totalFund = 0;
    address private immutable i_owner;

    AggregatorV3Interface private s_priceFeed;

    modifier onlyOwner {
        // require(msg.sender == i_owner, "Sender is not the owner!");
        if (msg.sender != i_owner) {
            revert FundMe__notOwner();
        }
        _;
    }
    
    constructor(address priceFeedAddress) {
        i_owner = msg.sender;
	s_priceFeed = AggregatorV3Interface(priceFeedAddress);
    }

    function fund() public payable {
        // want to be able to set a minimum fund amount in USD
        // 1. How do we send ETH to this contract?

        require(msg.value.getConversionRate(s_priceFeed) >= MINIMUM_USD, "Didn't send enough!");
        s_Funders.push(msg.sender);
        s_fundersAddressToValue[msg.sender] += msg.value;
        // what is reverting?
        // undo any action before, and send remaining gas back
    }

    function withdraw() public onlyOwner {

        for (uint256 funderIndex = 0; funderIndex < s_Funders.length; funderIndex++) {
            address funder = s_Funders[funderIndex];
            s_totalFund += s_fundersAddressToValue[funder];
            s_fundersAddressToValue[funder] = 0; // "taking the money from the funder", so we reset the value to zero
        }

        /*
        // transfer
        // typecasting the address type to payable address type as the currency can be sent that way only
        payable(msg.sender).transfer(address(this).balance);

        // send
        // the send function returns a boolean and the process can
        bool sendSuccess = payable(msg.sender).send(address(this).balance); 
        require(sendSuccess, "Send Failed");
        */

        // call 
        // powerful method which can virtually call any ethereum function

        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        for (uint256 funderIndex = 0; funderIndex < s_Funders.length; funderIndex++) {
            address funder = s_Funders[funderIndex];
            s_totalFund += s_fundersAddressToValue[funder];
            s_fundersAddressToValue[funder] = 0; // "taking the money from the funder", so we reset the value to zero
        }
	require(callSuccess, "Call Failed");
    }

    function cheaperWithdraw() public payable onlyOwner {
        address[] memory funders = s_Funders;
        // mappings can't be in memory
        for (uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            s_fundersAddressToValue[funder] = 0;
            // s_fundersAddressToValue[funder] = 0; // "taking the money from the funder", so we reset the value to zero
        }

        s_Funders = new address[](0);
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        require(success, "Call Failed");
    }


    /*function checkAddress() public view returns (address) {
        return address(this); // returns the address of the contract 
    }*/

    /*function testing() public view returns (uint256){ 
        return minimumUsd.addFive();
    }*/ // function created to test the functionality of library function

    // receive() function
    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }

    // setting up the getters for the private variables as they don't need to be public
    function getOwner() public view returns (address){
	return i_owner;
    }

    function getFunders(uint256 index) public view returns (address) {
	return s_Funders[index];
    }

    function getFundersAddressToValue(address funder_address) public view returns (uint256) {
	return s_fundersAddressToValue[funder_address];
    }

    function getPriceFeed() public view returns (AggregatorV3Interface) {
	return s_priceFeed;
    }
}

