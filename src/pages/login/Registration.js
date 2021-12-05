import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Login from "./Login";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  // eslint-disable-next-line
  const [info, setInfo] = useState(true);

  // on form submit...
  const handleFormSubmit = e => {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem("userPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  };

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      {info ? (
        <div>
          {" "}
          {login ? (
            <Form style={{ padding: "10rem" }} onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={event => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={event => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={event => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              <p className="forgot-password text-right">
                Already registered{" "}
                <span
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={handleClick}
                >
                  log in?
                </span>
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </Form>
          ) : (
            <Login />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Registration;
