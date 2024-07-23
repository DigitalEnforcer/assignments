const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')

    //Middleware (for every request)
    app.use(/* "/", optional */ express.json()) // Looks for a request body, and turns it into a "req.body"
    app.use(morgan('dev')) // this logs requests to the console

    async function connectToDb(){
        try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log('Connected to DB')
        } catch(err){
            console.log(err)
        }
    }

    connectToDb()
    
    // Routes //
    app.use("/api/movies", require("./routes/movieRouter.js"))
    app.use("/api/tvshows", require("./routes/tvshowRouter.js"))
    app.use("/api/directors", require("./routes/directorRouter.js"))
  

    // Error handler
    app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
    })

    // Server Listen //
    app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

