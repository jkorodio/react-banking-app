import React from "react";

const ReadOnlyRow = ({ customer, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{customer.fullName}</td>
      <td>{customer.email}</td>
      <td>{customer.accNumber}</td>
      <td>{customer.balance}</td>

      <td>
        <button
          style={{ padding: "5px", width: "2.5rem" }}
          type="button"
          onClick={event => handleEditClick(event, customer)}
        >
          🖊
        </button>
        <button
          style={{ padding: "5px", width: "2.5rem" }}
          type="button"
          onClick={() => handleDeleteClick(customer.id)}
        >
          🗑
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
