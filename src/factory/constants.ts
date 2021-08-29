import { ContractAddresses, KnownContracts } from "./types";

export const CONTRACT_ADDRESSES: Record<number, ContractAddresses> = {
  1: {
    dao: "",
    amb: "",
    delay: "",
    factory: "",
    exit: "",
    scopeGuard: "",
  },
  4: {
    dao: "0x8f097901aE9A10Ff250A755eA1817f98aFF1eE5C",
    amb: "0xf04e9c4aE09fCBb6DF20F0717B08eE298761C770",
    delay: "0xb8215f0f08b204644507D706b544c541caD0ec16",
    factory: "0x569F2e024D0aD6bBfBd8135097DFa7D0641Ae79b",
    exit: "0xe1a55322aDE704208129E74E963fa25C8C257eD6",
    scopeGuard: "0x13d233567817E3a38B4082217E44CBa77c06Eb7f",
  },
  31337: {
    dao: "0x8f097901aE9A10Ff250A755eA1817f98aFF1eE5C",
    amb: "0xf04e9c4aE09fCBb6DF20F0717B08eE298761C770",
    delay: "0xb8215f0f08b204644507D706b544c541caD0ec16",
    factory: "0x569F2e024D0aD6bBfBd8135097DFa7D0641Ae79b",
    exit: "0xe1a55322aDE704208129E74E963fa25C8C257eD6",
    scopeGuard: "0x13d233567817E3a38B4082217E44CBa77c06Eb7f",
  }
};

export const CONTRACT_ABIS: Record<keyof KnownContracts, string[]> = {
  dao: [
    `function setArbitrator(address arbitrator) public`,
    `function setQuestionTimeout(uint32 timeout) public`,
    `function setQuestionCooldown(uint32 cooldown) public`,
    `function setMinimumBond(uint256 bond) public`,
    `function setTemplate(bytes32 template) public`,
    `function setAnswerExpiration(uint32 expiration) public`,
    `function setUp(bytes memory initParams) public`,
    `function initialized() public view returns (bool)`,
  ],
  amb: [
    `function setAmb(address _amb) public`,
    `function setChainId(bytes32 _chainId) public`,
    `function setOwner(address _owner) public`,
    `function setUp(bytes memory initParams) public`,
    `function initialized() public view returns (bool)`,
  ],
  delay: [
    `function setTxCooldown(uint256 cooldown) public`,
    `function setTxExpiration(uint256 expiration) public`,
    `function setUp(bytes memory initParams) public`,
    `function enableModule(address module) public`,
    `function txCooldown() public view returns (uint256)`,
    `function txExpiration() public view returns (uint256)`,
    `function getModulesPaginated(
      address start, 
      uint256 pageSize
    ) external view returns (
      address[] memory array, 
      address next
    )`,
    `function initialized() public view returns (bool)`,
  ],
  exit: [
    `function setUp(bytes memory initParams) public`,
    `function exit(uint256 amountToRedeem, address[] calldata tokens) public`,
    `function addToDenylist(address[] calldata tokens) external`,
    `function removeFromDenylist(address[] calldata tokens) external `,
    `function setDesignatedToken(address _token) public onlyOwner`,
    `function getCirculatingSupply() public view returns (uint256)`,
    `function initialized() public view returns (bool)`,
  ],
  scopeGuard: [
    `function setUp(bytes memory initParams) public`,
    `function checkTransaction(
      address to,
      uint256,
      bytes memory data,
      uint8 operation,
      uint256,
      uint256,
      uint256,
      address,
      address payable,
      bytes memory,
      address
    ) external view`,
    `function isAllowedToDelegateCall(address target) public view returns (bool)`,
    `function isAllowedFunction(address target, bytes4 functionSig) public view returns (bool)`,
    `function isScoped(address target) public view returns (bool)`,
    `function isAllowedTarget(address target) public view returns (bool)`,
    `function disallowFunction(address target, bytes4 functionSig) public returns (bool)`,
    `function allowFunction(address target, bytes4 functionSig) public`,
    `function toggleScoped(address target) public`,
    `function disallowDelegateCall(address target) public`,
    `function allowDelegateCall(address target) public`,
    `function disallowTarget(address target) public`,
    `function allowTarget(address target) public`,
    `function initialized() public view returns (bool)`,
  ],
  factory: [
    `function deployModule(
      address masterCopy, 
      bytes memory initializer,
      uint256 saltNonce
    ) public returns (address proxy)`,
  ],
};
