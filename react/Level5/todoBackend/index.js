const {v4: uuidv4} = require("uuid")
const express = require('express')
const app = express()


app.use(express.json())


app.use("/todolist", require("./routes/todoList"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})