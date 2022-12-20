import React, { useContext } from "react";
import { GlobalContext } from "../Context/useContext";

const TransactionHistroy = () => {
  const {Transactions} = useContext(GlobalContext);

  const amount = Transactions.map(e => e.amount) 

  return (
    <div>
      <h3> History </h3>
      <hr />
      <ul className="transaction-list minus plus">
        {Transactions.map((e)=>{
          return(
            <li key={e.id}>
              <span>{e.desc}</span>
              <span>${Math.abs(e.amount)}</span>
            </li>
          )
        })}
       </ul>
    </div>
  );
};

export default TransactionHistroy;
