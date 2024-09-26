const express = require('express')
const goalsRouter = express.Router()
const Goals = require('../models/Goals')

goalsRouter.get('/', async(req, res, next)=>{
    try {
        const allGoals = await Goals.find()
        return res.status(200).send(allGoals)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

goalsRouter.get('/id' /* just changed this from "id"*/ , async (req, res, next)=>{
    try {
        const foundGoal = await Goals.findById(req.params.id) // just changed this "const foundGoal = await Goals.findById(req.params.id)""
        return res.status(200).send(foundGoal)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

goalsRouter.post('/', async(req, res, next) => {
    try {
        //req.body.userId = req.auth._id  Just added this
        //req.body.username = req.auth.username  Just added this
        const newGoal = new Goals(req.body)
        const savedGoal = await newGoal.save()
        return res.status(201).send(savedGoal)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

goalsRouter.delete ('/:id', async(req, res, next) => {
    try {
        const deletedGoal = await Goals.findByIdAndDelete(req.params.id)
        return res.status(201).send(`You have deleted the "${deletedGoal.title}" Goal`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

goalsRouter.put ('/:id', async (req, res, next) => {
    try {
        const updatedGoal = await Goals.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedGoal)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = goalsRouter