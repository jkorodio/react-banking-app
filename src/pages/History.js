import React, { useEffect, useState } from "react";
import "./Home.css";

const History = () => {
  // eslint-disable-next-line
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const localTransactionHistory = localStorage.getItem("transaction-history");
    if (localTransactionHistory) {
      setTransactionHistory(JSON.parse(localTransactionHistory));
    }
  }, []);

  return (
    <div className="history-container">
      <div className="history-body">
        <h2>TRANSACTION HISTORY</h2>
        {transactionHistory.map((transaction) => (
          <p>{transaction}</p>
        ))}
      </div>
    </div>
  );
};

export default History;
