import styles from "../styles/index.module.scss";
import { useEffect, useState } from "react";
import getBlocks from "../backend/getBlocks";
import getTransactions from "../backend/getTransactions";

import BaseTable from "../components/baseTable";
import BaseButton from "../components/baseButton";
import Link from "next/link";

const Home = () => {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const blockTableColNames = [
    "BLOCK NUMBER",
    "HASH",
    "TIME",
    "MINER",
    "DIFFICULTY",
  ];
  const blockDataFields = ["number", "hash", "time", "miner", "difficulty"];
  const transactionTableColNames = ["HASH", "FROM", "TO", "AMOUNT"];
  const transactionDataFields = ["hash", "from", "to", "value"];

  useEffect(() => {
    if (
      window.location.host.indexOf("github.io") > -1 &&
      window.location.protocol != "http:"
    ) {
      window.location.protocol = "http";
    }
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  const getData = async () => {
    const blocks = await getBlocks();
    setBlocks(blocks);
    const transactions = await getTransactions();
    setTransactions(transactions);
  };

  return (
    <div
      id={styles.main}
      className="flex flex-col items-center justify-between p-24"
    >
      <div className={`${styles.cardModified} base-card`}>
        <p className="card-title bold">LATEST BLOCKS</p>
        <div className={styles.tableContainer}>
          {!loading && (
            <BaseTable
              colNames={blockTableColNames}
              fields={blockDataFields}
              tableData={blocks}
            />
          )}
        </div>
        <Link href="/blocks">
          <BaseButton variant="primary" width="100%">
            View All Blocks
          </BaseButton>
        </Link>
      </div>
      <div className={`${styles.cardModified} base-card`}>
        <p className="card-title bold">LATEST TRANSACTIONS</p>
        <div className={styles.tableContainer}>
          {!loading && (
            <BaseTable
              colNames={transactionTableColNames}
              fields={transactionDataFields}
              tableData={transactions}
            />
          )}
        </div>
        <Link href="/transactions">
          <BaseButton variant="primary" width="100%">
            View All Transactions
          </BaseButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
