import { ethers } from "./ethers-5.1.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const balanceButton = document.getElementById("balanceButton");
const withdrawButton = document.getElementById("withdrawButton");
const getOwnerButton = document.getElementById("getOwnerButton");
connectButton.onclick = connect;
fundButton.onclick = fund;
balanceButton.onclick = getBalance;
withdrawButton.onclick = withdraw;
getOwnerButton.onclick = getOwnerAddress;

console.log(ethers);

async function connect() {
	if (typeof window.ethereum !== "undefined") {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
		} catch(e) {
			console.error(e);
		}
		const accounts = await window.ethereum.request({ method: "eth_accounts" });
		console.log(accounts);
		connectButton.innerHTML = "Connected!";
	} else {
		connectButton.innerHTML = "Please install metamask";
	}
}

async function fund() {
	const ethAmount = document.getElementById("ethAmount").value;
	console.log(`Funding ${ethAmount} to...`);
	fundButton.innerHTML = "Funding...";
	if (typeof window.ethereum !== "undefined") {
		// provider / connection to the blockchain
		// signer / wallet / someone with gas
		// contract that we are interacting with
		// ^ABI and Address
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		// console.log(provider);
		// console.log(signer);
		const contract = new ethers.Contract(contractAddress, abi, signer);
		// console.log(contract);
		try {
			const transactionResponse = await contract.fund({ value: ethers.utils.parseEther(ethAmount)});
			await listenForTransactionMine(transactionResponse, provider);
			console.log("Done!");
		} catch(e) {
			console.error(e);
		}
		// await transactionResponse.wait(1);
		// console.log(transactionResponse);
		fundButton.innerHTML = "Funded";	
	}
}

function listenForTransactionMine(transactionResponse, provider) {
	console.log(`Mining ${transactionResponse.hash}...`);
	// listen for this transaction to finish
	return new Promise((resolve, reject) => {
		provider.once(transactionResponse.hash, (transactionReceipt) => {
			console.log(`Completed with ${transactionReceipt.confirmations} confirmations`);
			resolve();
		});
	})
	// return new Promise();
}

async function getBalance() {
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const balance = await provider.getBalance(contractAddress);
		console.log(ethers.utils.formatEther(balance));
	} else {
		console.log("Please install Metamask");
	}
}

async function withdraw() {
	if (typeof window.ethereum !== "undefined") {
		console.log("Withdrawing...");
		withdrawButton.innerHTML = "Withdrawing...";
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
		const balance = await provider.getBalance(contractAddress);
		try {
			const transactionResponse = await contract.cheaperWithdraw();
			await listenForTransactionMine(transactionResponse, provider);
			// console.log(transactionResponse);
			withdrawButton.innerHTML = "Withdrawn";
		} catch(e) {
			console.error(e);
		}
	}	
}

async function getOwnerAddress() {
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, abi, signer);
	
		console.log(provider);
		console.log(signer);
		const owner = console.log(await contract.getOwner());
		document.getElementById("ownerAddress").innerHTML = `${await contract.getOwner()}`;
	}
}
