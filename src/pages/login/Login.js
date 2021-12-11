import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Home from "../Home";
import "./Login.css";

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <div>
      {home ? (
        <Form style={{ padding: "10rem" }} onSubmit={handleLogin}>
          <h3>Log In</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Log In
          </button>

          {flag && (
            <Alert color="primary" variant="warning" className="red">
              Wrong email or password, please try again!
            </Alert>
          )}
        </Form>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;
