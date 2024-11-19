/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  AntekIsERC20,
  AntekIsERC20Interface,
} from "../../contracts/AntekIsERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001da438038062001da48339818101604052810190620000379190620002cb565b816040518060400160405280600f81526020017f416e74656b204d6e6d20546f6b656e00000000000000000000000000000000008152506040518060400160405280600381526020017f4d4e4d00000000000000000000000000000000000000000000000000000000008152508160039081620000b591906200058c565b508060049081620000c791906200058c565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200013f5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040162000136919062000684565b60405180910390fd5b62000150816200016060201b60201c565b50806006819055505050620006a1565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000258826200022b565b9050919050565b6200026a816200024b565b81146200027657600080fd5b50565b6000815190506200028a816200025f565b92915050565b6000819050919050565b620002a58162000290565b8114620002b157600080fd5b50565b600081519050620002c5816200029a565b92915050565b60008060408385031215620002e557620002e462000226565b5b6000620002f58582860162000279565b92505060206200030885828601620002b4565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200039457607f821691505b602082108103620003aa57620003a96200034c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003d5565b620004208683620003d5565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200046d62000467620004618462000438565b62000442565b62000438565b9050919050565b6000819050919050565b62000489836200044c565b620004a1620004988262000474565b848454620003e2565b825550505050565b600090565b620004b8620004a9565b620004c58184846200047e565b505050565b5b81811015620004ed57620004e1600082620004ae565b600181019050620004cb565b5050565b601f8211156200053c576200050681620003b0565b6200051184620003c5565b8101602085101562000521578190505b620005396200053085620003c5565b830182620004ca565b50505b505050565b600082821c905092915050565b6000620005616000198460080262000541565b1980831691505092915050565b60006200057c83836200054e565b9150826002028217905092915050565b620005978262000312565b67ffffffffffffffff811115620005b357620005b26200031d565b5b620005bf82546200037b565b620005cc828285620004f1565b600060209050601f831160018114620006045760008415620005ef578287015190505b620005fb85826200056e565b8655506200066b565b601f1984166200061486620003b0565b60005b828110156200063e5784890151825560018201915060208501945060208101905062000617565b868310156200065e57848901516200065a601f8916826200054e565b8355505b6001600288020188555050505b505050505050565b6200067e816200024b565b82525050565b60006020820190506200069b600083018462000673565b92915050565b6116f380620006b16000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a61161009757806395d89b411161006657806395d89b4114610262578063a9059cbb14610280578063dd62ed3e146102b0578063f2fde38b146102e0576100f5565b8063715018a6146102025780637bf322701461020c5780637cb64759146102285780638da5cb5b14610244576100f5565b806323b872dd116100d357806323b872dd146101665780632eb4a7ab14610196578063313ce567146101b457806370a08231146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b6101026102fc565b60405161010f91906110e9565b60405180910390f35b610132600480360381019061012d91906111a9565b61038e565b60405161013f9190611204565b60405180910390f35b6101506103b1565b60405161015d919061122e565b60405180910390f35b610180600480360381019061017b9190611249565b6103bb565b60405161018d9190611204565b60405180910390f35b61019e6103ea565b6040516101ab91906112b5565b60405180910390f35b6101bc6103f0565b6040516101c991906112ec565b60405180910390f35b6101ec60048036038101906101e79190611307565b6103f9565b6040516101f9919061122e565b60405180910390f35b61020a610441565b005b61022660048036038101906102219190611399565b610455565b005b610242600480360381019061023d9190611425565b61059b565b005b61024c6105ad565b6040516102599190611461565b60405180910390f35b61026a6105d7565b60405161027791906110e9565b60405180910390f35b61029a600480360381019061029591906111a9565b610669565b6040516102a79190611204565b60405180910390f35b6102ca60048036038101906102c5919061147c565b61068c565b6040516102d7919061122e565b60405180910390f35b6102fa60048036038101906102f59190611307565b610713565b005b60606003805461030b906114eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610337906114eb565b80156103845780601f1061035957610100808354040283529160200191610384565b820191906000526020600020905b81548152906001019060200180831161036757829003601f168201915b5050505050905090565b600080610399610799565b90506103a68185856107a1565b600191505092915050565b6000600254905090565b6000806103c6610799565b90506103d38582856107b3565b6103de858585610847565b60019150509392505050565b60065481565b60006012905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61044961093b565b61045360006109c2565b565b610460338383610a88565b61049f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049690611568565b60405180910390fd5b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561052c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610523906115d4565b60405180910390fd5b6001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061059683671bc16d674ec80000610b32565b505050565b6105a361093b565b8060068190555050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105e6906114eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610612906114eb565b801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b5050505050905090565b600080610674610799565b9050610681818585610847565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61071b61093b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361078d5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107849190611461565b60405180910390fd5b610796816109c2565b50565b600033905090565b6107ae8383836001610bb4565b505050565b60006107bf848461068c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108415781811015610831578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610828939291906115f4565b60405180910390fd5b61084084848484036000610bb4565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108b95760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108b09190611461565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361092b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109229190611461565b60405180910390fd5b610936838383610d8b565b505050565b610943610799565b73ffffffffffffffffffffffffffffffffffffffff166109616105ad565b73ffffffffffffffffffffffffffffffffffffffff16146109c057610984610799565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109b79190611461565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008084604051602001610a9c9190611461565b60405160208183030381529060405280519060200120604051602001610ac291906112b5565b604051602081830303815290604052805190602001209050610b28848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060065483610fb0565b9150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba45760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610b9b9190611461565b60405180910390fd5b610bb060008383610d8b565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c265760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610c1d9190611461565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c985760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c8f9190611461565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610d85578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d7c919061122e565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ddd578060026000828254610dd1919061165a565b92505081905550610eb0565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e69578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610e60939291906115f4565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ef95780600260008282540392505081905550610f46565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fa3919061122e565b60405180910390a3505050565b600082610fbd8584610fc7565b1490509392505050565b60008082905060005b845181101561100c57610ffd82868381518110610ff057610fef61168e565b5b6020026020010151611017565b91508080600101915050610fd0565b508091505092915050565b600081831061102f5761102a8284611042565b61103a565b6110398383611042565b5b905092915050565b600082600052816020526040600020905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611093578082015181840152602081019050611078565b60008484015250505050565b6000601f19601f8301169050919050565b60006110bb82611059565b6110c58185611064565b93506110d5818560208601611075565b6110de8161109f565b840191505092915050565b6000602082019050818103600083015261110381846110b0565b905092915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061114082611115565b9050919050565b61115081611135565b811461115b57600080fd5b50565b60008135905061116d81611147565b92915050565b6000819050919050565b61118681611173565b811461119157600080fd5b50565b6000813590506111a38161117d565b92915050565b600080604083850312156111c0576111bf61110b565b5b60006111ce8582860161115e565b92505060206111df85828601611194565b9150509250929050565b60008115159050919050565b6111fe816111e9565b82525050565b600060208201905061121960008301846111f5565b92915050565b61122881611173565b82525050565b6000602082019050611243600083018461121f565b92915050565b6000806000606084860312156112625761126161110b565b5b60006112708682870161115e565b93505060206112818682870161115e565b925050604061129286828701611194565b9150509250925092565b6000819050919050565b6112af8161129c565b82525050565b60006020820190506112ca60008301846112a6565b92915050565b600060ff82169050919050565b6112e6816112d0565b82525050565b600060208201905061130160008301846112dd565b92915050565b60006020828403121561131d5761131c61110b565b5b600061132b8482850161115e565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261135957611358611334565b5b8235905067ffffffffffffffff81111561137657611375611339565b5b6020830191508360208202830111156113925761139161133e565b5b9250929050565b6000806000604084860312156113b2576113b161110b565b5b60006113c08682870161115e565b935050602084013567ffffffffffffffff8111156113e1576113e0611110565b5b6113ed86828701611343565b92509250509250925092565b6114028161129c565b811461140d57600080fd5b50565b60008135905061141f816113f9565b92915050565b60006020828403121561143b5761143a61110b565b5b600061144984828501611410565b91505092915050565b61145b81611135565b82525050565b60006020820190506114766000830184611452565b92915050565b600080604083850312156114935761149261110b565b5b60006114a18582860161115e565b92505060206114b28582860161115e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061150357607f821691505b602082108103611516576115156114bc565b5b50919050565b7f4e6f742057686974656c69737465640000000000000000000000000000000000600082015250565b6000611552600f83611064565b915061155d8261151c565b602082019050919050565b6000602082019050818103600083015261158181611545565b9050919050565b7f546f6b656e7320616c7265616479206d696e7465640000000000000000000000600082015250565b60006115be601583611064565b91506115c982611588565b602082019050919050565b600060208201905081810360008301526115ed816115b1565b9050919050565b60006060820190506116096000830186611452565b611616602083018561121f565b611623604083018461121f565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061166582611173565b915061167083611173565b92508282019050808211156116885761168761162b565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220a63d53a36cf11ed8bd02b14cb766379d08b244092393c05e3d8a6dd2362066c864736f6c63430008180033";

type AntekIsERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AntekIsERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AntekIsERC20__factory extends ContractFactory {
  constructor(...args: AntekIsERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _initialOwner: AddressLike,
    _merkleRoot: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _initialOwner,
      _merkleRoot,
      overrides || {}
    );
  }
  override deploy(
    _initialOwner: AddressLike,
    _merkleRoot: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_initialOwner, _merkleRoot, overrides || {}) as Promise<
      AntekIsERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AntekIsERC20__factory {
    return super.connect(runner) as AntekIsERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AntekIsERC20Interface {
    return new Interface(_abi) as AntekIsERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AntekIsERC20 {
    return new Contract(address, _abi, runner) as unknown as AntekIsERC20;
  }
}