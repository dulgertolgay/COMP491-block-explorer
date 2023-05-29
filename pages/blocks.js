import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import getBlocks from "../backend/getBlocks";

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const defaultColumnOptions = {
    flex: 1,
    sortable: false,
    headerAlign: "left",
    align: "left",
  };
  const columns = [
    { field: "id", headerName: "ID", type: "string", ...defaultColumnOptions },
    {
      field: "number",
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
      field: "time",
      headerName: "TIME",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "miner",
      headerName: "MINER",
      type: "string",
      ...defaultColumnOptions,
    },
    {
      field: "difficulty",
      headerName: "DIFFICULTY",
      type: "number",
      ...defaultColumnOptions,
    },
    {
      field: "gasUsed",
      headerName: "GAS USED",
      type: "string",
      ...defaultColumnOptions,
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const blocks = await getBlocks();
    setBlocks(blocks);
  };

  return (
    <div className="base-card" style={{ margin: "50px" }}>
      <p className="card-title bold">BLOCKS</p>
      <DataGrid
        rows={blocks}
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
