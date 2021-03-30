import React from "react";

import { TableStyled } from "./styled";

import PropTypes from "prop-types";

function Table({ rows, columns, keys }) {
  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
      {rows.map((row) =>
        <tr key={row}>
            {keys.map((key, idx) => <td key={idx}>{row[key]}</td>)}
        </tr>
         )}
      </tbody>
    </TableStyled>
  );
}

Table.prototype = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  keys: PropTypes.array,
};

export default Table;
