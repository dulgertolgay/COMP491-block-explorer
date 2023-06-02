import axios from "axios";
import { ethers } from "ethers";

const getBlocks = async () => {
  const res = await axios.get("http://109.123.240.10:3000/blocks");
  let blocks = res.data;
  blocks = blocks.map((block) => {
    let date = new Date(block.timestamp * 1000).toUTCString();
    let modifiedBlock = {
      ...block,
      id: block._id,
      time: date,
      gasUsed: ethers.utils.formatEther(ethers.BigNumber.from(block.gasUsed)),
    };
    return modifiedBlock;
  });
  return blocks;
};

export default getBlocks;
