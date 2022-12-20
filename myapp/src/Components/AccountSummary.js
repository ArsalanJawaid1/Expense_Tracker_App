import React,{useContext} from "react";
import { GlobalContext } from "../Context/useContext";

const AccountSummary = () => {
  const {Transactions} = useContext(GlobalContext)
  
  const amount = Transactions.map((e)=> e.amount);
  const Income = amount.filter(item => item > 0 ).reduce((prevV,item) =>(prevV + item),0 )
  
  const Expense = amount.filter(item => item < 0).reduce((prevV,item) => (prevV + item),0);
  return (
    <div className="expense-container">
      <h3>
        INCOME <br /> ${Income}
      </h3>
      <h3>
        EXPENSE <br /> ${Expense}
      </h3>
    </div>
  );
};

export default AccountSummary;
