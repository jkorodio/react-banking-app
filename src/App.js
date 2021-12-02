import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Customer from "./pages/customer/Customer";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Apply from "./pages/apply/Apply";
import Transaction from "./pages/transaction/Transaction";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Apply />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
