import React from "react";
import Deposit from "./action/Deposit";
import Transfer from "./action/Transfer";
import Withdraw from "./action/Withdraw";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div>
      <Deposit />
      <Withdraw />
      <Transfer />
    </div>
  );
};

export default Transaction;
