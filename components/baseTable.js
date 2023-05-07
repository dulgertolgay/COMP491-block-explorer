import styles from "../styles/components/baseTable.module.scss";

import Table from "react-bootstrap/Table";

const BaseTable = (props) => {
  const { colNames, tableData } = props;

  const SingleRow = (props) => {
    return (
      <tr>
        {Object.values(props.row).map((value, index) => {
          return (
            <td key={value} className="s2">
              {value}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <Table className={styles.baseTable}>
      <thead>
        <tr>
          {colNames.map((name, i) => (
            <th key={name + i} className="s1 medium">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, i) => (
          <SingleRow key={data} row={data} />
        ))}
      </tbody>
    </Table>
  );
};

export default BaseTable;
