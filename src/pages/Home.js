import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Customer from "./customer/Customer";
import Features from "./Features";
import Transaction from "./transaction/Transaction";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path="/apply" exact element={<Apply />} /> */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
