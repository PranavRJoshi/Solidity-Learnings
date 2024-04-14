Notes for the video "Learn Blockchain, Solidity, and Full Stack Web3 Development with Javascript - 32-Hour Course"

# Table of Content
- <a href="#lesson-0-welcome-to-blockchain">Lesson 0: Welcome to Blockchain</a>
- <a href="#lesson-1-blockchain-basics">Lesson 1: Blockchain Basics</a>
- <a href="#lesson-2-welcome-to-remix-simple-storage">Lesson 2: Welcome to Remix! Simple Storage</a>
- <a href="#lesson-3-remix-storage-factory">Lesson 3: Remix Storage Factory</a>
- <a href="#lesson-4-remix-fund-me">Lesson 4: Remix Fund Me</a>
- <a href="#lesson-5-etherjs-simple">Lesson 5: Ether.js Simple</a>
- <a href="#lesson-6-hardhat-simple-storage">Lesson 6: Hardhat Simple Storage</a>
- <a href="#lesson-7-hardhat-fund-me">Lesson 7: Hardhat Fund Me</a>
- <a href="#lesson-8-html--javascript-fund-me-full-stack--front-end">Lesson 8: HTML / Javascript Fund Me (Full Stack / Front End)</a>
- <a href="#lesson-9-hardhat-smart-contract-lottery">Lesson 9: Hardhat Smart Contract Lottery</a>
- <a href="#lesson-10-nextjs-smart-contract-lottery-full-stack-front-end">Lesson 10: NextJS Smart Contract Lottery (Full Stack/ Front End)</a>
- <a href="#lesson-11-hardhat-starter-kit">Lesson 11: Hardhat Starter Kit</a>
- <a href="#lesson-12-hardhat-erc20s">Lesson 12: Hardhat ERC20s</a>
- <a href="#lesson-13-hardhat-defi--aave">Lesson 13: Hardhat DeFi & Aave</a>
- <a href="#lesson-14-hardhat-nfts">Lesson 14: Hardhat NFTs</a>
- <a href="#lesson-15-nextjs-nft-marketplace-full-stack--front-end">Lesson 15: NextJS NFT Marketplace (Full Stack / Front End)</a>

[Link to the video](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=84s)

# Lesson 0: Welcome to Blockchain

1. Take reference from the github repo [given in description](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions).
2. Open the documentation.
3. Learn the sections you want.
   
<a href="#lesson-0-welcome-to-blockchain">Back to top of Lesson 0</a>

# Lesson 1: Blockchain Basics

(keywords: Decentralized Blockchain, Decentralized Oracle Network, Elliptic Curve Digital Signature Algorithm, Nakamoto Consensus, Sybil Resistance, Off-chain/On-chain)

1. BITCOIN WHITE PAPER AND ETHEREUM WHITE PAPER
2. Ethereum is a technology where not only decentralized transactions can be made, but decentralized agreements or decentralized organizations can be made as well. Decentralized agreements == smart contracts.
3. Smart contracts are a set of instructions executed in a decentralized way without the need for a centralized or third party intermediary.
4. Bitcoin is intentionally "turing incomplete". It is done so to prevent Denial of Service (DoS) attacks.
5. Blockchain Oracle is any device that interacts with the off-chain world to provide external data or computation to smart contracts.
6. 'smart contract' and 'hybrid smart contract' are used interchangeably.
7. 'smart contract platform' and 'blockchain' are used interchangeably.
8. Dapp == decentralized application == decentralized protocol == smart contract.
9. The 3 web -
	1. Web1: The permissionless open sourced web with static content.
	2. Web2: The permissioned web, with dynamic content, where companies run your agreements on their servers.
	3. Web3: The permissionless web, with dynamic content, where decentralized censorship resistent newtorks run your agreement and code. It generally is accompanied by the idea of user owned ecosystems, where the protocols you interact with you also own a portion of, instead of solely being the product.
10. A smart contract is an agreement, contract, or set of instructions that is deployed on a decentralized blockchain. Cannot be altered (immutable, automatically executes, everyone sees the term of agreement).
11. Smart contract solves Society's critical trust issues: Paper based (Brand based) vs Cryptographic Guarantees (Math based).
12. DeFi: Decentralized Finance. 200+ billion USD invested by the people.
13. Trust minimizing agreements or simply put: "unbreakable promises".
14. Smart contract platforms also have a value, sort of like a "digital oil"
15. Smart contract value == trust minimized agreements.
16. Many node operators run blockchains. (these node uses the same software/program/algorithm)
17. Definition of Block chain according to bitcoin.org -  The block chain is a shared public ledger on which the entire Bitcoin network relies.
18. `etherscan.io` is a site which is a block explorer and is used to get the details for any addresses given to it.
19. Mnemonic (Security recovery phrase for metamask.io) can be used to access all your accounts, private key can be used to access only the account the private key is associated with, public key cannot be used to access any accounts.
20. A way to become a smart contract developer is to understand the "behind the scenes" of a transaction, which is:
	1. Transaction Hash: Unique identifier to determine the block or the transaction. This transaction hash is responsible to showcase that a certain amount of crytocurrency has been transacted.
	2. Transaction fee: Amount paid to process the transaction in ether and fiat value, 
	3. Gas Price: Cost per unit of gas spent for the transactions, in ether and gwei (higher the gas price implies greater chance of getting in the blockchain)
	4. Gas: A unit of computational measurement. The more complex the transaction is, the more gas you have to pay. (Transaction fee = The amount of GAS used by specific transaction alone * Gas price)
21. Any transaction on the blockchain comes with paying gas.
22. How do Blockchains work? Check out [this awesome website](https://andersbrownworth.com/blockchain)
23. Some terminologies used in the field of blockchain are:  
	1. Hash is a unique fixed length string, meant to identify a piece of data. They are created by placing a said data into a "hash function". Ethereum uses the Keccak256 algorithm and bitcoin uses the SHA-256 algorithm.  
	2. A block is a component consisting of the block number, the Nonce (a unique number/tag which is apparently used to "solve the cryptographic problem"), data and hash where these value determine the solution to hash (eg, a particular Nonce along with the data such that the hash function always generates a hash value starting with 4 zeroes)  
	3. Genesis block is that block which has previous hash value of all zeroes (It is the first block in the blockchain). If any of the block is tampered, i.e. the data is modified, the hash generated will be different which will break the entire chain afterwards.  
	4. In a distributed system, the "ledger" is provided to every peer, even if one of them tries to tamper the data inside the block, it won't matter much as the overall hash of the final block will be entirely different and that singluar peer won't be accepted. Example: if there are 5 peers with their own "ledger" and one of the peers tries to modify the data on any block. This will result in a new hash value for the modified block along with different hash values for blocks afterwards. The modified peer will have the final block with different hash value than others and since other remaining 4 peers have different hashes, the majority is favoured. There are many approaches to solve this, two of the popular ones are:  
        + Proof of Work: With this method, the *correct* chain is selected based on the longest chain out there along with the total computational power required to generate that chain. If the longest chain out there has put in most computational power, that chain will be favoured. "Miners" mine those chains and get rewarded if they can *find the block* the quickest. (If you visit any block explorer and check any new block added to a network, say bitcoin network, you will see the first transaction comes from nowhere and that transaction contains some cryptocurrency (bitcoin) being deposited to the miner who found the block)  
	    + Proof of Stake: With this method, there are "validators" who stake a portion of the money to be able to verify the transactions occuring in the blockchain. If any validator tries to tamper by adding in fake transactions or something fishy with the blockchain, that validator is removed and the stake put in by the validator is also removed.  
	5. Tokens are more specific than blocks, unlike blocks which contains only the data section, Tokens have a Transaction (Tx) section which holds the data: currency, from which user, to which user.
	 
	> **NOTE: Seems like Nonce is just a number/parameter which is used beside block number, data (or Tx), previous hash in a hash function to create a hash value which follows a certain protocol (like hash value starting with 4 zeroes) (Nonce is also used to define the transaction number for an account or address for ethereum)**

	6. Mining is the process of finding the *solution* to the blockchain *problem*, example: to find the hash value that starts with four zeroes. Nodes get paid for mining blocks.  
	7. Private key is only known to the key holder, it's used to "sign" transactions. Public key is known to everyone, it's used to "verify" transactions.  
	So, how does it work? Well, a private key is used, along with the message to create a message signature, this message signature is unique and cannot be reverted back to trace one's private key. This message signature is created using something called as "Elliptic Digital Signature Algorithm" or EDSA in short. Now, the use of public key is to verfiy if the message is sent by the same person or not and whether the message has been tampered or not. If the message, public key and signature match, it is verified, else not. Note that message and transaction are interchangable in this context.

	> **NOTE: In short, private keys are used to create public keys which in turn is used to create an address. Ethereum Improvement Proposal (EIP), similar to Bitcoin Imporvement Proposal (BIP) is the design document covering technical specifications of the proposed changed and the rationale behind it.**

	In summary, the miners are looking for blocks to add to the blockchain. On the user end, the user has a transaction with a certain gas price and they want to add that transaction on the block. Higher the gas price, higher the miner will get paid, so the miners sort the blocks with the highest gas price and adds them in that manner. (It is proposed to introduce EIP 1559 in ETH 2.0 rather than ETH as the EIP will lessen the profit for miners than the current model stated above)  
	8. Node is a single instance in a decentralized network, meaning that a node is a blockchain software run by one of many peers in the network. What makes this concept decentralized is, anyone can join the network (some hardware/technical barrier might exist) and participate.  
	9.  Consensus is the mechanism used to agree on the state of the blockchain. Roughly speaking, the consensus protocol can be broken down into two pieces: A chain selection algorithm (Nakamoto consensus and block confirmation) and a sybil resistance mechanism (proof of work and proof of stake).  
	10. Block time is defined as the time required for the block to be published. Higher the block time, more difficult is the problem to solve and vice versa. Whenever a node solves the blockchain problem (eg. finding a hash value starting with 4 zeroes), the node gets the transaction fee and block reward as payment.  
24. There are two types of attack that can happen in the blockchain world:  
	- Sybil attack: When a user creates multiple pseudo-anonymous accounts to try and influence a network.  
	- 51% attack: Blockchain agrees that the longest chain is the correct one as long as it matches with the 51% of the network. If one has the longest chain and 51% of the network, they can fork their own chain and manipulate the network.  
25. Proof of Stake (PoS) nodes put up collateral as a sybil resistance mechanism, nodes put some ethereum as a stake confirming they will behave in the network. If the behavior is found fishy, their stake is slashed / removed. In this system, miners are called validators as they validate other node. Unlike Proof of Work (PoW), where the nodes are racing to solve the problem or find the block, nodes are randomly chosen to propose a new block and the validators will validate if the node has proposed the block honestly. ETH 2.0 uses something called Randao for picking a random node to propose a new block. One of the major merit of the PoS is it is energy efficient as only one node is used to find the block whereas in PoW, multiple nodes are on the race to finding the block. 
26. We know that Gas price determines which block to be added first, but there are only so many nodes which can add the transactions on the block (As far as I understand: A block contains multiple transactions and has those transactions has a accumulated gas price of, say, 2 million. As there are more people using the blockchain, more demand for transactions to be kept in the block will occur which will naturally increase the overall gas, since the user can specify how much gas they would like to spend on the transaction and the "miners" sort the blocks with the highest gas). As more people use the technology, the Gas price increases as well, which is not good for a large scale blockchain (Some financial terms as well which I don't completely understand). ETH 2.0 solves this issue by a new methodology called sharding, which is the solution for the scalability problem. Sharded blockchain simply means a blockchain of blockchain. There is a main chain which coordinates everything amongst several other chains that hook into the main chain. This means there is overall more chain for people to make transactions on, effectively increasing the block space there is. It can increase the number of transactions on the blockchain layer 1.  
    - Layer 1: Base level blockchain implementation (Bitcoin, Ethereum, etc)   
    - Layer 2: Any application built on top of the layer 1 (Chainlink, arbitrum, optimism, etc). These layers rollup their transaction into layer 1.

<a href="#lesson-1-blockchain-basics">Back to top Lesson 1</a>

# Lesson 2: Welcome to Remix! Simple Storage

(keywords: )

1. Solidity is a new language and is constantly evolving, so we need to mention the current version of `.sol` program by using: 
   - `pragma solidity [version-number]`. A pragma is a compiler directive which allows you to provide additional information to the compiler.
2. Make sure to use comments while writing code.
3. `;` is used at the end of statement.
4. `https://ethereum.org/en/whitepaper/` is a great site to learn about different concepts behind ethereum
5. Smart contracts have addresses just like our wallet acounts do.
6. Any time we change something on-chain, including making a new contract, it happens in a transaction. This point is too vague, one way to put it is, most of the "stuff" done in a contract is like a transition, like calling a function (which is not pure or view) is a transaction and such.
7. Function visibility specifier (default visibility is internal):  
	1. public: visible externally and internally. (creates a getter function for storage/state variables) (getter function is used to retrieve variable value)  
	2. private: only visible in the current contract.  
	3. external: only visible externally (only for functions) - i.e. can only be message-called (via this.func)  
	4. internal: only visible internally.  
8. Every computational process will result in increase of gas used. In simple words, the more "stuff" you do in a fucntion, the more gas it will consume overall.
9.  `view` and `pure` functions, when called alone, don't spend gas. These functions also don't allow modification of state. Also, pure functions don't allow you to read from the blockchain state.
10. If a gas calling function calls a view or pure function, then only those functions will cost gas.
11. How to define the struct and array in Solidity:  
	1.   To define a struct, we can do:  
	```
	struct struct-name {
		variable-type1 variable-name1;
		variable-type2 variable-name2;  
	}  
	```
	2.  To define a array, we have two types of array definition:   
	    - Dynamic array: `variable-type[] variable-visibility variable-name;`  
	    - Fixed-size array: `variable-type[size] variable-visibility variable-name;`  
12. There are ways to adding data on the struct. Some of them are:
    - `struct-name var-visibility struct-var-name = struct-name({ variable-name1: value1, variable-name2: value2 });`
	- `struct-name var-visibility struct-var-name = struct-name(value-for-variable-name-1, value-for-variable-name-2);`	
13. What is the memory keyword used for? Before we jump to this, we must know that there are 6 locations Ethereum Virtual Machine (EVM) can store and access information from and they are:  
	1. Stack  
	2. Memory  
	3. Storage  
	4. Calldata  
	5. Code  
	6. Logs
	
We will be going through only 3 of the major location types: Calldata, Memory and Storage. 

> **NOTE: Calldata and Memory are local scoped, meaning that it is defined under the function and only can be used until the function terminates. Storage location is beyond local scoped. Calldata and Memory are both temporary variables but memory is temporary variable that can be modified whereas calldata are temporary variables that can't be modified. Storage is a permanent variable that can be modified.**

14.  Mapping is a data structure where a key is "mapped" to a single value. Syntax is: `mapping (key-data-type => value-data-type) visibility map-name;`  
To assign value to the keys, we can do it as: `map-name[key-name] = value;`
15.  Any blockchain that implements Ethereum Virtual Machine (EVM), we can depoly Solidity code to those blockchain. Examples of some EVM compatible blockchain are: Avalanche, Fantom and Polygon.

<a href="#lesson-2-welcome-to-remix-simple-storage">Back to top of Lesson 2</a>

# Lesson 3: Remix Storage Factory

(keywords: )

1. We can create instance of a contract by:
	```
	contract contract-name-1 {
		// contract here
	}

	contract contract-name-2 {
		contract-name-1 public obj-name;
					
		// can also be accessed by functions
		function function-name() visibility modifier(s) {
			obj-name = new contract-name-1();
		}
	}
	```
2. Instead of having all the contracts in one code, you can use import function: `import "path-of-the-contract";`
3. To convert object as memory variable: `contract-name object-variable = new contract-name()`;
4. Application Binary Interface (ABI) tell the code how it can interact with the contract.
5. To use inheritance, we do:
	```
	inlcude "path"; // the path returns the parent-contract

	contract child-contract-name is parent-contract-name {
		// Child contract containing the methods and attributes of Parent contract
	}
	```
6. To override a Parent function, we need to specify that the function is virtual in the Parent contract and we need to specify that the function is override in Child contract.  
	In parent contract:
	```
	function function-name(parameters) public virtual {
		//function body
	}
	```
	In child contract:
	```
	function function-name(parameters) public override {
		//modifiable function body
	}
	```

<a href="#lesson-3-remix-storage-factory">Back to top of Lesson 3</a>

# Lesson 4: Remix Fund Me

(keywords: Chainlink Verifiable Randomness Function (VRF), Chainlink keepers)

1. Every transaction will have the following fields:  
	1. Nonce: Transaction count for the account  
	2. Gas Price: price per unit of gas (in wei)  
	3. Gas Limit: max gas that the transaction can use  
	4. To: address that the transaction is sent to  
	5. Value: amount of wei to send 
	6. Data: what to send to the To address  
    7. v, r, s: components of transaction signature  
2. Transaction - Value transfer:  
	1. Nonce: transaction count for the account   
	2. Gas Price: price per unit of gas (in wei)  
	3. Gas Limit: 21000  
	4. To: address that the transaction is sent to  
	5. Value: amount of wei to send  
	6. Data: empty  
	7. v, r, s: componenets of transaction signature  
3. Transaction - Function call:  
	1. Nonce: transaction count for the account  
	2. Gas Price: price per unit of gas (in wei)  
	3. Gas Limit: max gas that the transaction can use  
	4. To: address that the transaction is sent to  
	5. Value: amount of wei to send  
	6. Data: what to send to the To address  
	7. v, r, s: components of transaction signature  
4. Smart wallets can hold fund just like how wallets can.
5. the keyword payable allows the user to send ether to a contract and run code to account for this deposit.
	```
	function function-name(parameters) visibility payable {
		// function-body
	}
	```
6. `msg` is a global variable which handles everything related to blockchain in the properties that it holds. We can access it's properties by using the dot operator. Example: `msg.value` inside a payable function. One more property of msg variable is: `msg.sender`, which returns the address of the account where the function call came from.
7. Whenever working in a contract, it is necesary to know that the transactions happens in wei. For instance, if we want a function to accept fund which is greater than an ether, we must do: `require(msg.value > 1e18, "Revert message"); // 1 ether = 1 * 10 ^ 18 wei`  
Here, the revert message is sent when the requirement is not fulfilled, and reverting undo any action before and send remaining gas back. For instance, if we have a variable initialized in the contract whose value is modified in a payable function if the transaction price was met, but if the price wasn't met, the value won't get changed even if the require method is at the last line of the function. Note that reverting will only return the gas which is not used (as far as i have known)
8. Architecture of Decentralized Oracle Network (Basics):  
	1.  Blockchain are deterministic system. Smart contracts are unable to connect with external systems, data feeds, APIs, existing systems or any off-chain resources on their own which can be called as a smart contract connectivity problem.  
	2. Blockchain oracle is any device which connects with the off-chain world to provide external data or computation to smart contracts.  
    3. Centralized Oracles are a point of failure whose data flow is something like: 
            `Data Sources (websites and such) ---> Centralized node (1 node) ---> Decentralized computation (many nodes)`
	4. A Decentralized Oracle Network looks something like: 
            `World's Data Source ---> Decentralized Oracle Network ---> Decentralized Computations`      
	Some key considerations are: Data quality, Origin proofs, Data delivery and Data validation, Crypto-economic guarantees and data privacy. More on [this](https://www.youtube.com/watch?v=6e7DmuYmXKw&t=11)  

	> **Note: Make sure to read and understand the basics of how chainlink work from [here](https://docs.chain.link/getting-started/conceptual-overview)**

9.  Interfacing is a technique where you can use the logic of a contract but cannot see the logic in the code (given).
10. We can directly import contracts/interfaces from github/npm using the import keyowrd. 
11. Libraries are similar to contracts, but you can't declare any state variable and you can't send any ether. A library is embedded into the contract if all the library functions are internal, otherwise the library must be deployed and then linked before the contract is deployed.
12. Whenever we need to use the funciton defined inside the library in another program, we need to import the required library and need to declare that we will be attaching the variable type to the library on the contract. Example:
	```
	contract contract-name {
		using library-name for data-type; // considering `import "library-path" is given`
	}
	```  
	> **NOTE: I think by declaring that, we are telling the program that the data-type can be used as an object such that the methods defined in the library can be accessed by that said data-type.** 

    Example:    
	```
	contract contract-name {
		using library-name for data-type;
		// consider that the library has a function which requires one uint256 parameter
		variable-name.library-method(parameters);
		// in the above function, the variable name is of the type data-type
		// which was declared in the first line
		// in the library-method, the parameters denotes that if the
		// function has multiple parameters, then we need to provide the other 
		// parameters except the first parameter as it is variable-name itself.
	}
	```
13. Prior to 0.8 version of Solidity, the integer and unsigned integer ran on the concept of being unchecked, meaning if the number stored in the respective variable is greater than the upper bound of that data type, the data stored in the variable will reset to the lower bound. Example:  
	```
	contract contract-name {
		uint8 variable-name = 255; // the upper bound for uint8 is 255 (0-255)
		int8 variable-name-i = 127; // the upper bound for int8 is 127 ((-128)-127)	

		function add() public {
			variable-name = variable-name + 1; 
		}

		function iadd() public {
			variable-name-i += variable-name-i;
		}
		// when the function add()  is called once, the value of variable-name is reset to 0
		// and similar for iadd(), but being a signed integer, the value is reset to -128.
	}
	```
14. Before the 0.8 version, a library named SafeMath was used as a checking mechanism to see if the numbers would overflow or not and would hence notify (like when the uint8 would go beyond upper bound and reset back to zero). But as of solidity  0.8+, this library is redundant cause the feature is pre-built in the compiler. We can still bypass this and go for unchecked numbers by doing as follows:
	```
	contract contract-name {
		// considering this is solidity version ^0.8.0
		uint8 visibility variable-name = 255;
			
		function add() public {
			unchecked { variable-name = variable-name + 1; }
		}
		// when add() is called, the value of variable_name is reset to 0
	}
	```
15. To reset an array: `array-name = new data-type[](x);`, where the 'array-name' is array of the type 'data-type' with 'x' number of elements created when initialized (I assume the default value is zero for the elements created), if x = 0, no element is created, if x = 1, one element is created and so on.
16. In Solidity, in-order to send the native blockchain token/coin like ethereum, we can only work with payable addresses and not regular address. Hence, we need to typecast the address type to payable-address type can only transfer the currency.
17. `address(this)` will return the address of the respective contract.
18. Three ways (I know of) to send ether:  
	1. Using the transfer() function: The function costs 2300 gas and throws error if the transaction fails.  
	2. Using the send() function: This function costs 2300 gas and returns bool if the transaction fails.  
	3. Using the call() function: This function forwards all gas or set gas and returns bool and some data, the bool indicates whether the transaction was successful or not. 
	 
	> **NOTE: For the most part, using the call function is preferred to send ethereum, but it should also be noted that it depends on the case-by-case basis.**

19. Constructor works same as in other languages, like C++ and so on. Whenever a contract (with constructor) is initialized, the constructor function is called at the very beginning. 
20. Modifier is like a pre-requisite to enter/read a function. Example:
	```
	contract contract-name {
		function function-name(parameters) visibility modifier-name {
			// function body
		}

		modifier modifier-name {
			// condition or modifier-body
			_; // this line tells the compiler to read everything from the function the modifier is attached to (function-name in this case). 
			// If the `_;` is above the condition/modifier-body, the code from function-name will be read out first and then only the condition/modifier-body is read.
		}
	}
	```
21. Payable functions might not be usable in virtual machine, but it will display the transaction cost (in gas). This is an efficient way to check the gas used to improve the code.
22. If a variable remains the same throughtout the program, we can use the `constant` specifier like:
	`data-type visibility constant VARIABLE_NAME = value;`  

	> **NOTE: Do not stress about optimizing the gas for the contract, just write your code.**  
    
    We store the immutable specifier in the bytecode of the contract insted of on the storage (also true for constant). The main difference between constant and immutable variable is that the constants cannot be changed once set, but for immutables, the variable's reference cannot be changed but the variable can be reassigned to point to a new object. One way to understand immutable variable is, for an immutable variable, the object the variable is pointing to cannot be modified but the variable can be reassigned to point to a new object.
23. We can use custom error function (^0.8.4) and replace `require` by `if` code. Example:
	```
	error error-name();

	contract contract-name {
		if(condition != true) {
			revert error-name();
		}
	}
	```
24. We can use the `receive()` function whenever the contracts needs a way to collect transactions. We can use the low-level interaction in Virutal Machine. Example:
	```
	receive() external payable {
		// code here
	}
	```

	> **NOTE: The receive function must be external and payable as it is a special function.**
	
25. When data is sent with the transaction, the compiler thinks that the sender wants to access some function rather than receive(), so it looks for fallback function. The fallback function is defined as:
	```
	fallback() external payable {
		// code here
	}
	```
	In short:
	```
	    // Explainer from: https://solidity-by-example.org/fallback/
    	// Ether is sent to contract
    	//      is msg.data empty?
    	//          /   \ 
    	//         yes  no
    	//         /     \
    	//    receive()?  fallback() 
    	//     /   \ 
    	//   yes   no
    	//  /        \
    	//receive()  fallback()
	```
26. Solidity has some special functions which do not need the `function` keyword, like:  
	1. contructor() {}  
	2. receive() external payable {}  
	3. fallback() external payable {}
27. `msg.data` contains the information about the function and its parameters that created the transaction.
28. `msg.value` and `callvalue() (callvalue being a low level function)` can only be used in public payable functions.

<a href="#lesson-4-remix-fund-me">Back to top of Lesson 4</a>

#################### End of Solidity Basics ###########################

# Lesson 5: Ether.js Simple

(keywords: Blockchain Infrastructure Provider)

1. Some general things to consider while asking questions on dev forums like stack overflow, github discussions, etc:  
	1. Make sure to mention the area of the code where the error occurs.   
	2. Make sure to mention the error type for that part of the code.  
	3. It is recommended to use markdown where necessary. It can be used to specify the coding language you're having issue with, the type of error you got and so on. Example (on Github):  
	``` 
		{programming-language}
		// error code here
	```
	Explanation of the error:  
	```
		// error type here
	```
	This is one of the simpler convention, we can use format like this to ask questions.
2. Five steps to solve any coding problem (apparently):  
	1. Tinker and Experiment  
	2. Check the documentation  
	3. Do a web search  
	4. Ask questions on forums and QnA sites.  
	    - Indexed code-based forum (like Stackoverflow)  
		- Indexed repository (like Github)  
		- Indexed technology-specific forum (like r/ethdev)  
		- Unindexed discussion platform (like chainlink discord)  
	    
        Theoretical, Big-picture or opinionated questions can go great on general QnA forums like Reddit, Discourse or Quora.  
		Discussion, Emergency, drawing attention or you might have a support contract, then you should post it on quick communication tools like Discord, Twitter, etc.  
   5. Join and strengthen the community and tool.
3. How to format your question:  
	1. Search   
	2. Summarize Title  
	3. Introduce the problem first  
	4. Add minimalistic/reproducable code (meaning the portion of the code that gets you error and posting only the snippet through which the answerer can also reproduce the same error)  
	5. Learn markdown (use backpacks)  
4. Github issues often need more information so that the maintainers have enough resource to fix your issue. Also, if you are watching some sort of tutorial that has a repo linked to it, it is better to use the discussions tab and ask questions along with the timestamp of where you encountered the problem.
5. Hardhat is a development environment for ethereum software.
6. If you are using VS code as your IDE, you can use code formatter like `prettier`, which can be used to properly format the code everytime your save the code.
7. JavaScript has `async` functions, where the function delivers the result asynchronously, for instance, a callback based function or a promise based function. A promise based function can have three states: accepted, rejected or pending. We can define an asynchronous function as:
	```
	async function function-name(parameters) {
		await sub-function-name(); // waits for this function to return value to go to next line
	}
	```
8. When calling the function, we can return output based on whether the function was successful or not, like:
	```
	async function function-name(parameters) {
		// some stuff here 
	}

	function-name()
		.then(() => {
			console.log("Guess it works");
			process.exit(0)
		})
		.catch((error) => {
			console.error(error); 
			process.exit(1);
			}
		);
	```
9. Similar to npm being a Node Package Manager, we have another package manager to manage all the dependencies, yarn. To check if yarn is configured, write the command in terminal: `yarn --version` (should return the version number if configured.)  
To configure yarn, write the code in the terminal: `corepack enable`  
If you encounter node permission errors, you can use sudo command, like: `sudo corepack enable`  
10. To add a specific version of solidity, we can use: `yarn add solc@[version-number]`. If the version has issues, we can also use: `yarn add solc@[version-number]-fixed`
11. To create an abi and bin file of a contract: `yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . [Contract-name]`
12. In order to remember all this, we can add a script section to automate this command during compile session as:
	```
	"scripts": {
		"compile": "yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . [Contract-name]"
	}
	```
13. RPC stands for Remote Procedure Call, stands for connection to a blockchain node that somebody is running. These url connects us to make api calls and interact with a blockchain node.
14. If we want to run our own blockchain node instead of metamask, we can do so [by using](https://geth.ethereum.org/docs)
15. We need to install Ether.js: `yarn add ehters`  
	Also, we need to add the package in our program:
	```
	const ethers = require("ethers");
	const fs = require("fs");
	```
	Here, ethers is a library which is used to interact with the ethereum blockchain and fs is a library which is used to provide asynchronous file system methods that returns promises. Example: The method called "readFileSync" is used to read from the file synchronously. 
16. In etherjs, contractFactory is just an object which is used to deploy contracts.
17. If you still haven't understood abi, it is just an interface which tells the program how to interact with the contract.
18. Wait `n` block confirmations in ethers contract deployment by using the `deployTransaction.wait(n)`.
19. A Nonce is a unique number associated with the transaction. Also, it is the value used to solve the given "hard problem" in mining.
20. Sending a raw transaction in etherjs:
	```
	const transaction-name = {
		nonce: number,
        gasPrice: number,
        gasLimit: number,
        to: null,
        value: number,
        data: "0x[contract-name_sol_contract-name].bin",
        chainId: [Ganache's NETWORK ID],
    };
	```
	The above json is used to specify the parameters of the transaction. Since the data being sent is the binary file of the contract, we are creating the contract. If there is an error that is regarding the chainId of the transaction, an easy fix is to see what NETWORK ID is currently working.
21. So far what we did in the code:  
	1. We connected to a Ganache instance using JsonRpcProvider method.  
	2. We connected a wallet with a private key we got from Ganache using the Wallet method.  
	3. We connected the abi and binary of the contract using the readFileSync method.  
	4. We created an instance with abi, binary and wallet defined above using the ContractFactory class. The wallet we used to create this instance is used to deploy the contract.  
	5. We deployed the contract using the deploy() method of the ContractFactory object, and this method returns a promise, so we need to use the await keyword.  
	6. For the transaction to finish, we can wait for n number of blocks using the wait(n) method of the deployTransaction instance inside the contract (which is created in #v).  
22. It is better to add Ganache in your working directory than using the application. We can simply configure it as:  
	1. To add ganache package: `yarn add ganache`  
	2. To run ganache locally using cli: `yarn run ganache`
23. BigNumber is a library/class that comes with etherjs. It is an object which safely allows multiple mathematical operations on numbers of any magnitude.
24. One way to format console.log is by using the backticks methods to wrap strings and variables around like:
	```
	console.log(`Hello my name is: ${variable-name}`);
	```
25. One good practice while sending an argument on a contract through javascript is to send the argument as a string, even when the argument for that method is an integer. This is cause we need to send large numbers which is a hassle in js and so we can just easily do it by passing it as a string.
26. The number of blocks confirmation afterwards is defined a bit different when it comes to creating a contract and when accessing the methods of the contract. More precisely, we need to use the followings:  
	1.   For contract creation:
	```
	const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
	const contract = await contractFactory.deploy();
	const contractReceipt = await contract.deployTransaction.wait(n);
	// here n is the number of block confirmation before sending in the transaction
	```  
	2.  For accessing the methods of the contract:
	```
	const var-name1 = await contract.[name-of-method]();
	const var-name1-receipt = await var_name1.wait(n);
	// n here is same as above
	```
27. We can store environmnet variable straight from the terminal or by creating a file `.env`. Also, environment variable are the variable in our terminal or in our scripting environment. We can access the environment variable in js by using the `process.env.{env-var-name}` method.
28. While running the node command in the terminal, we can also enter the enviromnet variables in as the preceeding argument, like: `environment-var-1 = value1 environment-var-2 = value2 node [file-name]`
29. Some information regarding three major changes in the Computer technology:  
	1. PC  
	2. Internet  
	3. Blockchain  
	
    There are three identical layers for these to function:  
	    `Protocol layer ---> Platform layer ---> Application layer`  
	Think of Platform layer as an abstraction layer, which simplifies the lives of developers to interact with Protocol layer for developing the Application.

	A simple example for each component with these three layers:  
	1. For PC:  
	    `RAM/ROM/HD ---> OS (Mac, Linux, Windows) ---> Application software (like Word, Excel, etc)`  
	2. For Internet:  
	    `HTTP/FTP/SMTP ---> Web Services (aws, etc) ---> Netflix, Uber, Pinterest, etc`  
	3. For Blockchain:  
	    `Bitcoin/Ethereum ---> Blockchian Servics (Alchemy, Infura, etc) ---> Dapps/NFTs and much more`

<a href="#lesson-5-etherjs-simple">Back to top of Lesson 5</a>

# Lesson 6: Hardhat Simple Storage

(keywords: testing, solidity coverage, describe-beforeEach-it block, hardhat runtime environment, gas reporter)

1. Hardhat is a development environment for ethereum software. It consists of different componenets for editing, compiling, debugging and deploying our smart contracts and dApps, all of which work together to create a complete development environment.
2. To learn the difference between dependencies, dev-dependencies and peer-dependencies, read through [this stackoverflow query](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)
3. Some of the packages on npm start with the `@` symbol, which is a feature called 'scoped packages'. Every user and organization on npm has their own scope, and they are the only people who can add packages to it. 
4. Sometimes, when we initialize our development environment by using `yarn add --dev hardhat`, we may run into some problem, for instance, the `hardhat.config.js` file is not in the directory, but rather in parent directory or somewhere else. We can sort out this issue by running the `npx hardhat --verbose` to properly locate the config file.
5. Hardhat comes built-in with Hardhat Network, a local Ethereum network node designed for development, akin to Ganache, etc. It allows us to deploy our contract, run and test and debug our codes.
6. In `hardhat.config.js`, there is a default key/value inside the `module.exports` called the `defaultNetwork: "hardhat"`. This default network comes with the rpc url and private key, so we don't need to specify those parameters in our code. It is also recommended to explicitly declare the defaultNetwork.
7. One of the most important thing i learned during this course is to not understand the syntax or what functions are available in a library, but rather what functions / methods does and to find other methods which can be used to optimize the code. For instance, during the `Network in Hardhat` section, it is shown that we can configure our own network (of testnets or by using other RPC urls) but when i tried using the code, it didn't work. I researched for a bit and found out other methods which does the same thing (also, the methods he showed were not available somehow or must be deprecated).
8. In js, if there is an object that exist and we cast it as a boolean, i.e. we cast it under the if statement, the result will be true unless the object does now exist. For instance:
	```
	if (name-of-object) {
		// run some code if the object exist
	}
	```
9. When using `hre` as a parameter whilst creating a task, it is necessaary to know that hre (hardhat runtime environment) does the same thing as `const var-name = require("hardhat");`. Using the hre argument will enable the function to access the libraries from hardhat like ethers, and more.
10. Whenever we create a task, we need to specify the task location (the .js file which contains the task) to the `hardhat.config.js` file. For instance, if we have a task file as `blockNumber.js` and we need to use the task, we can do it by adding the task in the `hardhat.config.js` file as: `require([RELATIVE-PATH]/blockNumber);`
11. Using the localhost RPC url is a good way to debug the code. We also need not mention the account(s) and the chainId is 31337.
12. Console is the js environment for us to run js commands to interact with any blockchain. Using it as a debugger to execute small amount of codes as: `yarn hardhat console --network localhost`
13. `mochajs` is a feature-rich js test framework running on nodejs and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
14. `describe()` is a function which is recognized by hardhat and mocha. It takes in two parameters: A string, and a function (preferably an anonymous function). The describe function contains beforeEach() function and it() functions. Before the `it()` block is executed,  the `beforeEach()` function is checked. The `describe()` function can be nested. Take this site as a [reference](https://hardhat.org/tutorial/testing-contracts)
15. When testing the code by using the in-built task `yarn hardhat test`, we can sometimes have multiple it() blocks but would only want to work on a single one of them. For such cases, we can use the --grep attribute and specify the keyowrd of the test we are doing. For instance, for the code:
	```
	describe("test-name", () => {
		[variable-declaration]
		
		beforeEach(async function () {
			// use it to initialize the contract of something
		})
		
		it("test-case-1-description", async function () {
			// checking or testing using mochajs
		})

		it("test-case-2-description", async function () {
			// checking or testing using mochajs
		})

		.
		.
		.
	})
	```
	Suppose we need to only test the `test-case-2-description` and it includes a word 'store', then we can use the following command to only run that particular test as:  
	`yarn hardhat test --grep "store"`  
	Another way we can do it is by using the `only` keyword after the it method, i.e. 
	```
	it.only("test-case-n-description", async function () {
		// checking or testing using mochajs
	})
	``` 
	By using the only keyword, we can only run that particular test when calling the test task.
16. We can use a library from hardhat called as 'gas-reporter' that is used to estimate the gas prices for a function during the test run. To add it, simply use the command: `yarn add --dev hardhat-gas-reporter`  
	After the library has been added, we need to configure our `hardhat.config.js` file. We need to include the library as: `require("hardhat-gas-reporter");` and then need to set up the a json inside the `module.exports` as `gasReporter` which can contain many key/value such as:
	```
	gasReporter: {
		enabled: true // this allows the library to estimate the gas prices for our test
		outputFile: "[file-name]" // saves the estimated gas prices to the given file-name instead of displaying it on the terminal
		noColors: true, // When the gas prices are stored in a file rather than showing on terminal, sometimes, the colors are screwed so we can use this to disable the color option
		currency: "[country-code]" // Displays the estimated gas price in the given currency (country-code)
		coinmarketcap: [api-key] // To display the price of ether in given currency, we need to pull the data from the website 'coinmarketcap' and we need the api
		token: "[network-token]" // This is given to provide the estimation of how much it would cost to deploy the contract in the said network
	}
	```
	More about this on: https://www.npmjs.com/package/hardhat-gas-reporter
17. `solidity-coverage` is another useful library used to check how much of the solidity code is used for testing. It also has more features including what percentage of the code is being used along with creation of a webpage which shows the code usage in a simplistic manner. To install it, we can simply do it so by: `yarn add --dev solidity-coverage`  
	Once the library has been installed, we can then add it to our hardhat config file by doing: `require("solidity-coverage");` 
	This will result in a new task addition, called the 'coverage' which can be called to check the code usage. `yarn hardhat coverage`
	So, the way it shows the stats is by:  
	1. `% Stmts` shows the percentage of the used statements from the file.  
	2. `% Branch` shows the percentage of the used control statements from the file.  
	3. `% Funcs` shows the percentage of the used functions from the file.  
	4. `% Lines` shows the percentage of the used lines from the file.  
	5. `Uncovered Lines` shows the lines which are not used, and they are seperated by commas.  

	There may be more functionality from the library which can be discovered from [here](https://www.npmjs.com/package/solidity-coverage)
18. Waffle is an advanced framework for testing smart contracts. More about [this](https://hardhat.org/hardhat-runner/docs/guides/migrating-from-hardhat-waffle)
19. First, we need to have a good practice in programming, then we can move on to making a good documentation of the project. We need to learn how to make a decent README page, which can be done with the help of [this repo](https://github.com/othneildrew/Best-README-Template)
20. This lesson along with the next two lessons are crucial to learn how this blockchain technology works in general and how we can use different libraries to make our life easier.

> **REMINDER TO RE-READ ALL THESE NOTES IN THE FUTURE AS IT CONTAINS ALL THE THEORETICAL TO TECHNICAL STUFF THAT WILL BE USEFUL IN ONE WAY OR ANOTHER.**

<a href="#lesson-6-hardhat-simple-storage">Back to top of Lesson 6</a>

# Lesson 7: Hardhat Fund Me

(keywords: linting, mocking, stubbing, hardhat-deploy, style guide, natspec format, memory location, function order in solidity)

1. Eslint is a tool used to find and fix problems in our js code. It can be added to the project directory by using the following command: `npm init @eslint/config`. More about this on [their website](https://eslint.org/)
2. Linting is the process of running a program that will analyze code for potential errors.
3. Solhint is an open-source project for linting solidity code. More about this on [their github page](https://github.com/protofire/solhint)
4. Whenever you use npm/yarn to add packages to your package folder and if the package looks something like this:  
	`npm install @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers`  
	OR  
	`yarn add @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers`  
	It usually means the dependencies we are trying to install, `hardhat-deploy-ethers` is overriding the package `@nomiclabs/hardhat-ethers`. This can also be observed in the `package.json` file where we can see the version of the package, `@nomiclabs/hardhat-ethers`, has now changed to, `npm:hardhat-deploy-ethers`.
5. Instead of exporting a function like:
	```
	async function deployFunc (hre) {
		// code here
	}

	module.exports.default = deployFunc;
	```
	we can simply export an anonymous function like:
	```
	module.exports = async (hre) => {
        // code here
	}
	```
	To define classes, methods, etc from library, we can simply do:
	```
	module.exports = async({ getNamedAccounts, Deployments }) => {
		// equivalent to:
		// module.exports = async (hre) => {
		//	const { getNamedAccounts, Deployments } = hre;
		// }  
	}
	```
6. Understand the concept of `Mocking`. The simple gist of mocking in terms of unit testing is:  
	1. Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects. To isolate the behavior of the object you wamt to test you replace the other objects by mocks that stimulate the behavior of the real objects. This is useful if the real objects are impractical to incorporate into the unit test.  
	2. In short, mocking is creating objects that stimulate the behavior of the real objects.  
	3. There is some subtle difference between mocking and stubbing. The stub implements just enough behavior to allow the object under test to execute the test.
	
	More about [this](https://stackoverflow.com/questions/2665812/what-is-mocking)

7. Deploying contracts on the testnet is the last thing we should do. To do all our testing and fiddling with the code, we can deploy the contract locally. One of the thing we are trying to achieve in this part of the lesson is to remove the use of `AggregatorV3Interface`. The address we sent to the interface before was used specifically for the testnet (sepolia in our case).
8. The price of ETH varies depending on the chain in which we interact. For example, the price of ETH on the Ethereum mainnet is different as compared to the price of ETH on the sepolia testnet and so on.
9. On the part `Mocking and helper-hardhat-config` portion of the lesson, one of the things we learnt is how not to hardcode the data feeds on our contract. When we used the Remix IDE, we used the address of the ETH/USD price feed address for the sepolia testnet. We had to hardcode the address on our `PriceConverter.sol` (the address in question was: 0x694AA1769357215DE4FAC081bf1f309aDC325306, this address is used to fetch the price of ETH on the sepolia testnet). In this part, we then delcared an argument on our constructor on `FundMe.sol` and then we refactored our code to take in the address of the price feed as an argument so that we won't have to change in the address of the price feed everytime have to test our code, be it locally or on a testnet.
10. So before the `Solidity Style Guide` portion of the video, we have achieved much more information on how to connect to different chains, be it locally or using testnets. We also learnt how to configure the network. All of this has been possible with the help of the `hardhat-deploy` library whose repo can be found in [this repo](https://github.com/wighawag/hardhat-deploy). The basics for the library can be learnt from [this repo](https://github.com/wighawag/tutorial-hardhat-deploy). Some of the things we did in this part include:  
	1. In the `helper-hardhat-config.js` file we configured the networks which we will be using. For instance, we used the local network and the sepolia testnet for our contracts to deploy to. We also declaerd some constants: `developmentChains` represents the local networks which we used, `DECIMALS` to declare the decimal digits for the priceFeed, `INITIAL_ANSWER` to initialize the price for the ETH / USD priceFeed using the `MockV3Interface` which is our own chain of the priceFeed to get the price of the currency.  
	2. In the `contracts/test/MockV3Aggregator.sol` file we imported the MockV3Aggregator from the [github repo](https://github.com/smartcontractkit/chainlink) (direct link to the solidity file is: `https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/tests/MockV3Aggregator.sol`). This file was imported to mimic the `AggregatorV3Interface` interface we used for getting the price for the ETH / USD in our testnet(s). This is the cruical part that introduced the concept of `Mocking` in unit testing.  
	> **NOTE: When testing our contract locally, we need to add in a `NamedAccounts` configuration on our `hardhat.config.js` file which might look something like this:**

	```
		module.exports = {
			// other configurations declaration
			namedAccounts: {
				deployer: {
					default: 0,
				},
				user: {
					default: 1,
				}
			}
		}
	```
	3. In the `contracts/FundMe.sol` and `contracts/PriceConverter.sol` file, we refactored the code such that the code didn't consist of only one address for priceFeed (sepolia's ETH / USD) argument, instead we added a constructor parameter that would take in the address for the priceFeed which introduces flexibilty to our program. We can now simply test our contract on any network and without having to change the address on the `AggregatorV3Interface` method which was previously used in the `PriceConverter.sol`.  
	4. In the `eploy/00-deploy-mocks.js` file, we wrote a simple program that is used to deploy the contract in the local network. It should also be noted that in the args key, we provided a list of values, `DECIMALS` and `INITIAL_ANSWER` because the contract we forked from github (MockV3Aggregator) required the two arguments in the constructor.  
	5. In the `deploy/01-deploy-fund-me.js` file, we have a similar code as that to described in point #iv. One of the major difference seen is the use of conditional statement which was used to check whether the deployement is being done locally or on a testnet. This is why we have initialized the `developmentChains` with a list ["hardhat", "localhost"]. If we were trying to test the contract on our local network, we used the `deployments.get("contract-name")` method which is used to retrieve information about a previously. It allows us to access the deployment details, such as the contract's address and the transaction hash of the deployment. The breakdown of the method's usage is given below, as described by chatGPT:
	```
	deployments: This is an object provided by Hardhat that represents the deployment manager. It contains various methods and properties related to contract deployments.
	
	get("contract-name"): This is the method of the `deployments` object that retrieves information about a specific contract deployment. You need to pass the name of the contract you want to retrieve the information for as a string parameter. This method returns an object containing deployment details for the specified contract, including the address of the deployed contract and other relevant metadata.	
	```
	We also created another conditional statement that checks if the contract is deployed locally or on a testnet. If we were to deploy the contract on the testnet, we called the verify method defined and discussed next.  
	6. In the `utils/verify.js` file, we defined function which takes in two arguments: `contractAddress` and `args`. The first argument takes in the address of the deployed contract and the second argument takes in the arguments which is used to initialize the contract's constructor. We used the `hardhat run` task to programmatically verify our contract and if the contract was already verified, it would fallback and notify the user about the contract's previous verification.  
11. We need to get low level understanding of Solidity programs as well. But first, we need to familiarize ourselves with the style guide of a Solidity program which is explained in detail in [this site](https://docs.soliditylang.org/en/latest/style-guide.html). One thing that is not mentioned in the style guide is the appropriate spot for error declaration, but it is optimal to declare it after all the import has been done. For instnace, 
	```
	// Sample code
	// SPDX-License-Identifier: MIT
	pragma solidity ^[version-number];
	
	// import declaration
	import "";
	import "";

	// error declaration
	error error-name(error-params);

	// interfaces/libraries initialization 

	// contract initialization
	```
	It should be noted that the `error-name(error-params)` should preferably be declared as `[contract-name]__[error-name](error-params)`
12. One of the way to write comments on the solidity file is by using the `NatSpec Format`. In this format, we use the comments by:
	```
	// sample code
	// all the declaration stuff to be done

	// we can declare the natspec format in two ways

	// first way
	/// @title [Title of the project]
	/// @author [Name of the author]
	/// @notice [Some info about the contract]

	// second way
	/** @title [Title of the project]
	*   @author [Name of the author]
	*   @notice [Some info about the contract]
	*   @dev [Some info to the dev about the program]
	*/
	```
	One advantage of using the NatSpec Format is it can automatically generate a documentation for both the users and the devs based on the comments written in the program. More about this on [the website](https://docs.soliditylang.org/en/develop/natspec-format.html)
13. We will be working with two kinds of testing on a usual basis: Stage testing and Unit testing. Unit testing are done locally and Stage testing are done on a testnet.
14. `deployments.fixture(["tag-name"])` is an method that is used to retrieve a deployment fixture based on the tag-name provided. A fixture represents a snapshot of the deployment state at a particular point in time.
15. Till the `Gas III` portion of the video, we learnt about many different aspects of testing a contract. Some of the key things we covered in this section is:  
	1. ONE MAJOR THING TO KEEP IN MIND IS THAT THE CODE IS RELATIVELY DIFFERENT THAN THE CODE FROM THE VIDEO. THESE CHANGES WILL BE FIRST NOTED AND THEN ONLY OTHER MINOR CHANGES WILL BE MENTIONED  
	2. We didn't have to mention `ethers.utils.parseEther("value")`, but rather we can just access it by using `ethers.parseEther("value")` (It seems as if the ethers.parseEther() method is only available in hardhat's version of ethers)  
	3. The code in the video was `await deployments.fixture(["all"])` but we assigned a variable to it as `const deploymentsResponse = await deployments.fixture(["all"])`. This in turn results in a creation of object which consists all the contracts and their metadata. We mainly used it to access the address of the deployed contract as `const fundMe = deploymentsResponse["FundMe"].address` || `const contract = deploymentsResponse["contract-name"].address (syntax)`.  
	4. This is one of the bigger changes from the code in the video that took me personally a long time to figure out. In the video, the code used was `fundMe = await ethers.getContract("FundMe", deployer)`. This code was used to get the contract "FundMe" and deployer was probably used as a signer (It apparently means that the FundMe contract is connected to the deployer account). But we used the code `fundMe = await ethers.getContractAt("FundMe", fundMeAddress);`. This code is used to access the contract "FundMe" and the second argument is the address of the respective contract. This returns the contract type object and we can also access all of the properties and the methods of the contract, i.e. all the variables and functions defined in the function can be accessed once the contract has been retrieved. It should also be noted that the address of the contract is stored as `fundMe.target` (There is one way to enable the getContract method to get the contract and we can do it by installing the package as `yarn add --dev "@nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers"`)  
	5. When accessing the array type of the contract, we can do by also using the dot operator, but it seems like the way to access the elements of the array is by using the small brackets. For instance, if we have an array called `Funders` in the contract "FundMe", we can access it on our code by using `const funder = await fundMe.Funders(0);`.  
	6. HERE COMES ANOTHER MAJOR CHANGES. To access the balance of the contract/deployer, the code used on the video was `const fundBalance = await fundMe.provider.getBalance(fundMe.address)`. This code simply means that the variable fundBalance is stored with balance of the contract FundMe (which is stored in the variable `fundMe`) and the address of the contract is sent as a parameter. Apparently, when i tried to replicate the code, i got errors and had to do some research. The code which worked for me was `const fundBalance = await ethers.provider.getBalance(fundMeAddress)`. This code is much more easy to understand. It basically shows that the ethers object consist of a method provider which also has a method called getBalance. This method takes in an argument of the address of the contract and returns a bigNumber data type which is the balance of the contract.  
	7. By using the debug feature in VSCode, we were able to know the code
	```
		const transactionResponse = await fundMe.withdraw();
		const transactionReceipt = await transactionResponse.wait(1);
	``` 
	returned more to show that it seems. When we used the debug feature, we saw that the transactionReceipt is of the type object which consisted of many other objects. Out of them, the objects of our interest were gasPrice and gasUsed which we were to able to retrieve as 
	```
		const { gasUsed, gasPrice } = transactionReceipt;
	```
	Some more context to the code above: The withdraw function is defined in the contract which is used to withdraw "money" from the contract. This is why some gas was used in for the transaction and we needed to access the gasPrice and gasUsed to equate the overall fund which was deposited to the overall fund which was withdrawn.
16. `contract.connect(providerOrSigner)` returns a contract object but connected to the respective providerOrSigner. By passing in a Provider, this will return a downgraded contract which only has read-only access (i.e. constant calls). By passing in a Signer, this will return a contract which will act on behalf of that Signer.
17. So i observed an interesting thing while going through the portion `Testing Fund Me II`. I was trying to create an error where someone other than the deployer/owner was trying to withdraw the fund. One thing to keep in mind is, the `hardhat.config.js` has a key/value pair as:
	```
	namedAccounts: {
		deployer: {
			default: 0,
		},
		user: {
			default: 1,
		}
	}
	```
	and the code to test whether the withdraw process was done by the deployer or other is as:
	```
	it.only("only allows owner to withdraw", async () => {
			const accounts = await ethers.getSigners(); // returns the list of accounts in the hardhat / localhost node enabled by `yarn hardhat node`
			const attacker = accounts[1];
			// console.log(accounts);
			const attackerConnectedContract = await fundMe.connect(attacker);
			// await attackerConnectedContract.withdraw()
			await expect(attackerConnectedContract.withdraw()).to.be.reverted;
		})
	```
	Here, when we try to modify the value of attacker as `attacker = accounts[0]`, we get the following error: `AssertionError: Expected transaction to be reverted`. So the point i'm trying to make is, whenever we create accounts using the `getSigners` function, and the namedAccounts has the initialized value for deployer as 0, it automatically makes the `accounts[0]` as the deployer account.
18. Another change that has occured is with defining custom error and using the `expect(action).to.be.revertedWith("curstom-error-name")`. It seems that instead of using this as it was used in the video, we need to use another technique which is `expect(action).to.be.revertedWithCustomError(error-defined-contract, "custom-error-name")`. The error can be replicated from [here](https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5715)
19. (Optimization of gas usage can be achieved by efficiently using state variables or storage variables)  
	Storage in Solidity:  
	(Link to the official documentation explaining how these variables are stored: `https://docs.soliditylang.org/en/v0.8.20/internals/layout_in_storage.html`)  
    Explaination of state variable by chatgpt:
    ```
	Think of a state variable as a storage box within the smart contract. You can assign values to this box, and those values will persist between function calls or transactions. Whenever you need to access or update a particular piece of data within the contract, you use the corresponding state variable.  
	For example, let's say you have a smart contract that represents a simple bank account. You might have a state variable called balance that stores the amount of money in the account. This variable maintains its value across multiple transactions and function calls, allowing you to keep track of the account balance.

	Simply put, storage is a giant list which is associated to the respective contract (may differ for inherited contract). The storage contains 'slots' which is 32 bytes long in size and represents the bytes version of the object. For example, in the contract an variable is defined as `uint256 public favNumber; favNumber = 25;`, the conversion of 25 from decimal to hex is 19, so it is stored as "0x000...19". Similarly, for a boolean value which stores 'true', the hex equivalent stored in the slot is "0x000...1"   
	For dynamic values like mapping and dynammic arrays, the elements are stored using a hash function. From the documentation: 
	- For arrays, a sequential storage spot is taken up for the length of the array
	- For mappings, a sequential storage spot is taken up, but left blank  

	Constants and immutable variables are not in storage, but they are considered part of the core of the bytecode of the contract. When we have variables inside the function, those variables only exist for the duration of the function, so the variables declared inside the function are not found in the storage.
    ```
	Stackoverflow qna regarding `memory` type in solidiy: `https://stackoverflow.com/questions/33839154/in-ethereum-solidity-what-is-the-purpose-of-the-memory-keyword`. Some insightful things to keep in note is:
	```
	The Ethereum Virtual Machine has three areas where it can store items.

		The first is “storage”, where all the contract state variables reside. Every contract has its own storage and it is persistent between function calls and quite expensive to use.

		The second is “memory”, this is used to hold temporary values. It is erased between (external) function calls and is cheaper to use.

		The third one is the stack, which is used to hold small local variables. It is almost free to use, but can only hold a limited amount of values.

    	The fourth one is "calldata", which is an immutable, temporary location (similar to memory) where functions arguments are stored. It is recommended to try to use the calldata becuase it avoids unnecessary copies and ensures that the data is unaltered. Array and structs with calldata data location can also be returned from functions.	

		For almost all types, you cannot specify where they should be stored, because they are copied everytime they are used.

    	The types where the so-called storage location is important are structs and arrays. If you e.g. pass such variables in function calls, their data is not copied if it can stay in memory or stay in storage. This means that you can modify their content in the called function and these modifications will still be visible in the caller.
	```
	There are defaults for the storage location depending on which type of variable it concerns:
	- state variables are always in storage
	- function arguments are always in memory
	- local variables of struct, array or mapping type reference storage by default
	- local variables of value type (i.e. neither array, nor struct nor mapping) are stored in the stack

	This sample contract illustrates how storage is occupied by the state variables:
	```
	// SPDX-License-Identifier: MIT
	pragma solidity ^0.8.7;

	contract FunWithStorage {
    		uint256 favoriteNumber; // Stored at slot 0
    		bool someBool; // Stored at slot 1
    		uint256[] myArray; /* Array Length Stored at slot 2,
    		but the objects will be the keccak256(2), since 2 is the storage slot of the array */
    		mapping(uint256 => bool) myMap; /* An empty slot is held at slot 3
    		and the elements will be stored at keccak256(h(k) . p)

    		p: The storage slot (aka, 3)
    		k: The key in hex
    		h: Some function based on the type. For uint256, it just pads the hex
    		*/
    		uint256 constant NOT_IN_STORAGE = 123;
    		uint256 immutable i_not_in_storage;

    		constructor() {
        		favoriteNumber = 25; // See stored spot above // SSTORE
        		someBool = true; // See stored spot above // SSTORE
        		myArray.push(222); // SSTORE
        		myMap[0] = true; // SSTORE
        		i_not_in_storage = 123;
    		}

    		function doStuff() public {
        		uint256 newVar = favoriteNumber + 1; // SLOAD
        		bool otherVar = someBool; // SLOAD
        		// ^^ memory variables
    		}
	}
	```

	To test the above code, we need to save the code as `FunWithStorage.sol` (name of the contract is that in the js file from Patrick's repo). The js file looks like:

	```
	const { network, ethers } = require("hardhat");
	const { developmentChains } = require("../helper-hardhat-config");
	const { verify } = require("../utils/verify");

	module.exports = async ({ getNamedAccounts, deployments }) => {
			const { deploy, log } = deployments;
			const { deployer } = await getNamedAccounts();

     	 	log("----------------------------------------------------");
    	 	log("Deploying FunWithStorage and waiting for confirmations...");
    	 	const funWithStorage = await deploy("FunWithStorage", {
         	from: deployer,
         	args: [],
         	log: true,
         	// we need to wait if on a live network so we can verify properly
         	waitConfirmations: network.config.blockConfirmations || 1,
    	 	});
    
    	 	if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
         		await verify(funWithStorage.address, []);
    	 	}

    	 	log("Logging storage...");
     	 	for (let i = 0; i < 10; i++) {
         		log(
         			`Location ${i}: ${await ethers.provider.getStorageAt(funWithStorage.address, i)}`
         		)
    	 	}

    	 	// You can use this to trace!
    	 	// const trace = await network.provider.send("debug_traceTransaction", [
    	 	//     funWithStorage.transactionHash,
    	 	// ])
    	 	// for (structLog in trace.structLogs) {
    	 	//     if (trace.structLogs[structLog].op == "SSTORE") {
    	 	//         console.log(trace.structLogs[structLog])
    	 	//     }
    	 	// }
    	 	// const firstelementLocation = ethers.utils.keccak256(
    	 	//     "0x0000000000000000000000000000000000000000000000000000000000000002"
    	 	// )
    	 	// const arrayElement = await ethers.provider.getStorageAt(
    	 	//     funWithStorage.address,
    	 	//     firstelementLocation
    	 	// )
    	 	// log(`Location ${firstelementLocation}: ${arrayElement}`)

    	 	// Can you write a function that finds the storage slot of the arrays and mappings?
			// And then find the data in those slots?
	}

	module.exports.tags = ["storage"]
	```
	The script is written inside the `deploy` folder. This progrm is useful in observing how the storage section allocates the state variable and how it takes up the slots in the storage.
20. For more info about opcodes and how much do these [opcodes require gas](https://github.com/crytic/evm-opcodes)
21. Two opcodes: `0x54 ---> SLOAD (Load word from the storage)` and `0x55 ---> SSTORE (Store word from the storage` takes 800 and 20000 gas respectively. These opcodes are the ones we will be dealing with a lot more during smart contract development.
22. A good convention to write variable names is by prefixing it with the type of area the variable will be stored to. If the variable will be stored in storage, it is better to write the variable name as `s_[variable-name]`.
23. Function order is solidity is as follows:  
	1. constructor  
	2. receive  
	3. fallback  
	4. external  
	5. public  
	6. internal  
	7. private  
	8. view/pure 
 
	This is the order of the function definition which is preferred in a `*.sol` contract.

24. Ternary operator is used in a similar fashion in js as in python. It is equivalent to if...else statement.
	```
	let variable = true;
	let someVar = variable ? "some-value-if-true" : "some-value-if-false"
	```
	is equivalent to the code
	```
	if (variable) {
		someVar = "some-value-if-true";
	} else {
		someVar = "some-value-if-false";
	}
	```
25. Adding scripts to package.json, a dictionary contained inside module.exports that can run commands as:
	```
	"scripts": {
		"test": "yarn hardhat test"
	},
	```
	So when we enter `yarn test`, it will be equivalent to writing `yarn hardhat test`.
26. Some useful links to learn about git and github:
	- https://docs.github.com/en/get-started/quickstart
	- https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
	- https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git
	- https://www.youtube.com/watch?v=RGOj5yH7evk

<a href="#lesson-7-hardhat-fund-me">Back to top of Lesson 7</a>

# Lesson 8: HTML / Javascript Fund Me (Full Stack / Front End)

(keywords: )

1. When building Dapps, we usually have 2 repos:  
	1. One for the smart contracts.  
	2. One for the front end / website  
	
	> **Full stack = Smart Contracts (backend/blockend) + html / javescript / website stuff (front end)**

2. How websites work with web3 wallets:  
	1. The `Sources` section inside the `inspect element` option shows us that the webpage that has metamask and phantom installed have `window.ethereum` and `window.solana` object accessible in the console. Whenever such wallet's extension are installed, they are injected into a window object in javascript.  
	2. We can add networks (such as hardhat, localhost, etc) and connect wallets used for testing locally.  
	3. We can then connect to the browser wallet to get access to the blockchain (like ethereum and solana).
	
	(localhost == 127.0.01 == loopback // just terminologies)  
	It might seem like the `window.ethereum` works on some specfic sites and not on others (on firefox). The issues has been discussed [here](https://github.com/MetaMask/metamask-extension/issues/5916).

3. live-server is a must to have `window.ethereum` option in the console (on the webpage we are creating, if we open it through the file/finder, we are not able to use the `window.ethereum` command).
4. If we find the difference between ES6 (Front End js) vs Nodejs, we need not worry as when we move to more advanced front ends, the syntax will be more similar to Nodejs if we're familiar with that.
5. In nodejs, we used the `yarn add [--dev]` operation to install dev-dependencies, but we use different synatx for html. 
6. To send transaction, we need:  
	1. a provider / connection to the blockchain  
	2. a signer / wallet / someone with gas  
	3. a contract that we are interacting with  
	4. ABI and Address  
7. We need to change the type attribute of script tag from `text/javascript` to `module` in order to imoort the ethers library and perform events directly from js file by using the DOM (by using the document.getElementById method). 
8. From ethereum documentation:  
	Importing on Web Browser: It is generally better practice (for security reasons) to copy the [ethers library](https://cdn.ethers.io/lib/ethers-5.1.esm.min.js) to your own webserver and serve it yourself.
9. `console.log(ethers)` provides a ethers object in our front end. What i mean by this is, when we imprt the ethers library [from the site](https://cdn.ethers.io/lib/ethers-5.1.esm.min.js) and import it as follows: 
	```
	import { ethers } from "https://cdn.ethers.io/lib/ethers-5.1.esm.min.js"
	// another way to import is by copying the code and saving it on any js file 
	// preferably on the same directory with the file name "ethers-5.1.esm.min.js"
	// import { ethers } from "./ethers-5.1.esm.min.js"

	console.log(ethers);
	```
	Doing so will allow us to get access to the ethers object which shows all the methods and properties of the said object.
10. We need to configure the hardhat-network (which we run using the `yarn hardhat node`) to be able to use the abi which we can get from the: `artifacts/contracts/[contract-name].sol/[contract-name].json`
 
	> **NOTE that this is found from the directory in which we have initialized the hardhat development environment.**

11. While sending an transaction, we want some sort of indication that the transaction has been successful. For that, we either need to listen for the transaction to be mined or we need to listen for an event. 
12. A Promise function takes in two parameters, resolve and reject. The resolve function is called when the Promise function "works correctly", otherwise the reject function is called. I stll haven't know much on the promise function and how it works with the `listenForTransactionMine` function where we used it to mine the transaction. Visit these links to get the reference:
	- https://docs.ethers.org/v5/api/providers/provider/#Provider-once 
	- https://stackoverflow.com/questions/8300844/what-does-return-this-do-within-a-javascript-function
13. If we do not have to place anything between the tags, we can just end the tag by:  
	`<input attribute-1="value-1" attribute-2="value-2"... />`
14. The recap portion of this lesson is a must to revisit and understand the basics of how the interaction is done between the contracts with the Metamask and the front end portion.

<a href="#lesson-8-html--javascript-fund-me-full-stack--front-end">Back to top of Lesson 8</a>

# Lesson 9: Hardhat Smart Contract Lottery

(keywords: events and emits, bloom filters, indexed params / Topics, automation, verifiable random function (VRF), oracle and the oracle problem, enum, logging)

1. This is by far the longest lesson, so a brief overview of what we will be doing is:  
	1. We are creating a Lottery / Raffle type of application where users can enter in lottery.  
	2. After sucessfully entering in the lottery, the number of people entered is updated.  
	3. After the lottery session has ended, a random number is drawn through which the winner is decided and the address of the winner is displayed and the winner gets all the fund for raffle.  
	4. Some links from chainlink we will be using:
	
	- [Chainlink VRF](https://docs.chain.link/vrf/v2/subscription/examples/get-a-random-number)
	- [Chainlink Automation](https://docs.chain.link/chainlink-automation/compatible-contracts)

	We created an empty project this time with only the `hardhat.config.js` and we manually added the devDependencies which is:
	```
	yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
	```
2. We need to emit an event when we update a dynamic array or mapping. Some of the things we need to learn about events are:  
	1. Logging and Events in Solidity  
	2. Viewing Events on Etherscan  
	3. Events in hardhat
	  
	So, what is logging or logs in general:
	```
	Log: It is possible to store data in a specially indexed data structure that maps all the way up to the block level. This feature called "logs" is used by Solidity in order to implements events. Contracts cannot access log data after it has been created, but they can be efficiently accessed from outside the blockchain. Since some part of the data is stored in "bloom filters", it is possible to search for this data in an efficient and cryptographically secure way, so network peers that do not download the whole blockchain (so-called "light-clients") can still find these logs.
	```
	
	> **NOTE: Logs and Events are often used synonymously. Events allow us to "print" stuff to this log in a gas efficient manner than saving it into storage variable. These logs are stored in a special kind of data structure, hence why smart contract cannot access them. Each one of these events are tied to the smart contract or account address that emitted this event.**  

	An example of an event will be:
	```
	event storedNumber(
		uint256 indexed oldNumber,
		uint256 indexed newNumber,
		uint256 addedNumber,
		address sender
	);
	```
	Whenever we emit an event, there are two kinds of parameter, indexed and non-indexed parameters. We can have upto 3 indexed parameter and they are called "Topics". Indexed parameters are searchable. We need to emit the data in order to store it in the logging data structure of the EVM. We need to do something like this to achieve that: 
	```
	emit storedNumber(
		favoriteNumber,
		_favoriteNumber,
		_favoriteNumber + favoriteNumber,
		msg.sender
	);
	```
	An event is broken down into components as:  
	- The address of the contract or the account the event is emitted from.
	- The topics or the indexed params of the event
	- The data (abi encoded non-indexed params of the event)
3. It is a good practice to switch between writing contracts, deploying it and testing it as we write functions. 
4. So, I tried to write a contract, deploy it and test it all by myself (by taking reference to the old project `hardhat-fund-me`), and the breakdown of the keypoints is described below:  
	1. The procedure goes as: 
    	
		`writing contract ---> deploying it on locally ---> testing it locally ---> testing it on a testnet ---> deploying it on a testnet`
        
		Also it is a good practice to test our contract frequently as we add functions to test their functionality.
	2. We first write in the contract all the function that are required for the contract to run without any errors. We then define the functions for the contract.  
	3. We need to configure the `hardhat.config.js` file for deploying and testing purpose (see previous projects to take in the reference) and optionally, we can setup `helper-hardhat-config.js` to define some other params like networkConfig (which contains the chainId, network name, and more), some constants which could be used as the params for the constructor.  
	4. We need to create a directory `deploy` which contains the files which are later deployed. These files contains code which basically is used to deploy the contract. At the end of the code, we can provide tags to the specific files so as to test them either independently or as a whole. (See notes on Lesson 7 where the usage and syntax of tags are shown).  
	5. Then finally, we can start writing the testing code in the test directory. Normally it is a good practice to have `unit` and `staging` directory, former for the local testing purpose and the latter one for testing on the testnet. For this section too, it is a good practice to refer to previous projects to get a brief overview of how testing is done.  
5. In the chainlink VRF portion of the video, there is a tutorial on how to use the chainlink VRF to generate random numbers and store them in the contract [link to the video](https://www.youtube.com/watch?v=rdJ5d8j1RCg&t=21s). To learn more about how the VRF provides a random value which is verifiable and cryptographically provable, see through [this repo](https://github.com/smartcontractkit/chainlink/tree/develop/contracts/src/v0.8/vrf)
6. Inside the `VRFCoordinatorV2Interface` contract, there is a function called `fulfillRandomWords()` which is a virtual function. We have also inherited from the said contract to our Raffle.sol file and so our contract is the child contract. We have also defined a function with the same name as is in the base contract but we specified the modifier to override in our child contract. This is done as the virtual function is expecting to get overridden by the function defined in the child contract. Another function found inside the VRFCoordinatorV2Interface interface is the requestRandomWords() in which there are some parameters which are described below as per the documentation:  
	1. keyHash: It's type is byte32. The gas lane key value, which is the maximum gas price you are willing to pay for a request in wei. It functions as an ID of the off-chain VRF job that runs in response to requests.  
	2. s_subscriptionId: It's type is uint64. The subscription ID that this contract uses for funding request.  
	3. requestConfirmations: It's type is uint16. How many confirmations the Chainlink node should wait before responding. The longer the node waits, the more secure the random value is. It must be greater than the `minimumRequestBlockConfirmations` limit on the coordinator contract.  
	4. callbackGasLimit: It's type is uint32. The limit for how much gas to use for the callback request to your contract's `fulfillRandomWords()` function. It must be less than the `maxGasLimit` limit on the coordinator contract. Adjust this value for larger requests depending on how your `fulfillRandomWords()` function processes and stores the received random values. If your `callbackGasLimit` is not sufficient, the callback will fail and your subscription is still charged for the work done to generate your requested random values.  
	5. numWords: It's type is uint32. How many random values to request. If you use several random values in a single callback, you can reduce the amount of gas that you spend per random value. The total cost of the callback request depends on how your `fulfillRandomWords()` function processes and stores the received random values, so adjust your `callbackGasLimit` accordingly.  
7. One of the issue we can face while selecting a random winner is how to use the the reponse randomWords which we receive. The received random Word will be something like `96211555037020642640658107586154307767199849506315010914375614268641033832383,81200987721012504974265019580491777552052119967100710965693636700153428539982` (There are two numbers present in here) which is a large number and we can't really do much with this value. One way to make use of this number for our Raffle project is to do the modulo operation, i.e. we receive the randomWords and divide it by the length of the players array which contains all the address of the wallet that has entered the raffle/lottery. 
8. `https://docs.chain.link/chainlink-automation/introduction` provides a brief introduction on how the oracles / automation node are used to automate a smart contract. We can do this in one of two way, either the `Time-based trigger` and `Custom logic trigger`. `https://www.youtube.com/watch?v=dj0impNJdls` provides a detailed walkthrough on how to automate the contracts. There are two function for automation, checkUpkeep() and performUpkeep(). As the name suggests, the former one is used to check for the given interval, defined as:
	```
	function checkUpkeep(bytes calldata checkData) external override returns (bool upkeepNeeded, bytes memory performData) {
		upkeepNeeded = ( block.timestamp - lastTimeStamp ) > interval;
		
		// We don't use the checkData in this example
		// checkData was defined when the Upkeep was registered
		performData = checkData;
	}

	function performUpkeep(bytes calldata performData) external override {
		lastTimeStamp = block.timestamp;
		counter = counter + 1; // this is the automation part
		
		// We don't use the performData in this example
		// performData is generated by the Keeper's call to your 'checkUpkeep' function
		performData;
	}
	```
9. Some key concepts on what oracles are and how they function (based on the [this article](https://ethereum.org/en/developers/docs/oracles/) and an example code has been given demonstrating how oracles fetches the data from the off-chain network and stores it in the blockchain which can be found on [this site](https://medium.com/@pedrodc/implementing-a-blockchain-oracle-on-ethereum-cedc7e26b49e). A short explanation has been given below which is fetched from the ethereum site: 
	```
    So how does an oracle function: An oracle is typically made up of smart contract running on-chain and some off-chain components. The on-chain contract receives requests for data from other smart contracts, which it passes to the off-chain component (called an oracle node). This oracle node can query data sources, using application programming interface (APIs), for example, and send transactions to store the requested data in the smart contract's sotrage.  
    ```
	I made an step-by-step transition to simplify the above explanation:  
	    `Smart contract on network A ---> Request data from smart contracts on network B (hybrid smart contract) ---> pass the request to the off-chain components (oracle node) ---> get the required data (fetch the data from reliable APIs) ---> send transaction to store the data in smart contract`

	> **Note that this is MY understanding of what an oracle is and how it communicates with mainnet or other on-chain network. This may or maynot be a valid diagram.**
	
	One of the problem we encounter while using oracles or famously known as the "Oracle Problem" is:  
	- How do we verify that the injected information was extracted from the correct source or hasn't been tampered with?  
	- How do we ensure that this data is always available and updated regularly?  

    The so-called "oracle problem" demonstrates the issues that come with using blockchain oracles to send inputs to smart contracts. It is critical to make sure that the data from an oracle us correct or smart contract execution will produce erroneous results. Also important is the need for trustlessness, having to "trust" oracle operators to reliably provide accurate information robs smart contracts of their defining qualities. 

	An oracles merits should be measured based on how it handles some of the key challenges as:  
	- Correctness: An oracle should not cause smart contracts to trigger state changes based on invalid off-chain data. For this reason, an oracle must guarantee authenticity and integrity of data, authenticity means the data was gotten from the correct source, while integrity means the data data remained intact (i.e. it wasn't altered) before being sent on-chain.  
	- Availablility: An oracle should not delay or prevent smart contracts from executing actions and triggering state changes. This quality requires that data from an oracle be available on request without interruption.  
	- Incentive compatibility: An oracle should incentivize off-chain data providers to submit correct information to smart contracts. Incentive compatibility involves attributaability (something that is capable of indicating or explaining a cause) and accountability. Attributability allows for correlating a piece of external information to its provider, while accountability bonds data providers to the information they give, such that they can be rewarded or penalized based on the quality of information provided.  
10. To re-learn all the fundamentals in a brief manner, refer to [this site](https://ethereum.org/en/developers/docs/). It contains all the necessary links to the pages which provides a good and brief explanation of the blockchain terminologies along with examples to try them out to grasp the knowledge. In short, the official ethereum website provides a deep knowledge on the blockchain network and the protocols along with how to implement it whereas chainlink docs provides a good overview of the concepts and the products they have made (which are really good).
11. The `bytes calldata checkData` param of the checkUpkeep function allows us to basically call any function or anything of the contract when we call the checkUpkeep function. In the checkUpkeep function, we have provided a note which has one of the following point, "4. The lottery should be in an open state". What we mean by this is whenever the time allocated for the participation of the lottery has ended, the lottery should then be set to "close" state, until then the lottery should be in the "open" state. But this is a broad generalization. When we consider all the possible events, it could be in one of these states: pending, open, closed, calculating, and much more. We could use an boolean literal if we only have two possible states, and for multiple possible states, we could use the `Enums` type. Enums can be used to create custom types with a finite set of custom value. Enums require at least one member, and its default value when declared is the first member. Enums cannot have more than 256 members. An example is:
	```
	enum RaffleState { OPEN, CALCULATING } 
	// similar to defining uint256 where 0 = OPEN and 1 = CALCULATING
	```
12. It is a good practice to initialize the boolean literal as: `bool var-name = (variable1 <logical operator> variable2);`
13. To make the checkUpkeep function accessible to all the people viewing the contract, we need to declare it public (can also make it view). We then utilized the initialization of the bool on one line to check if the contract is open or not, if enough time has passed (we initialize the interval), if there was any player participating in the raffle and if there was any money funded in the contract and store it in upkeepNeeded as: `bool upkeepNeeded = (isOpen && timePassed && hasPlayers && hasBalance)`. When the `performUpkeep` function is called, it checks if the upkeepNeeded variable is true or false by calling the function as: `(bool upkeepNeeded, ) = checkUpkeep("");`. If the bool returned is false, we revert the error and the function is terminated. If the upkeepNeeded returned is true, the vrfCoordinator object calls  the requestRandomWords method to generate a random word which will be used to determine the winner for the raffle/lottery. Also, whenever the winner is selected, we need to reset the lastTimeStamp to the latest block by: `s_lastTimeStamp = block.timestamp; // block is also one of the global variable` and the players array is also reset with a new address which is payable and is pointing to the first index. As the time stamp of the contract and the interval used to initiate the trigger are much more of the contract's variable, we declare them outside the state variables.
14. It is generally a good practice to create a documentation of the contract we are writing after the contract has been written. When setting up the getter / setter section, whenever we need to get the data of some variable that has constant value, we can replace the view modifier with the pure modifier as data of the said variable will not be stored in the storage area but rather stored in the bytecode of the contract.

> **NOTE: IT IS ALMOST IMPOSSIBLE FOR ANY SMART CONTRACT DEVELOPER TO WRITE A SMART CONTRACT WITHOUT USING THE DOCUMENTATION AND WITH NO ERRORS (I believe this goes same for other programming languages too).**

15. After writing the contract and deploying it locally, DO NOT DEPLOY IT ON THE TESTNET IMMEDIATELY. After sucessfully deploying it locally, do the unit testing and staging test to check all the functions if they are working as intended or not.
16. To learn more about the features provided by hardhat for networking and stuff, refer to [this site](https://hardhat.org/hardhat-network/docs/reference). Added this because i need `evm_increaseTime` (moving forward in time or something like time travel) and `evm_mine` (to mine another block) function when testing the contract.
17. To imitate calling a function that is public and not view without sending any transaction, we need to use the callStatic method (which has now changed to staticCall method). The way to use it to call a function is by: `await [contract-name].[method-name].staticCall([params-for-the-method]);`  
	Also, when we need to send in empty bytes value to the function which requires bytes value argument, say, performUpkeep and checkUpkeep functions in our `raffle.sol` contract, we can do it by one of the three ways:  
	1. `await raffle.checkUpkeep.staticCall(new Uint8Array());` which creates a new unsigned 8 bits array object.  
	2. `await raffle.checkUpkeep.staticCall("0x");` which is used as a empty bytes object.  
	3. `await raffle.checkUpkeep.staticCall([]);` which sends in empty param. THIS METHOD DID NOT WORK FOR ME. Somehow, this worked in the video but did not work when i tried it which sends in empty param.
	
	One of the thing to remember when writing test codes is that we do not need to declare the function as `async` in the `describe` block, but is required when we use it in the `it` block.

18. Whenever we are testing the contract and we define a custom error which gives out different values as the error is reverted, we can check for the exact error when testing our code. What i mean by this is, if we have a contract which has an error as:
	```
	error error-name(error-params)

	function function-name(function-params) visibility modifier(s) returns(return-type) {
		if (conditiion-not-met) {
			revert error-name(error-params);
		}
	}
	```
	Now, what we can do in the testing phase is:
	```
	describe("description", () => {
		it("specific-task", async () => {
			await expect(contract.function-name(function-params)).to.be.revertedWithCustomError(
				variable-that-contains-the-contract,
				`error-name(specific-error-params)`
			);		
		})
	})
	```
19. When a function emits an event, the details about the event is stored in the transaction receipt of the function which is being transacted (called). Say that there is an event described in the contract as follows:
	```
	// setting up the contract

	event event-name(event-params);

	function function-name(function-params) visibility modifier(s) {
		emit event-name(event-params);
	}
	```
	Now, when we are testing the contract, and we need to get the detail of the event, we can do it in a couple of ways:  

	1. Using the `filters` and `queryFilter` methods:
	```
	const txResponse = await contract.function-name(function-params);
	const txReceipt = await txResponse.wait(1);

	const filter = contract.filters.event-name();
	const eventLogs = await contract.queryFilter(filter);
	console.log(eventLogs); // returns a list of events that are emitted

	eventLogs.forEach((log) => {
		console.log(log);
	})
	```

	2. Using the `logs` method:
	```
	const txResponse = await contract.function-name(function-params);
	const txReceipt = await txResponse.wait(1);

	console.log(txReceipt.logs[0]); // does not have the property `args` (when following the tutorial)
	console.log("----------- Getting Another Log -------------------");
	console.log(txReceipt.logs[1]); // has the property `args` (when following the tutorial)
	```
20. Promise's syntax is:
	```
	await new Promise(async (resolve, reject) => {
		contract.once("name-of-the-event", async () => {
			// executes once the listener finds the event
			try {
				// some assertions when you're doing tests
				// resolve(); // the promise returns the resolve function
			} catch (e) {
				// console.error(e);
				// reject(e); // the promise returns the rejected reason
			}
		})
		// code that triggers the event 
	});
	```
	So what this means is that the Promise returns one of three possible values: pending, accepted and rejected. When the promise is in pending state, the Promise is neither resolved nor rejected. When the Promise is in accepted state, the Prmoise has been resolved and when the promise is in rejected state, the promise is rejected.

	> **LEARN ABOUT PROMISES IN JS AND REVIEW `Massive Promise Test` PORTION OF THE VIDEO AGAIN TO TAKE NOTES**

21. The `performUpkeep` and `fulfillRandomWords` functions are also called but their transactions are not shown in the transaction section of the etherscan (sepolia etherscan in my case with the address of: 0xf9bFF35Fa75Ba2fC9d1779b32D0f543fE56c4973) but rather shown in the Internal Transaction section as they are not called by the current contract but is called through the VRFCoordinatorV2 for `fulfillRandomWords` and called through the RegistryContract for `performUpkeep`.

<a href="#lesson-9-hardhat-smart-contract-lottery">Back to top of Lesson 9</a>

######################### Completed Hardhat Basics ###########################################

# Lesson 10: NextJS Smart Contract Lottery (Full Stack/ Front End)

(keywords: )

> **SKIPPING THIS LESSON AS THE VIDEO REFERS TO NEXTJS 12, WHICH IS COMPLETELY DIFFERENT FROM NEXTJS 13**

<a href="#lesson-10-nextjs-smart-contract-lottery-full-stack-front-end">Back to top of Lesson 10</a>

# Lesson 11: Hardhat Starter Kit

(keywords: )

1. This section is concerned more towards the starter kit that one can use as a boiler plate.
2. The [repo](https://github.com/smartcontractkit/hardhat-starter-kit) contains many contracts along with mocks and tests. 

<a href="#lesson-11-hardhat-starter-kit">Back to top of Lesson 11</a>

# Lesson 12: Hardhat ERC20s

(keywords: ERC (Ethereum Request for Comments), EIP (Ethereum Improvement Proposals))

1. [Ethereum EIP](https://eips.ethereum.org/) keeps tracks all the new ethereum improvemnet proposals and we can see the real time adaptation of these proposals in the community.
2. ERC20 is a smart contract that represents a token. But why make an ERC20 token? Here are some of the reasons listed:
    1. Governance Tokens
    2. Secure an underlying network
    3. Create a synthetic asset, and many more
3. [EIP20](https://eips.ethereum.org/EIPS/eip-20) provides in-depth explanation of the methods for transfer of tokens.
4. [OpenZeppelin](https://openzeppelin.com) is considered (almost) as a standard library for solidity. All of their contracts are open source and can be found in their [repo](https://github.com/OpenZeppelin).
5. OpenZeppelin helps in creating ERC20 (along with ERC721, etc) using few lines of code.
6. Tokens and layer 1 tokens are two different things. One of the difference between them is, a token is just a smart contract whereas a layer 1 token is a blockchain in and of itself/ blockchain native tokens.
7. Similar to openzeppelin, there is another alternative called "solmate" that attempts to be a standard library for solidity.
8. Tokens have a map called "allowance" that allows other addresses to have access to one's token and help move tokens around. This is important for DeFi as it allows smart contracts to interact with it's users addresses to transfer tokens.

<a href="#lesson-12-hardhat-erc20s">Back to top of Lesson 12</a>

# Lesson 13: Hardhat DeFi & Aave

(keywords: )

1. What is DeFi? Well, it stands for "Decentralized Finance" and is one of the popular use case of smart contracts. As we have learnt till now, smart contracts are decentralized contracts that run on blockchains and anyone can see those contracts. This ensures no centralized party to have access to the user's contracts and hence minimizes foul play (not irony).
2. There is a huge potential for smart contracts to get in other markets than just DeFi. Some of them listed in the videos with their market value is:
    1. Gold (~10 trillion)
    2. Stock Market (~90 trillion)
    3. Global Real Estate (~280 trillion)
    4. Derivatives (~1 quadrillion)
3. [Defi llama](https://defillama.com) provides a data of total value/money locked in decentralized protocols.
4. Here we will be using Aave. Aave is a protocol that allows borrowing and lending of tokens in the form of collateral. It is non-custodial as the provider (Aave) has no acces to the money that is locked in the protocol. 
5. Some agenda of this lesson is:
    1. Deposit collateral (ETH/WETH)
    2. Borrow another asset (DAI (DAI is a stable coin))
    3. Repay the DAI
    We will mostly be working on protocols rather than creating our own contracts.
6. The aave protocol treats everything as an ERC20 token, even though not all of them fall under that category.
7. Whenever we transfer ethereum (deposit/withdraw), it is sent to WETH protocol where the ethereum is transformed into an ERC20 form with the help of Wrapped Ethereum (WETH). 
8. Forking of mainnet is a technique in hardhat where we run a local node that is pretending to be a mainnet node. More about this on this [article](https://hardhat.org/hardhat-network/docs/guides/forking-other-networks) on the official hardhat website.
9. So this gist of forking is, the blockchains (mainnet, testnet, etc) all are public and people can see the transactions (money sent/received, contracts deployed, etc). What forking does is, it copies the blockchain to our local node where we have full control of the blockchain. Anything done to the forked version does not affect the mainnet (basically acts as simulation of blockchain).
10. Forking does not necessarily mean that we are copying the entire blockchain into our machine (that would take > 1 TB of storage anyway). What we do is just pull off a portion of the blockchain, specifically the portion that we specify in the address field (usually address of the contract).
11. Some of the pros and cons are:
    - Pros - Quick, easy, similar behavior to that on mainnet
    - Cons - API required, Complex contracts are harder to deal with
12. Apparently, we need to provide a signer when we have to interact with a contract. In the tutorial, the deployer can access the contract through the `getContractAt` method, but this raises an error which can be resolved when we send in the signer instead of a deployer.
13. [This site](https://docs.aave.com/risk/asset-risk/risk-parameters) provides a detailed information on how aave provides the functionality of borrowing and lending while taking the collateral of the user into account.
14. To learn more about liquidation and health factor, [this site](https://docs.aave.com/developers/guides/liquidations) offers an in-depth explanation on the topics.
15. So far, the things we did in this lesson are: 
    Pre-requisite: All of this was done using the forked contracts from the mainnet so we could recreate our own local mainnet with the deployed contracts. 
    1. We created our own token of ERC20 form, wrapped it around the WETH (converting our ETH to WETH) form so that the token can be traded.
    2. We have to get the address of the lending pool given by the lending pool address provider.
    3. We then have to check and approve the ERC20 (Approving is important as it enables the contract to interact with the token) token we will be depositing as a collateral so that we can borrow other tokens.
    4. Once the lending pool has been created, there are functions defined in the lending pool contract which can provide user data, such as the total collateral deposited, how much can the user borrow (other tokens), how much the user is in debt and many more.
    5. By deposting the token, we can access the borrow feature that enables us to borrow other token and based on it, we get interest on the token too.
16. For reading from a contract, we don't need a signer, but when sending data to a contract, we do need a signer. (When using the ethers.getContractAt() function)
17. Make sure to refer to the github repo of the tutorial to get more insight on how DeFi works (like [this site](https://speedrunethereum.com/)) and how it can be implemented.

<a href="#lesson-13-hardhat-defi--aave">Back to top of Lesson 13</a>

# Lesson 14: Hardhat NFTs

(keywords: )

1. Non-Fungible Token (NFT) or [ERC721](https://eips.ethereum.org/EIPS/eip-721) is a token standard that is created on the ethereum platform. One of the ways these tokens are different from ERC20 token is by how the token are valued as. For instance, 1 ethereum (or 1 WETH) will always remain as is, same thing for real world currency, 1 dollar will always be equal to 1 dollar. Think of NFTs as "digital art", the real world equivalent would be something like the artwork of Mona Lisa and other pieces of art. NFTs contains the data of the current owner, previous owner, the price for the said NFT and much more.
2. One more thing to keep in mind is, NFTs can act more than a digital artwork. They can have different properties (stats, etc) and can be used to battle and more.
3. ERC20 provides a functionality of mapping, where the address maps to the corresponding value of the said address. But in case of ERC721, there exist unique token ids, which maps to a unique owner, and it also provides token URI.
4. In the early days of NFTs, the images (NFT) were directly stored on the blockchain, and images are relatively larger compared to simple transactions, hence the gas required to store it in blockchain was deemed infeasible. To overcome this, URI were introduced which acts as an API which when called provided all the information and metadata about that NFT.
5. One of the things that need to be understood, for the backend part is what each directory/files of the lessons we've done until now represents. The directories we used commonly are:
    1. Contracts: This directory contains the files which are the contracts. When we write all of these contracts and compile them using `yarn hardhat compile`, it creates two additional directories: `Artifacts` and `Cache`. These directories contains the information like ABI of the contract which can be used in our project.
    2. Deploy: This directory contains the files which are used to deploy the contract (be it on localhost/hardhat-local-node or to testnet/mainnet) and can be used as an interface with the frontend. We can deploy the contract on hardhat using `yarn hardhat deploy`. We can provide tags to individual files on the deploy directory and then use the command `yarn hardhat deploy --tags tag1,tag2...`. This is done when there is a need to only deploy the files which we are interested in.
    3. Test: This directory contains the files which are used for testing of the contract or the deployed contract. Before deploying the contract on the mainnet (or sometimes in the testnet as it consumes energy too), it is always a better option to test the functionality of the contract beforehand. To test the contract, we use the command `yarn hardhat test`. We use the [mocha module](https://mochajs.org/) as it is a feature rich module that contains the required methods for unit testing as well as staging testing.
    4. Utils: This directory contains the files which are used as modules for the better readability of the code. We commonly used this directory to interact with third party dependencies (websites like chainlink for vrf/automation/etc, pinata for ipfs, etc) and to verify the contract in the mainnet/testnet. 
    5. Scripts: This directory contains the files which are usually to interact with a protocol (for interacting with the aave protocol on DeFi, etc). We can use the command `yarn hardhat run scripts/{filename}` to run the script and check the output. Some other use case might be to withdraw and fund the contracts using the scripts as a means of automation. 
    6. hardhat.config.js: Like any other config files, this file contains all the necessary information of the program and is the place that the hardhat module first looks into. Some common usage of this file for the project is for the declaration of the networks, the compiler version for the solidity code, the api keys for the access of third party dependencies and much more.
    7. helper-hardhat-config.js: This file contains information about the network and it's configuration. Not much sure about the usage of this file, but it seems like it should contain data which are needed for the network to interact with other third party dependencies (like the declaration of theparameters that is required for the chainlink vrf (gasLane, callbackGasLimit, etc) to operate on localhost/hardhat-local-node or testnets like sepolia or on mainnet).
    8. .env: This file contains all the api key-value pair which can be read by the the "dotenv" module.
6. We wrote 3 contracts to generate NFT:
    1. Basic NFT
    2. Random IPFS NFT
        - Pros: Cheap
        - Cons: Someone needs to pin our data
    3. Dynamic SVG NFT
        - Pros: The data is on chain
        - Cons: much more expensive
7. What it takes to build a random ipfs nft, a breakthrough of what we have done:
    1. Contract: We defined a RandomIpfsNft contract which inherits from VRFConsumerBaseV2 (To generate a random word), ERC721URIStorage(To create a token), Ownable (To provide the `onlyOwner` modifier which is used to withdraw the funds for the contract). We defined the necessary variables, type declaration section to enumerate the types of dogs that can be minted, chainlink vrf variables which are required to initiate the vrf contract call and return random words, vrf helpers to map the nft to their respective address (owner that minted the nft), nft variables required to call the `_safeMint` function which mints an nft. We defined two events for the contract, `NftRequested` and `NftMinted` which are used to emit these events when an nft is requested to be minted and when the nft has been minted. Constructor needs to be declared, for the main contract as well as for the parent contracts like VRFCoordinatorV2 contract. `requestNft` is a payable function which is used to generate a random word and store it in the mapping (uint256 => address) to store the random word and their mapping to the corresponding caller. After receiving the random words, the event `NftRequested` is emitted. In the `fulfillRandomWords` function, we request for the random word and the owner of the `requestId` is stored in the `dogOwner` variable, and we assigned the `tokenCounter` to the `newTokenId`. From the random words that was generated, we then use the modulo operation to only generate 1 of 3 possible cases (the 100 percent case is split into 3 distinctly probable cases), and store it inside the `moddedRng` variable. This is then passed to the enum to generate our random nft and we increased the `tokenCounter`. We then called the `_safeMint` function to generate the token, `_safeTokenURI` function to set the `_tokenURI` of `tokenId`. The event `NftMinted` is emitted by calling this function. `getBreedFromModdedRng` function is used to get the probable chance of the getting a certain token and then return the corresponding breed. The `withdraw` funtion, as usual checks for the owner of the contract and if true, allows the withdrawal of the funds on the contract.  
    2. Deploy: For the deploy portion of the RandomIpfsNft contract, we initialized the necessary configuration for the local deployment of the contract. We programmatically stored the images on IPFS and pinned it using the pinata api. We stored the program to store and pin the image on the utils directory as `uploadToPinata.js`. The function `storeImages` takes the input of the directory containing the image and the method `readdirSync` is used to provide all the files inside the provided directory. We then iterate through the files, used the method createReadStream to read the stream of bits of the file. the `options` parameter is a must for the method `pinFileToIPFS` which is used to pin the file to IPFS (InterPlanetary File Storage) and store each of the pinned file in the `responses` array. The `responses` array is then iterated to store the necessary parameters obtained from the `pinFileToIPFS` method (mainly the IpfsHash value which contains the hash value for the file on IPFS) and stored it in a json format. `storeTokenUriMetadata` is used to pin the json format which contains the information about the file and it's metadata as a hash value on IPFS. This results in tokenURI for the file.   
    3. Test: The test portion of this section is self-explanatory. Just browse through the code and if stuck in a portion, try to brainstorm it.
8. One of the usage of the dynamic SVG NFT is, we can have certain condition to reveal an NFT and other condition to reveal another NFT. This is achieved because the NFT is stored directly in the blockchain, but it requires more gas fee and is more expensive method to store an NFT.
9. Encoding, Opcodes and Calls: 
    1. `abi.encodePacked(args)` takes multiple arguments and concatenates them into one single bytecode and this function returns the bytes data type which can be typecasted into string as follows: `string(abi.encodePacked(args))`. For instance: `string(abi.encodePacked("Hello, ", "World!))` returns a string that reads "Hello, World!". But to only concatenate strings, solidity 0.8.12+ provides a function for string called `concat` which can be used as `string.concat(arg1, arg2,...)`. It must be remembered that concatenation is one of the usage of this method, but the general usage of this method is to transform the given input to it's respective byte code. This method is similar to the `abi.encode(args)` method but one of the difference is `ani.encode(args)` returns the result with the zero padding and the former one does not pad the result with zeroes. For more info on this, [read this](https://forum.openzeppelin.com/t/difference-between-abi-encodepacked-string-and-bytes-string/11837)
    2. To decode the encoded value, we can use the `abi.decode(input, (decode-type/s))` which takes in an encoded data as input and decodes it into the either int, string, etc as given in the decode type. If there are multiple inputs, we can specify multiple decode-type and assign it to that number of variable. Note that this method cannot be used to decode an packed encoded bytes value, such can be decoded directly by typecasting. For more on this, check out this [repo](https://github.com/PatrickAlphaC/hardhat-nft-fcc/blob/main/contracts/sublesson/Encoding.sol)
    3. For some visual aid on how transaction works in ethereum, [this page](https://github.com/PatrickAlphaC/hardhat-nft-fcc/tree/main/contracts/sublesson/img) provides an simple explanation. The vague form of it is, when we deploy a contract, the data portion of the transaction contains the contract initialization code and the byte code whereas when we call a function, the data field contains the information about what to send to the "To" field of the transaction. [This images](https://github.com/PatrickAlphaC/hardhat-nft-fcc/blob/main/contracts/sublesson/img/6-function-call.png) gives a good representation about the transaction fields.
    4. Solidity has "low-level" keywords like `call` and `staticcall`. `call` is used when we want to change the state of the blockchain and `staticcall` is used when we want to call a function that is pure or virtual, i.e. calling funciton which does not change the state of the blockchain.
        - In case of call function, it looked something like this, `addresss.call{value: address(this).balance}("")` which basically breaks down to: the curly brackets represents the transaction field of the calling address, and the small brackets represents the data field for calling a function, which is empty, meaning no function was called.
    5. In order to call a function using only the data field of call, we need to encode down to the binary level these things:
        - The function name
        - The paramters we want to add
        
		Each function in a contract is assigned a identifier called as function ID, which is also known as a "function selector". The function selector is the first 4 bytes of the "function signature". The function signature is a string that defines the function name and the parameters. For instance, if we have a function called `function store(address, uint256)`, then it is the function signature and it's corresponding function selector may be `0xabcdef12`, which is of 4 bytes/32 bits as a hex value is represented by 4 bits. More about this on the following [repo](https://github.com/PatrickAlphaC/hardhat-nft-fcc/blob/main/contracts/sublesson/CallAnything.sol)

10. What it takes to build a dynamic svg nft, a breakthrough of what we have done:
    1. Contract: On the file `DynamicSvgNft.sol`, we defined the way to create an ERC721 token, which takes the data from the chainlink AggregatorV3Interface which is used to get the price feed. As usual, we have a token counter which tracks the number of token that has been created, and since our contract generates NFT based on the high value given while minting, we have stored the nft for when the price feed is lower than the input high value or when the price feed is higher than the input high value. We created a mapping for the key-value as tokenId-highValue. On the constructor, we provided the path for the two image files (we called `svgToImageURI` function which encodes the image file into Base64 format. More detail on this encoding is provided in the contract file) and initialized the AggregatorV3Interface. For minting the nft, we have made it free of charge, and once the `_safeMint` function mints the token for the `msg.sender` sucessfully, the token counter is incremented and event `CreatedNFT` is emitted. The tokenURI function, which is defined in the `ERC721.sol` file (overridden by our contract) is used to provide a tokenURI for our tokenId. This function checks the high value with the current price feed of eth/usd and if the high value is greater than price feed, one unique image is minted and if it is lower, another unique image is minted. This function also encodes the image description in json format which includes the image name, image description, image attributes and the image URI (which contains the image location). We have defined some other getter function at last.
    2. Deploy: For the deployment of the contract on localhost/hardhat/testnet, we configured the file `03-deploy-dynamic-svg-nft.js` file in the deploy directory which gets the deployment information such as chain id, the deployer and contract verifying functions. We got the AggregatorV3 address for the eth/usd price feed. The two images file path is read using the `readFileSync` function from the fs library. From these values, we initialized the constructor for our contract and verified it if the contract is deployed in the testnet.  
    3. Test: The test portion of this section is self-explanatory. Just browse through the code and if stuck in a portion, try to brainstorm it.
11. One thing to keep in mind is to refer to the [repo](https://github.com/smartcontractkit/full-blockchain-solidity-course-js#lesson-14-hardhat-nfts-everything-you-need-to-know-about-nfts) to understand more about the ethereum network and other interesting videos.

<a href="#lesson-14-hardhat-nfts">Back to top of Lesson 14</a>

# Lesson 15: NextJS NFT Marketplace (Full Stack / Front End)
(keywords: )

1.

<a href="#lesson-15-nextjs-nft-marketplace-full-stack--front-end">Back to top of Lesson 15</a>

<a href="#table-of-content">Table of Content</a>
