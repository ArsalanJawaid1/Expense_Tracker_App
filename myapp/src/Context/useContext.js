import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  Transactions: [
    { id: 1, desc: "Coke", amount: 50 },
    { id: 2, desc: "Mobile", amount: 20 },
    { id: 3, desc: "Ferrari", amount: 30 },
  ],
};

export const GlobalContext = createContext(initialState);


// create a Provider for global context
 export const GlobalProvider = ({ children }) => {
  const [state,dispatch]= useReducer(AppReducer,initialState)

 const addTransaction = (data)=>{
  dispatch({
    type : "add_Transaction",
    payload: data
  })
}
  return (
    <GlobalContext.Provider
      value={{
        Transactions: state.Transactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
    }