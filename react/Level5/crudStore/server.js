const express = require("express")
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))



async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

app.use('/inventory', require('./routes/inventory'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, ()=>{
    console.log("The Server is running")
})