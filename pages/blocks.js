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
    field: "blockNumber",
    headerName: "BLOCK NUMBER",
    type: "number",
    ...defaultColumnOptions,
  },
  {
    field: "hash",
    headerName: "HASH",
    type: "string",
    ...defaultColumnOptions,
  },
  {
    field: "transaction",
    headerName: "TRANSACTION",
    type: "number",
    ...defaultColumnOptions,
  },
  {
    field: "fee",
    headerName: "FEES",
    type: "number",
    format: (value) => value.toFixed(3),
    ...defaultColumnOptions,
  },
];

const rows = [
  {
    id: 1,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
  {
    id: 2,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
  {
    id: 3,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
  {
    id: 4,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
  {
    id: 5,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
  {
    id: 6,
    blockNumber: 27934515,
    hash: "0x6f5ff...6823306",
    transaction: 123,
    fee: 0.123,
  },
];

const Blocks = () => {
  return (
    <div className="base-card" style={{ margin: "50px" }}>
      <p className="card-title bold">BLOCKS</p>
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

export default Blocks;
