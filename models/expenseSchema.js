const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    text: {
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
    date: {
        type: Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("expense",expenseSchema)