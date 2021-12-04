import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="container">
      <div className="header-left">
        <img
          onClick={handleClick}
          src="https://www.freepnglogos.com/uploads/f-e-letter-logo-image-6.png"
          alt=""
        />{" "}
        <h2>BANK OF ETIVAC</h2>
      </div>
      <div className="header-right-container">
        <ul>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
