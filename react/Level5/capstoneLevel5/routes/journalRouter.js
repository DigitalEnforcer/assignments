const express = require('express')
const journalRouter = express.Router()
const Journals = require('../models/Journal')

journalRouter.get('/', async(req, res, next)=>{
    try {
        const allJournals = await Journals.find()
        return res.status(200).send(allJournals)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

journalRouter.get('/:id', async (req, res, next)=>{
    try {
        const foundJournal = await Journals.findById(req.params.id)
        return res.status(200).send(foundJournal)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

journalRouter.post('/', async(req, res, next) => {
    try {
        const newJournal = new Journals(req.body)
        const savedJournal = await newJournal.save()
        return res.status(201).send(savedJournal)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

journalRouter.delete ('/:id', async(req, res, next) => {
    try {
        const deletedJournal = await Journals.findByIdAndDelete(req.params.id)
        return res.status(201).send(`You have deleted the "${deletedJournal.title}" Journal Entry`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

journalRouter.put ('/:id', async (req, res, next) => {
    try {
        const updatedJournal = await Journals.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedJournal)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = journalRouter