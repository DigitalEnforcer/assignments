const express = require("express")
const app = express()
const morgan = require("morgan")
require('dotenv').config()
const mongoose = require('mongoose')


// Middleware //
app.use(express.json())
app.use(morgan('dev'))



// Connecting to My Database //
async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DataBase')
    } catch (error) {
        console.log(error)
    }
}

connectToDb()


// Routes //



// Error Handler //
app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})


// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})