import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [inputs, setInputs] = useState("");

  const handleChange = e => {
    const username = e.target.username;
    // const value = e.target.value;
    setInputs(value => ({ ...value, [username]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="form-container" onSubmit={handleSubmit}>
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
            onChange={handleChange}
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
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Form;
