import React from "react";

const SimpleTable = ({ items, keys }) => {
  if (!keys) keys = { title: "title", content: "content" };
  return (
    <table className="table table-hover">
      <tbody>
        {items.map(
          item =>
            item[keys.content] && (
              <tr key={item[keys.title]}>
                <td>{item[keys.title]}</td>
                <td>
                  <strong>{item[keys.content]}</strong>
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default SimpleTable;
