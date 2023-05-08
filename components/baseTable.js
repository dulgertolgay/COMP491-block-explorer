import styles from "../styles/components/baseTable.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const BaseTable = (props) => {
  const { colNames, tableData } = props;

  const SingleRow = (props) => {
    return (
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        {Object.values(props.row).map((value, index) => {
          return (
            <TableCell key={value} className="s2">
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

  return (
    <TableContainer sx={{ maxHeight: 400 }}>
      <Table stickyHeader className={styles.baseTable}>
        <TableHead>
          <TableRow>
            {colNames.map((name, i) => (
              <TableCell key={name + i} className="s1 medium">
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data, i) => (
            <SingleRow key={data} row={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
