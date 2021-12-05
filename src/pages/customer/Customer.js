import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Customer.css";
// import data from "./mock-data.json";
import EditableRow from "../../components/EdittableRow";
import ReadOnlyRow from "../../components/ReadOnlyRow";
// import ReadOnlyRow from "../components/ReadOnlyRow";
// import EditableRow from "../components/EditableRow";

const getDatafromLS = () => {
  const data = localStorage.getItem("customer");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Customer = () => {
  const [contacts, setContacts] = useState(getDatafromLS());
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    balance: ""
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    balance: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
      balance: addFormData.balance
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = event => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      balance: editFormData.balance
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex(contact => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      balance: contact.balance
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = contactId => {
    const newContacts = [...contacts];

    const index = contacts.findIndex(contact => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleAddFormSubmit}>
        {/* <h2>Add Customer here..</h2> */}
        <br />
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter Full Name..."
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an E-mail..."
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="balance"
          required="required"
          placeholder="Enter Balance"
          onChange={handleAddFormChange}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Customer;
