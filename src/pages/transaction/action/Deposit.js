import React, { useState } from "react";
import "./Modal.css";

const Deposit = (props) => {
  const [modal, setModal] = useState(false);
  const [accNumber, setAccNumber] = useState("");
  const [amount, setAmount] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Deposit
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>DEPOSIT</h2>
            <br />
            <input
              style={{ padding: "5px" }}
              type="number"
              name="accNumber"
              required="required"
              placeholder="Enter Account Number..."
              onChange={(e) => setAccNumber(e.target.value)}
              value={accNumber}
              className="modal-input"
            />
            <input
              style={{ padding: "5px" }}
              type="number"
              name="balance"
              required="required"
              placeholder="Amount deposit..."
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className="modal-input"
            />
            <br />
            <button
              className="deposit-btn"
              onClick={() => {
                props.onSubmit(accNumber, parseInt(amount));
                toggleModal();
              }}
            >
              Confirm
            </button>
            <button className="close-modal" onClick={toggleModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deposit;
