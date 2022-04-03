import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const Coindapp = await ethers.getContractFactory("Coindapp");
  const coindapp = await Coindapp.deploy();

  await coindapp.deployed();

  console.log("Coindapp deployed to:", coindapp.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
