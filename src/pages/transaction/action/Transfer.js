import React, { useState } from "react";
import "../../../components/Modal.css";

const Transfer = () => {
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
        Transfer
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>TRANSFER FORM</h2>
            <br />
            <p>Transfer your 1 million</p>
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
