import React, { useState } from "react";
import "./Modal.css";

const Transfer = (props) => {
  const [modal, setModal] = useState(false);
  const [senderNumber, setSenderNumber] = useState("");
  const [receiverNumber, setReceiverNumber] = useState("");
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
        Transfer
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>TRANSFER FORM</h2>
            <br />
            <input
              style={{ padding: "5px" }}
              type="text"
              name="fullName"
              required="required"
              placeholder="Sender Account Number..."
              onChange={(e) => setSenderNumber(e.target.value)}
              value={senderNumber}
            />
            <input
              style={{ padding: "5px" }}
              type="text"
              name="fullName"
              required="required"
              placeholder="Receiver Account Number..."
              onChange={(e) => setReceiverNumber(e.target.value)}
              value={receiverNumber}
              className="modal-input"
            />
            <input
              style={{ padding: "5px" }}
              type="number"
              name="balance"
              required="required"
              placeholder="Amount transfer..."
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className="modal-input"
            />
            <br />
            <button
              className="trans-btn"
              onClick={() => {
                props.onSubmit(senderNumber, receiverNumber, parseInt(amount));
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

export default Transfer;
