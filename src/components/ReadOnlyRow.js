import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          style={{ padding: "5px", width: "2.5rem" }}
          type="button"
          onClick={event => handleEditClick(event, contact)}
        >
          🖊
        </button>
        <button
          style={{ padding: "5px", width: "2.5rem" }}
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          🗑
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
