const express = require('express')
const pickedRouter = express.Router()

pickedRouter.get('/', (req, res, next) => {
    console.log("this is working perfectly")
    next()
})

pickedRouter.get('/', (req, res, next) => {
    req.body = {title: "This Title has been added by Force"}
    console.log("added the item")
    res.send(req.body)
})

module.exports = pickedRouter