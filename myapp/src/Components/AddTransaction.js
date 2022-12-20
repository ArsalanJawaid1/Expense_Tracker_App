import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/useContext";


const AddTransaction = () => {
  const [newDesc, setNewDesc] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const {addTransaction} = useContext(GlobalContext)
  
  const changeDescription = (e) => {
    setNewDesc(e.target.value);
  };
  const changeAmount = (e) => {
    setNewAmount(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      desc :newDesc,
       amount : +newAmount
    }
    addTransaction(newTransaction)
    setNewDesc("");
    setNewAmount("");
  };
  return (
    <div>
      <h3>Add new Transaction </h3>
      <hr />
      <form onSubmit={submitForm} className="transaction-form">
        <label>
          Enter Description <br />
          <input
            type="text"
            placeholder="Detail of Transaction"
            value={newDesc}
            onChange={changeDescription}
            required
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="Number"
            placeholder="Enter Transaction"
            value={newAmount}
            onChange={changeAmount}
            required
          />
        </label>
        <br />
        <button type="submit"> Add Transaction </button>
      </form>
    </div>
  );
};

export default AddTransaction;
