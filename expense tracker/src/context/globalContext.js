import React,{createContext,useReducer, useState,useEffect} from 'react';
import AppReducer from './AppReducer'
const RoomContext = createContext();
 
const axios =require('axios')

 function GlobalContext({ children }) {
    const [initialState,setInitialState] = useState({
        transactions:[]
    })

     useEffect(() => {
              axios
                    .get('http://localhost:5000/expense/getexpense')
                    .then(res => {
                         setInitialState({
                            transactions: res.data.data
                        })
                        
                    })
                    .catch(err => {
                        
                    }
                )
    }, [])
    
     /*const [state,dispatch]=useReducer(AppReducer,initialState)
        */
     function deleteData(id) {
         axios
             .delete(`http://localhost:5000/expense/deleteexpense/${id}`)
         .then(res=>{console.log(res.data)
         })
         .catch(err=>{console.error(err)
         })
        setInitialState ({
            ...initialState,
            transactions: initialState.transactions.filter(transaction =>
                transaction._id !== id)
        })
        /*dispatch({
            type: "DeleteData",
            payload:id
        })*/
    }
     function addData(data) {
         axios
             .post('http://localhost:5000/expense/postexpense', data)
             .then(res => {
                 console.log(res.data);
             })
         .catch(Err=>console.error(Err)
         )
        setInitialState({
            ...initialState,
            transactions:[data,...initialState.transactions]
        })
        
        /*dispatch({
            type: "AddData",
            payload:data
        })*/
    }
   
    
    return (
        <RoomContext.Provider value={{
            transactions: initialState.transactions,
            deleteData,
            addData
        }}>
            {children}
        </RoomContext.Provider>
    );
}

export { GlobalContext,RoomContext};