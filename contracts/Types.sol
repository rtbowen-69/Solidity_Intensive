// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Types1 {
  bool public boolean1 = true;
  bool public boolean2; // default false
  uint public myUint1 = 1;  //whole number cannot be negative
  uint public myUint2;  //default uint is 0
  uint256 public myUint3 = 1;  //same as uint
  uint8 public myUint4 = 1;  //same as uint256 just 8 bits
  uint16 public myUint5 = 1;  //same as uint256 just 16 bits
  int public myInt1 = 1; //Value Types
  int public myInt2;   //default int is 0
  int public myInt3 = -1; // can be negative

  // Other common types
  string public myString = "My String";
  bytes32 public myBytes32 = "My Bytes 32";
  address public myAddress = 0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5;


}
