import React,{useContext} from 'react';
import { RoomContext } from '../context/globalContext'
import '../App.css'
function Display(props) {
    const { transactions } = useContext(RoomContext)
    
    const amounts= transactions.map(transaction => 
        transaction.amount
    )
    let loss=0,profit=0
    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] < 0)
            loss += Math.abs (amounts[i])
        else
            profit+=amounts[i]
        
    }
    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    return (
        <div className="display">
            <h2>Total amount is ${total || 0}</h2>

            <div className="label-container">
                <span className="label-left" >
                    Loss {loss}
                </span>
                <span className="label-right" >
                    Profit {profit}
                </span>
                

            </div>
        </div>
    );
}

export default Display;