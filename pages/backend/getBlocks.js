import axios from "axios";

const getBlocks = async () => {
  const res = await axios.get("http://localhost:3001/blocks");
  let blocks = res.data;
  blocks = blocks.map((block) => {
    let date = new Date(block.timestamp * 1000).toUTCString();
    let modifiedBlock = {
      ...block,
      id: block._id,
      time: date,
    };
    return modifiedBlock;
  });
  return blocks;
};

export default getBlocks;
