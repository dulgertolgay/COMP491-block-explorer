import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
    field: "amount",
    headerName: "AMOUNT",
    type: "number",
    format: (value) => value.toFixed(3),
    ...defaultColumnOptions,
  },
];

const rows = [
  {
    id: 1,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
  {
    id: 2,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
  {
    id: 3,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
  {
    id: 4,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
  {
    id: 5,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
  {
    id: 6,
    hash: "0x6f5ff...6823306",
    from: "0x6f5ff...6823306",
    to: "0x6f5ff...6823306",
    amount: 0.123,
  },
];

const Transactions = () => {
  return (
    <div className="base-card" style={{ margin: "50px" }}>
      <p className="card-title bold">TRANSACTIONS</p>
      <DataGrid
        rows={rows}
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
