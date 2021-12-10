import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Home from "../Home";

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
      localStorage.setItem(
        "persistence",
        JSON.stringify({ email: emaillog, password: passwordlog })
      );
    }
  };

  React.useEffect(() => {
    const persistLogin = localStorage.getItem("persistence");
    if (persistLogin) {
      const parsedPersistLogin = JSON.parse(persistLogin);
      setEmaillog(parsedPersistLogin.email);
      setPasswordlog(parsedPersistLogin.password);
      setHome(false);
    }
  }, []);

  return (
    <div>
      {home ? (
        <Form style={{ padding: "10rem" }} onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
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
