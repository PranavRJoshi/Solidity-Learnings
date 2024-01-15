//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {

    // data-types: boolean, uint, int, address, bytes
    // uint(x) where (x) represents the bits allocated. eg: `uint8 test_var;`
    /*bool hasFavNumber = false;
    uint256 favNumber = 5;
    address myAddress = 0x22603A7875EE22eAcE171Afd21926261E3309Be0;
    int256 favNumberInt = -5;
    string favNumberInText = "five";
    byes32 favouriteBytes = "cat";*/

    // This gets initialized to zero
    uint256 public favNumber;

    // all the possible strings in the world are mapped to zero right now. 
    mapping (string => uint256) public nameToNum;

    struct People {
        uint256 favouriteNumber;
        string personName;
    }

    People public person = People({favouriteNumber: 5, personName: "Tester"});
    People public person1 = People(100, "Muna");
    People[] public people;

    function addPerson(string memory name, uint _favNumber) public {
        People memory newPerson = People({favouriteNumber: _favNumber, personName: name});
        people.push(newPerson);
        nameToNum[name] = _favNumber;
    }    


    function setNumber(uint256 num1) public virtual {
        favNumber = num1;
        favNumber += 1;
    }

    function displayNumber() public view returns(uint256) {
        return favNumber;
    }
}

// 0xd9145CCE52D386f254917e481eB44e9943F39138


