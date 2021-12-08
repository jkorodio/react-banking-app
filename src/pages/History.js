import React, { useState } from "react";
import "./Home.css";

const History = () => {
  // eslint-disable-next-line
  const [transactionHistory, setTransactionHistory] = useState(
    JSON.parse(localStorage.getItem("transaction-history"))
  );

  return (
    <div className="history-container">
      <div className="history-body">
        <h2>TRANSACTION HISTORY</h2>
        {transactionHistory.map(transaction => (
          <p>{transaction}</p>
        ))}
      </div>
    </div>
  );
};

export default History;
