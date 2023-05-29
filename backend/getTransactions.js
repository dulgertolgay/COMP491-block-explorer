import axios from "axios";
import { ethers } from "ethers";

const getTransactions = async () => {
  const res = await axios.get("http://109.123.240.10:3000/transactions");
  let transactions = res.data;
  transactions = transactions.map((transaction) => {
    let modifiedTransaction = {
      ...transaction,
      id: transaction._id,
      gasPrice: ethers.utils.formatEther(
        ethers.BigNumber.from(transaction.gasPrice)
      ),
      value: ethers.utils.formatEther(ethers.BigNumber.from(transaction.value)),
    };
    return modifiedTransaction;
  });
  return transactions;
};

export default getTransactions;
