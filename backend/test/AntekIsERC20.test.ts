import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect, assert } from "chai";
import { ethers } from "hardhat";

//Types généré automatiquement au niveau de hardhat
import  { AntekIsERC20 } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
//va me permettre de générer mes arbres de merkle en js
import { StandardMerkleTree } from "@openzeppelin/merkle-tree"
//whitelisted addresses
import { whitelisted } from "../utils/whitelisted";

describe("AntekIsERC20 Tests", function(){
  let contract: AntekIsERC20;
  //proprio du contrat intelligent et deux addresses
  let owner: SignerWithAddress; //whitelisted
  let addr1: SignerWithAddress; //whitelisted
  let addr2: SignerWithAddress; //NOT whitelisted

  //mon arbre de merkle
  let merkleTree: StandardMerkleTree<string[]>

  //création d'une fixture
  async function deployContractFixture(){
    //attribut les comptes aux addresses
    const [owner, addr1, addr2] = await ethers.getSigners();

    //je met l'arbre de merkle dans ma variable avec les address whitelistés dedans en triant les feuilles
    //CREATION de l'arbre de merkle
    merkleTree = StandardMerkleTree.of(whitelisted, ["address"], { sortLeaves: true});
    //je récup le contrat intelligent
    const contractFactory = await ethers.getContractFactory("AntekIsERC20");
    //je deploy le contract avec sur l'address du proprio avec la racine de l'arbre de merkle
    const contract = await contractFactory.deploy(owner.address, merkleTree.root)
    //je retourne le contrat déployé, l'arbre de merkle le proprio du contract et l'addresse 1 et 2
    return {contract, merkleTree, owner, addr1, addr2}
  }

  //on vérifie si le contract est bien déployé
  describe('Deployment', function(){
    it('should deploy the smart contract', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      //je récup la racine de l'arbre de merkle dans mon contract intelligent
      let contractMerkleTreeRoot = await contract.merkleRoot();
      //je peux vérifier ce que j'ai passé dans l'arg de mon contract est bien passé dans mon contract
      assert(contractMerkleTreeRoot === merkleTree.root);
      //je récup le owner du contrat intelligent
      let contractOwner = await contract.owner();
      //je vérifie le propriétaire
      assert(contractOwner === owner.address);
    })
  })

  // On test la fonctionnalitée de mint
  describe('Mint', function(){
    it('should NOT mint if NOT whitelisted | @openzeppelin/merke-tree library Test', async function(){
      //je récup mes infos de ma fixture
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      try {
        //je vais essayer de récup une proof avec une addr non whitelisted
        const proof = merkleTree.getProof([addr2.address])
        //on vérifie qu'il nous retourne une erreur (automatique reaction openzeppelin)
        expect.fail("Expected an error 'Error: Leaf is not in tree' but none was thrown")
      } catch(error) {
        const err = error as Error;
        expect(err.message).to.include('Leaf is not in tree')
      }
    })
    //on vérifie sur notre contrat (pas uniquement sur openzeppelin)
    it('should NOT mint if NOT whitelisted | contract Test', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      //on crée une preuve vide sans passé par merkletree de openzeppelin
      const proof: string[] = [];
      //on test si le contract nous répond bien un message d'erreur si l'address testé n'est pas whitelisted
      await expect(contract.connect(addr2).mint(addr2.address, proof)).to.be.revertedWith('Not Whitelisted');
    })
    //on test que l'utilisateur ne peut pas mint si il a déjà mint une fois
    it('should NOT mint tokens if tokens already minted', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      //je récup une preuve avec une address whitelisté cette fois ci
      const proof = merkleTree.getProof([addr1.address])
      //je fais un premier mint
      await contract.connect(addr1).mint(addr1.address, proof)
      //je vérifie qu'il revert si il retente
      await expect(contract.connect(addr1).mint(addr1.address, proof)).to.be.revertedWith('Tokens already minted');
    })
    //on va test le comportement normal, l'user est whitelisted et n'a pas encore mint
    it('should mint tokens if the user is whitelisted and has not minted yet', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      const proof = merkleTree.getProof([addr1.address])

      await contract.connect(addr1).mint(addr1.address, proof)
      //je récup combien de tokens possède maintenant mon address
      let balance = await contract.balanceOf(addr1.address);
      let expectedBalance = ethers.parseEther('2');

      assert(balance === expectedBalance);
    })
  })
  //on va vérifier si l'utilisateur peut modifier la racine de l'arbre de merkle
  describe('setMerkleRoot', function(){
    //ne change pas la racine de l'arbre de merkle si il n'est pas whitlisted
    it('should NOT set the merkle root if the caller is NOT the owner', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      //quand je viens avec l'addr1 faire un setMerkleRoot si on est pas le owner on ne peut pas modifier la route => retourne un customError de openzeppelin
      await expect(contract.connect(addr1).setMerkleRoot(merkleTree.root)).to.be.revertedWithCustomError(
        contract,
        "OwnableUnauthorizedAccount"
      ).withArgs(
        addr1.address
      )
    })
    //on doit pouvoir changer la racine de l'arbre de merkle si nous sommes proprio du contrat intelligent
    it('should set the merkle root if the caller is the owner', async function(){
      const { contract, merkleTree, owner, addr1, addr2} = await loadFixture(deployContractFixture)
      //on peut générer une fake avec chatgpt => commencer par 0x et 64 hexadecimals
      let newMerkleRoot = "0xd1000e3d5650743475aa0addfeef7e36cbfc4e060939615f4c3651e4b529d61c";
      //on tente de modifier la merkleroot par une nouvelle
      await contract.setMerkleRoot(newMerkleRoot);
      //je récup la merkleroot
      let contractMerkleRoot = await contract.merkleRoot()
      //ma merkleroot que je recup doit être égale à celle de mon contrat intelligent
      assert(newMerkleRoot === contractMerkleRoot);
    })
  })
})