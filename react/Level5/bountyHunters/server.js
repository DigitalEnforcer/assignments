const express = require("express")
const mongoose = require("mongoose")
const app = express()
const morgan = require('morgan')
const {v4: uuidv4} = require("uuid")
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

//Routes
app.use("/api/bounties", require("./routes/bountyRouter.js"))

// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server listen 
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})

