const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')



// Get comment request
commentRouter.get('/', (req, res, next) => {
    Comment.find(err, comment) => {
        if (err){
            res.status(500)
        }
    }
})



// Add new comment
commentRouter.post('/', (req, res, next) => {

})




module.exports = commentRouter