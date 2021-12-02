import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form">
        <h1>Open your bank account with us today!</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Username"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
          />
        </div>
        {/* <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm Password"
          />
        </div> */}
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
