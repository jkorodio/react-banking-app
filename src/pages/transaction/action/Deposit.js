import React, { useState } from "react";
import "../../../components/Modal.css";

const Deposit = () => {
  const [modal, setModal] = useState(false);

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
            <h2>DEPOSIT FORM</h2>
            <br />
            <form>
              <input
                style={{ padding: "5px" }}
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter Full Name..."
              />
              <input
                style={{ padding: "5px" }}
                type="number"
                name="balance"
                required="required"
                placeholder="Amount deposit..."
              />
              <br />
              <button>submit</button>
            </form>
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
