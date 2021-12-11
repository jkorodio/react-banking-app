import React, { useEffect, useState } from "react";
import EditableRow from "../customer/EdittableRow";
import Deposit from "./action/Deposit";
import Transfer from "./action/Transfer";
import Withdraw from "./action/Withdraw";
import ReadOnlyRow from "./ReadOnlyRow";
import "./Transaction.css";

const getDatafromLS = () => {
  const data = localStorage.getItem("customer");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Transaction = () => {
  const [customers, setCustomers] = useState(getDatafromLS());
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    email: "",
    accNumber: "",
    balance: "",
  });
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState(
    JSON.parse(localStorage.getItem("transaction-history")) || []
  );

  useEffect(() => {
    if (transactionHistory.length) {
      localStorage.setItem(
        "transaction-history",
        JSON.stringify(transactionHistory)
      );
    }
  }, [transactionHistory]);

  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customers));
  }, [customers]);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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
    <div className="transaction-container">
      <div className="form2">
        <Deposit
          onSubmit={(accNumber, amount) => {
            setCustomers((previous) => {
              return previous.map((customer) => {
                if (customer.accNumber === accNumber) {
                  return {
                    ...customer,
                    balance: parseInt(customer.balance) + amount,
                  };
                } else {
                  return customer;
                }
              });
            });
            setTransactionHistory((previous) => {
              const senderName = customers.find(
                (customer) => customer.accNumber === accNumber
              ).fullName;
              return [...previous, `${senderName} deposit ${amount} pesos`];
            });
          }}
        />
        <Withdraw
          onSubmit={(accNumber, amount) => {
            setCustomers((previous) => {
              return previous.map((customer) => {
                if (customer.accNumber === accNumber) {
                  return {
                    ...customer,
                    balance: parseInt(customer.balance) - amount,
                  };
                } else {
                  return customer;
                }
              });
            });
            setTransactionHistory((previous) => {
              const senderName = customers.find(
                (customer) => customer.accNumber === accNumber
              ).fullName;
              return [...previous, `${senderName} withdraw ${amount} pesos`];
            });
          }}
        />
        <Transfer
          onSubmit={(senderNumber, receiverNumber, amount) => {
            setCustomers((previous) => {
              return previous.map((customer) => {
                if (customer.accNumber === senderNumber) {
                  return {
                    ...customer,
                    balance: parseInt(customer.balance) - amount,
                  };
                } else if (customer.accNumber === receiverNumber) {
                  return {
                    ...customer,
                    balance: parseInt(customer.balance) + amount,
                  };
                } else {
                  return customer;
                }
              });
            });
            setTransactionHistory((previous) => {
              const senderName = customers.find(
                (customer) => customer.accNumber === senderNumber
              ).fullName;
              const receiverName = customers.find(
                (customer) => customer.accNumber === receiverNumber
              ).fullName;
              return [
                ...previous,
                `${senderName} transferred ${amount} PHP to ${receiverName}`,
              ];
            });
          }}
        />
      </div>
      <div className="form1">
        <form onSubmit={handleEditFormSubmit}>
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Account Number</th>
                <th>Balance</th>
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
    </div>
  );
};

export default Transaction;
