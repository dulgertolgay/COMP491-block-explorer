import styles from "../styles/index.module.scss";

import BaseTable from "../components/baseTable";
import BaseButton from "../components/baseButton";

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

  const click = () => {
    console.log("works");
  };

  return (
    <div
      id={styles.main}
      className="flex flex-col items-center justify-between p-24"
    >
      <div className={`${styles.tableContainer} base-card`}>
        <p className={`${styles.tableTitle} bold`}>LATEST BLOCKS</p>
        <BaseTable colNames={blockTableColNames} tableData={blockData} />
        <BaseButton variant="primary" width="100%" clickAction={click}>
          View All Blocks
        </BaseButton>
      </div>
      <div className={`${styles.tableContainer} base-card`}>
        <p className={`${styles.tableTitle} bold`}>LATEST TRANSACTIONS</p>
        <BaseTable
          colNames={transactionTableColNames}
          tableData={transactionData}
        />
        <BaseButton variant="primary" width="100%" clickAction={click}>
          View All Transactions
        </BaseButton>
      </div>
    </div>
  );
};

export default Home;
