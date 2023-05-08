import styles from "../styles/index.module.scss";

import BaseTable from "../components/baseTable";
import BaseButton from "../components/baseButton";
import Link from "next/link";

const Home = () => {
  const blockTableColNames = ["BLOCK NUMBER", "HASH", "TRANSACTION", "FEES"];
  const blockData = [
    {
      blockNumber: 1234,
      hash: "lsdfkjskldf",
      transaction: "lsdkjfklsdf",
      fee: 0.234,
    },
    {
      blockNumber: 1234,
      hash: "lsdfkjskldf",
      transaction: "lsdkjfklsdf",
      fee: 0.234,
    },
    {
      blockNumber: 1234,
      hash: "lsdfkjskldf",
      transaction: "lsdkjfklsdf",
      fee: 0.234,
    },
  ];
  const transactionTableColNames = ["HASH", "FROM", "TO", "AMOUNT"];
  const transactionData = [
    {
      hash: "lksdflksdjf",
      from: "lsdfkjskldf",
      to: "lsdkjfklsdf",
      amount: 0.234,
    },
  ];

  return (
    <div
      id={styles.main}
      className="flex flex-col items-center justify-between p-24"
    >
      <div className={`${styles.cardModified} base-card`}>
        <p className="card-title bold">LATEST BLOCKS</p>
        <div className={styles.tableContainer}>
          <BaseTable colNames={blockTableColNames} tableData={blockData} />
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
          <BaseTable
            colNames={transactionTableColNames}
            tableData={transactionData}
          />
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
