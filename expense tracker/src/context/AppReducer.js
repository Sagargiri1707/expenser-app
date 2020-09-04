const axios =require('axios')

export default (state, action) => {
    console.log("here");
    
    switch (action.type) {
        case 'DeleteData':
            return {
                ...state,
                transactions: state.transactions.filter(transaction =>
                    transaction.id !== action.payload)
            }
        case 'AddData': {
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        }
       
            
        default:
            return state;
        
}
}