const express = require('express')
const expenseSchema=require('../models/expenseSchema')
const router = express.Router()
const mongoose=require('mongoose')
router.get('/getexpense', (req, res, next) => {
    expenseSchema
        .find()
        .then(exps => {
            res.json({data:exps})
    })
})
router.post('/postexpense', (req, res) => {
    var expense = new expenseSchema(req.body)
    
    expense._id= mongoose.Schema.Types.ObjectId(req.body._id)
    expenseSchema
        .findOne({
            text:req.body.text
        })
        .then(exp => {
            if(exp)
                return res.json({ error: "Task already added" })
            else {
                expense
                    .save()
                    .then(exp => {
                        return res.json({success:"Task added successfully"})
                    })
                    .catch(err => {
                        return res.json({error:err})
                    })
                            
                
            }
        })
        .catch(err => {
        return res.json({error:err})
        })
   
})
router.delete('/deleteexpense/:id', (req, res, next) => {
    const {id}=req.params
    expenseSchema
        .findByIdAndDelete(id)
        .then(exp => {
                if(exp)
                    return res.json({
                        success: "Task deleted successfully"
                    })
                else        
                    return res.json({
                        error: "Task does not exists"
                    })
            
            })
        .catch(err => {
                
                return res.json({err:"Unable to delete"})
            })
    
})



module.exports=router