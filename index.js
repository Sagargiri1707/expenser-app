const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const expenseRouter=require('./routes/expenseRoute')
const App = express()
const PORT=5000
App.use(express.json())
App.use(cors())
mongoose.connect('mongodb://localhost/expense',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
mongoose.connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
})

App.use('/expense',expenseRouter)

App.listen(PORT,console.log(`server started on ${PORT}`)
)