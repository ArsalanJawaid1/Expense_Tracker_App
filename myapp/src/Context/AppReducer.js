const AppReducer =(state,action)=>{
    switch(action.type){
       case "add_Transaction":{
           return{
            Transactions:[action.payload, ...state.Transactions ]
           }
       } 
    }
}
export default AppReducer