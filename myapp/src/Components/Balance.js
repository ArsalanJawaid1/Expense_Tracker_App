import React,{useContext} from "react";
import { GlobalContext } from "../Context/useContext";

  const Balance = () => {
  const {Transactions} =useContext(GlobalContext);

  const amount = Transactions.map(e =>e.amount);
  const Total = amount.reduce((prevValue,currentValue)=>(prevValue + currentValue),0)
  return (
    <div>
      <h2 className="balance">
        Your Balance 
        <br /> ${Total}
      </h2>
    </div>
  );
};

export default Balance;
