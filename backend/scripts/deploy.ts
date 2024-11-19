import { ethers } from "hardhat";

//Types
import { AntekIsERC20 } from "../typechain-types";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

//whitelisted address
import { whitelisted } from "../utils/whitelisted";

async function main() {
 let contract: AntekIsERC20;
 let merkleTree: StandardMerkleTree<string[]>
 merkleTree = StandardMerkleTree.of(whitelisted, ["address"], {sortLeaves: true});

 const [owner] = await ethers.getSigners();
 contract = await ethers.deployContract("AntekIsERC20", [owner.address, merkleTree.root]);

 await contract.waitForDeployment();

 console.log(`AntekIsERC20 deployed to ${contract.target} with merkleRoot ${merkleTree.root}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
