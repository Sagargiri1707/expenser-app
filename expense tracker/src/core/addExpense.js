import React, { useState ,useContext} from 'react';
import {RoomContext } from '../context/globalContext'
function AddExpense(props) {
    const [text, setText] = useState('')
    const [amount,setAmount]=useState(0)
    const {addData} = useContext(RoomContext)
    
    const submitForm = (e) => {
        e.preventDefault()
        const formdata = {
            _id: (Math.floor(Math.random() * 10000000).toString()),
            text,
            amount :parseInt(amount)           
        }
        
        
        
        addData(formdata);
        setText('')
        setAmount(0)
        
    }
    return (
        <form onSubmit={submitForm}>
            <h4>Add any data</h4>
            <input 
                type="text"
                placeholder="enter note"
                name="text" 
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />
            <br/>
            <input 
                type="number"
                placeholder="enter amount "
                name="amount"
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value)
                }}
                />
            <br/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddExpense;