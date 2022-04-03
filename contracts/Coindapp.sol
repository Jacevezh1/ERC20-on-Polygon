// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Coindapp is ERC20 {
    constructor() ERC20("Coindapp", "CDAP") {
        _mint(msg.sender, 1000);
    }
}
