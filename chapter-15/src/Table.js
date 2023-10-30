import React from "react";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        {items.map((item) => (
          <Row item={item} />
        ))}
      </table>
    </div>
  );
};

export default Table;
