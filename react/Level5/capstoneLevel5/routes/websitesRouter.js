const express = require('express')
const websitesRouter = express.Router()
const Websites = require('../models/Websites')

websitesRouter.get('/', async(req, res, next)=>{
    try {
        const allWebsites = await Websites.find()
        return res.status(200).send(allWebsites)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

websitesRouter.get('/:id', async (req, res, next)=>{
    try {
        const foundWebsite = await Websites.findById(req.params.id)
        return res.status(200).send(foundWebsite)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

websitesRouter.post('/', async(req, res, next) => {
    try {
        const newWebsite = new Websites(req.body)
        const savedWebsite = await newWebsite.save()
        return res.status(201).send(savedWebsite)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

websitesRouter.delete ('/:id', async(req, res, next) => {
    try {
        const deletedWebsite = await Websites.findByIdAndDelete(req.params.id)
        return res.status(201).send(`You have deleted the "${deletedWebsite.title}" Website`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

websitesRouter.put ('/:id', async (req, res, next) => {
    try {
        const updatedWebsite = await Websites.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedWebsite)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = websitesRouter