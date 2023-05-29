import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import getTransactions from "../backend/getTransactions";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const defaultColumnOptions = {
    flex: 1,
    sortable: false,
    headerAlign: "left",
    align: "left",
  };

  const columns = [
    { field: "id", headerName: "ID", type: "string", ...defaultColumnOptions },
    {
      field: "hash",
      headerName: "HASH",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "blockNumber",
      headerName: "BLOCK NO",
      type: "number",
      ...defaultColumnOptions,
    },
    {
      field: "from",
      headerName: "FROM",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "to",
      headerName: "TO",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "transactionIndex",
      headerName: "TRANSACTION INDEX",
      type: "number",
      ...defaultColumnOptions,
    },
    {
      field: "gasPrice",
      headerName: "GAS PRICE",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "value",
      headerName: "AMOUNT",
      type: "string",
      ...defaultColumnOptions,
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const transactions = await getTransactions();
    setTransactions(transactions);
  };

  return (
    <div className="base-card" style={{ margin: "50px" }}>
      <p className="card-title bold">TRANSACTIONS</p>
      <DataGrid
        rows={transactions}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        pageSizeOptions={[50, 100]}
        disableColumnMenu
      />
    </div>
  );
};

export default Transactions;
