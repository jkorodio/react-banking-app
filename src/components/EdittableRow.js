import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="balance"
          value={editFormData.balance}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button style={{ padding: "5px", width: "2.5rem" }} type="submit">
          ✔
        </button>
        <button
          style={{ padding: "5px", width: "2.5rem" }}
          type="button"
          onClick={handleCancelClick}
        >
          ✖
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
