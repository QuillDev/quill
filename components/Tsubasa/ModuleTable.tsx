import React from "react";

interface ModuleTableProps {
  name?: string;
  id?: string;
}

const ModuleTable: React.FC<ModuleTableProps> = ({ children, name, id }) => {
  return (
    <div className="tableContainer" id={id}>
      <div className="theader">{name}</div>
      <table className="table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Usage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
export default ModuleTable;
