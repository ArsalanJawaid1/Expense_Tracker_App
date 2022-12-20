// import {React, useContext } from "react";
// import { useState} from "react";
// import { TransactionContext } from "./useContext";


// const Child = () => {
//  let transaction = useContext(TransactionContext)

//   const [newDesc, setNewDesc] = useState("");
//   const [newAmount, setNewAmount] = useState("");

//   const changeDescription = (e) => {
//     setNewDesc(e.target.value);
//   };
//   const changeAmount = (e) => {
//     setNewAmount(e.target.value);
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     const getValue = {
//       Desc: newDesc,
//       Amount: newAmount,
//     };
//     console.log(getValue);
//     setNewAmount("");
//     setNewDesc("");
//   };
//   return (
//     <div className="container">
//       <h1 className="text-center"> Expense Tracker </h1>
//       <h3>
//         balance <br /> $260.00
//       </h3>

//       <div className="expense-container">
//         <h3>
//           INCOME <br /> $500
//         </h3>
//         <h3>
//           EXPENSE <br /> $240
//         </h3>
//       </div>
//       <h3> History </h3>
//       <hr />

//       <ul className="transaction-list">
//         {transaction.map((e, index) => {
//           return (
//             <li key={index}>
//               <span>{e.desc}</span>
//               <span>${e.amount}</span>
//             </li>
//           );
//         })}
//       </ul>

//       <h3>Add new Transaction </h3>
//       <hr />

//       <form onSubmit={submitForm} className="transaction-form">
//         <label>
//           Enter Description <br />
//           <input
//             type="text"
//             value={newDesc}
//             onChange={changeDescription}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Enter Amount <br />
//           <input type="Number" value={newAmount} onChange={changeAmount} required />
//         </label>
//         <br />
//         <button type="submit"> Add Transaction </button>
//       </form>
//     </div>
//   );
// };

// export default Child;
