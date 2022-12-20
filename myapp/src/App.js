import "./App.css";
import React from "react";
import Header from "../src/Components/Header"
import Balance from "./Components/Balance";
import AccountSummary from "./Components/AccountSummary";
import TransactionHistroy from "./Components/TransactionHistroy";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/useContext";
function App() {
  return (
    <GlobalProvider>
    <div className="container">
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistroy />
      <AddTransaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
