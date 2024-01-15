const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
	console.log("Testing me");
	
	// The used provider below is to connect to Ganache network
	const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
	const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
	// we ditch the previous way of creating a wallet as it is vulnerable and unsafe to have a wallet without any encryption. Also check out `encryptKey.js` to learn about how to encypt a password and store it. One last thing to keep in note is that, after the encryption is done, we can remove the `PRIVATE_KEY` from the `.env` as we only need the `PRIVATE_KEY_PASSWORD` to decrypt it.
	/*const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
	let wallet = new ethers.Wallet.fromEncryptedJsonSync(
		encryptedJson, 
		process.env.PRIVATE_KEY_PASSWORD
	);
	// let is used as we still haven't connected the wallet to our provider, it just created an instance
	wallet = await wallet.connect(provider);*/	

	const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8"); 
	// The readFileSync was given two parameters: first one being the location of the abi/bin file to read synchronously and the second one was specifying the encoding type, which is utf8 in this case
	const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
	const contractFactory = new ethers.ContractFactory(abi, binary, wallet);		
	console.log("Tested!");
	
	const deploymentOptions = {
		gasLimit: '0x3d0900', // the gas limit is set to 4 million
	}
	// We created an json because of the gasLimit error! Futher explaination givern below
	// this error is because the estimateGas method cannot accurately determine the gas required for the transaction., 
	// manually specifying the gas limit when using genache can fix this. Hope this helps..	
		
	
	const contract = await contractFactory.deploy(deploymentOptions); // STOP! Wait for the contract to deploy!
	// console.log(contract); // contractFactory.deploy() returns a contract object
	const contractReceipt = await contract.deployTransaction.wait(1);
	console.log(`Contract Address: ${contract.address}`);
	const favNumber = await contract.displayNumber();
	console.log(`Current Favourite number is: ${favNumber.toString()}`);
	const transactionResponse = await contract.setNumber("4");
	const transactionReceipt = await contract.deployTransaction.wait(1);
	const updatedFavNumber = await contract.displayNumber();
	console.log(`Updated Favourite number is: ${updatedFavNumber.toString()}`);		
}

main()
	.then(() => {
		console.log("It works?");
		process.exit(0);
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});

// First contract created using the etherjs library. The address is: 0x60e45Cfbc132D8f99BF0d71a37cADeF63Bfb5493
