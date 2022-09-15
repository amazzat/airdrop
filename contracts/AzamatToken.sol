// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AzamatToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("AzamatToken", "AZT") {
        _mint(msg.sender, initialSupply * 10 ** 18);
    }
}
