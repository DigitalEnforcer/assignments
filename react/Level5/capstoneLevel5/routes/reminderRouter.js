const express = require('express')
const reminderRouter = express.Router()
const Reminders = require('../models/Reminders')

reminderRouter.get('/', async(req, res, next)=>{
    try {
        const allReminders = await Reminders.find()
        return res.status(200).send(allReminders)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

reminderRouter.get('/:id', async (req, res, next)=>{
    try {
        const foundReminder = await Reminders.findById(req.params.id)
        return res.status(200).send(foundReminder)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

reminderRouter.post('/', async(req, res, next) => {
    try {
        const newReminder = new Reminders(req.body)
        const savedReminder = await newReminder.save()
        return res.status(201).send(savedReminder)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

reminderRouter.delete ('/:id', async(req, res, next) => {
    try {
        const deletedReminder = await Reminders.findByIdAndDelete(req.params.id)
        return res.status(201).send(`You have deleted the "${deletedReminder.title}" Reminder`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

reminderRouter.put ('/:id', async (req, res, next) => {
    try {
        const updatedReminder = await Reminders.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedReminder)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = reminderRouter