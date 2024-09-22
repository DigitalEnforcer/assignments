const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
require('dotenv').config()
const {expressjwt} = require('express-jwt')


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
app.use("/api/auth", require("./routes/authRouter"))
app.use("/api/main", expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use("/api/goals", require("./routes/goalsRouter"))          //Need to add /api/main/goals .. add main to everything
app.use("/api/journals", require("./routes/journalRouter"))
app.use("/api/reminders", require("./routes/reminderRouter"))
app.use("/api/websites", require("./routes/websitesRouter"))


// Error Handler //
app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


// Server Listen //
app.listen(process.env.PORT, () => {
    console.log(`The server is running on Port ${process.env.PORT}`)
})