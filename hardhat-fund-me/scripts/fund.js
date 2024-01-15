const { getNamedAccounts, deployments, ethers } = require("hardhat");

async function main() {
	const { deployer } = await getNamedAccounts();
	const fundMeAddress = (await deployments.get("FundMe")).address;
	// console.log(fundMeAddress);
	const fundMe = await ethers.getContractAt("FundMe", fundMeAddress);
	console.log(`Funding contract of address: ${fundMeAddress}`);
	
	const transactionResponse = await fundMe.fund({ value: ethers.parseEther("0.5") });
	await transactionResponse.wait(1)

	// console.log(transactionResponse);
	console.log("Funded!");
}

main()
	.then(() => {
		console.log("This lesson took me 2 days :(");
		process.exit(0);
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
