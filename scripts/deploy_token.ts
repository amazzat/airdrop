import { ethers } from "hardhat";

async function main() {
  const AzamatToken = await ethers.getContractFactory("AzamatToken");
  
  const azamatToken = await AzamatToken.deploy(100);

  await azamatToken.deployed();

} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
