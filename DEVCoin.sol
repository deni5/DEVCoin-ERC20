// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";

contract DEVCoin is ERC20 {
    uint8 constant DECIMALS = 14;

    constructor() ERC20("DEVCoin", "DEV") {
        uint256 _supply = 8000000 * 10 ** uint256(DECIMALS);
        _mint(msg.sender, _supply);
    }

    function decimals() public override view returns (uint8) {
        return DECIMALS;
    }
}
