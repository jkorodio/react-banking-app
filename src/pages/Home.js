import React, { Redirect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import Customer from "./customer/Customer";
import History from "./History";
import Transaction from "./transaction/Transaction";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/apply" exact element={<Apply />} /> */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/history" element={<History />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

const Logout = () => {
  React.useEffect(() => {
    localStorage.removeItem("persistence");
    window.reload();
  }, []);

  return <Redirect to="/" />;
};

export default Home;
