import React,{useContext} from 'react';
import '../App.css'

import {RoomContext} from '../context/globalContext'

function Display(props) {
    const context = useContext(RoomContext)
    const { deleteData, transactions } = context
    
    const deleteTransactions = (id) => {
        deleteData(id)        
    }
    return (
        <div className="display">
            <p>
                Display the total amount of loss and profit
            </p>
            
            {context.transactions ?
                context.transactions.map((data, id) => {
                  return(
                <div key={data._id} className={data.amount<0?'minus':'plus'}>
                    <span style={{
                        width:'220px'
                                }}>
                                <button onClick={()=>deleteTransactions(data._id)}>X</button>     {data.text} $   {data.amount}
                    </span>
                </div>   )
                }):
              <div>
              <span style={{
                 width:'190px',
                 backgroundColor:'white'
             }}>Loading.............</span>
         </div>
            }
          
          
        </div>
    );
}

export default Display;