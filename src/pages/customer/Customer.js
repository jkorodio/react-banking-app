import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Customer.css";
import EditableRow from "./EdittableRow";
import ReadOnlyRow from "./ReadOnlyRow";

const getDatafromLS = () => {
  const data = localStorage.getItem("customer");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Customer = () => {
  const [customers, setCustomers] = useState(getDatafromLS());
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    accNumber: "",
    balance: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    accNumber: "",
    balance: "",
  });

  const [editCustomerId, setEditCustomerId] = useState(null);

  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customers));
  }, [customers]);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newCustomer = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      accNumber: addFormData.accNumber,
      balance: addFormData.balance,
    };

    const newCustomers = [...customers, newCustomer];
    setCustomers(newCustomers);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCustomer = {
      id: editCustomerId,
      fullName: editFormData.fullName,
      email: editFormData.email,
      accNumber: editFormData.accNumber,
      balance: editFormData.balance,
    };

    const newCustomers = [...customers];

    const index = customers.findIndex(
      (customer) => customer.id === editCustomerId
    );

    newCustomers[index] = editedCustomer;

    setCustomers(newCustomers);
    setEditCustomerId(null);
  };

  const handleEditClick = (event, customer) => {
    event.preventDefault();
    setEditCustomerId(customer.id);

    const formValues = {
      fullName: customer.fullName,
      email: customer.email,
      accNumber: customer.accNumber,
      balance: customer.balance,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditCustomerId(null);
  };

  const handleDeleteClick = (customerId) => {
    const newCustomers = [...customers];

    const index = customers.findIndex((customer) => customer.id === customerId);

    newCustomers.splice(index, 1);

    setCustomers(newCustomers);
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
          className="form-input"
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an E-mail..."
          onChange={handleAddFormChange}
          className="form-input"
        />
        <input
          type="number"
          name="accNumber"
          required="required"
          placeholder="Enter an Account number..."
          onChange={handleAddFormChange}
          className="form-input"
        />
        <input
          type="number"
          name="balance"
          required="required"
          placeholder="Enter Balance..."
          onChange={handleAddFormChange}
          className="form-input"
        />
        <button className="user-btn" type="submit">
          Add User
        </button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Account Number</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <>
                {editCustomerId === customer.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    customer={customer}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Customer;
