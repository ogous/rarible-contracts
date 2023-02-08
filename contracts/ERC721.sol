// contracts/KANJINFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KANJINFT is Ownable, ERC721("KANJINFT", "KNJ"){
    uint tokenId;
    mapping(address=>tokenMetaData[]) public ownershipRecord;
    
    struct tokenMetaData{
        uint tokenId;
        uint timeStamp;
        string tokenURI;
    }
    
    function mintToken(address recipient) onlyOwner public {
        require(owner()!=recipient, "Recipient cannot be the owner of the contract");
        _safeMint(msg.sender, tokenId);
        ownershipRecord[recipient].push(tokenMetaData(tokenId, block.timestamp, "https://ik.imagekit.io/bayc/assets/ape1.png"));
        tokenId = tokenId + 1;
    }
    
    
}