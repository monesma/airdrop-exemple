// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//permet d'avoir un propriétaire au contract intelligent
import "@openzeppelin/contracts/access/Ownable.sol";
//librairie permettant de gérer les arbres de merkle en solidity
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract AntekIsERC20 is ERC20, Ownable {
    //je défini tous mes whitelistés
    bytes32 public merkleRoot;
    //2 token de 18 décimals
    uint256 private constant MINT_AMOUNT = 2 ether;
    //mapping pour se souvenir qu'une address a mint (pour qu'il le fasse qu'une fois)
    mapping(address => bool) private hasMinted;
    //Dans la nouvelle version de Ownable on lui passe le proprio du contract et la racine de l'arbre de merkle
    constructor(address _initialOwner, bytes32 _merkleRoot)
        ERC20("Antek Mnm Token", "MNM")
        Ownable(_initialOwner)
    {
        merkleRoot = _merkleRoot;
    }

    /**
    * @notice Change the merkle root
    *
    * @param _merkleRoot the new merkle root
    **/
    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    /**
    * @notice Check if an address is whitelisted or not
    * 
    * @param _account The account checked
    * @param _proof The merkle proof
    *
    * @return bool return true if the address is whitelisted, false otherwise
    **/
    function isWhitelisted(address _account, bytes32[] calldata _proof) internal view returns(bool) {
        //applique un double hash sur notre account
        bytes32 leaf = keccak256(abi.encode(keccak256(abi.encode(_account))));
        //on utilise verify qui va utiliser en fonction d'une preuve qu'une feuille fait partie d'un arbre de merkle définit par sa racine
        return MerkleProof.verify(_proof, merkleRoot, leaf);
    }

    /**
    * @notice Allows a whitelisted user to mint tokens
    *
    * @param _to The token receiver
    * @param _proof The merkle proof
    **/
    function mint(address _to, bytes32[] calldata _proof) external {
        //on vérifie si il est whitelisté
        require(isWhitelisted(msg.sender, _proof), "Not Whitelisted");
        //on vérifie qu'il n'a pas recu son airdrop
        require(!hasMinted[msg.sender], "Tokens already minted");
        //on indique qu'il a minté
        hasMinted[msg.sender] = true;
        //on mint
        _mint(_to, MINT_AMOUNT);
    }
}