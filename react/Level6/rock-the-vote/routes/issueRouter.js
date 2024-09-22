const express = require('express')
const Issue = require('../models/issue')
const issueRouter = express.Router()


// post
issueRouter.post('/', async(req, res, next) =>{
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id // logged in user
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// get
issueRouter.get('/user', async (req, res, next) =>{
    try {
        const foundIssues = await Issue.find({userId: req.auth._id})
        return res.status(200).send(foundIssues)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


// Get All

issueRouter.get('/', async (req, res, next) => {
    try {
        const issues = await Issue.find();
        return res.status(200).send(issues);
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// Edit/Update
issueRouter.put('/:issueId', async (req, res, next) => {
    try {
        const foundIssue = req.params.issueId
        const updateData = req.body
        const updatedIssue = await Issue.findByIdAndUpdate(
            {_id: foundIssue, userId: req.auth._id}, 
            updateData,
            { new: true }
        )

        if (!updatedIssue) {
            return res.status(404).send("Issue not found or you are not authorized to update this issue")
        }
        return res.status(200).send(updatedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// Delete
issueRouter.delete('/:issueId', async (req, res, next) => {
    try {
        const foundIssue = req.params.issueId
        const deletedIssue = await Issue.findOneAndDelete({
            _id: foundIssue,
            userId: req.auth._id
        })

        if (!deletedIssue){
            return res.status(404).send("Issue not found or you are not authorized to delete this issue")
        }
        return res.status(200).send(`Successfully deleted issue ${foundIssue}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
    
issueRouter.put('/upvotes/:issueId', async(req, res, next)=>{
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {upvotes: req.auth._id},
                $pull: {downvotes: req.auth._id}
            },
            {new: true}
        )
        return res.status(201).send(updatedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issueRouter.put('/downvotes/:issueId', async(req, res, next)=>{
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {downvotes: req.auth._id},
                $pull: {upvotes: req.auth._id}
            },
            {new: true}
        )
        return res.status(201).send(updatedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = issueRouter
