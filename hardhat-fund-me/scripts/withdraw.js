const { deployments, getNamedAccounts, ethers } = require("hardhat");

async function main() {
	const { deployer } = await getNamedAccounts();
	const fundMeAddress = (await deployments.get("FundMe")).address;	
	console.log(`Withdrawing from contract address: ${fundMeAddress}`);
	
	const fundMe = await ethers.getContractAt("FundMe", fundMeAddress);

	const withdrawTransaction = await fundMe.withdraw();
	console.log("done")
}

main()
	.then(() => {
		console.log("Withdrawn Sucessfully");
		process.exit(0);
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
