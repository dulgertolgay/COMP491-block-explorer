import axios from "axios";

const getTransactions = async () => {
  const res = await axios.get("http://localhost:3001/transactions");
  let transactions = res.data;
  transactions = transactions.map((transaction) => {
    let modifiedTransaction = {
      ...transaction,
      id: transaction._id,
    };
    return modifiedTransaction;
  });
  return transactions;
};

export default getTransactions;
