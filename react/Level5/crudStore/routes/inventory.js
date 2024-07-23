const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

inventoryRouter.get('/', async(req, res, next) => {
    try {
        const foundItem = await Inventory.find()
        return res.status(200).send(foundItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.get('/:itemId', async (req, res, next) => {
    try {
        const itemId = req.params.itemId
        const foundItem = await Inventory.findById(itemId)
        return res.status(200).send(foundItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.post('/', async(req, res, next) => {
    try {
        const newItem = new Inventory(req.body)
        const savedItem = await newItem.save()
        return res.status(201).send(savedItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.delete('/:itemId', async(req, res, next) => {
    try {
        const itemId = req.params.itemId
        const deletedItem = await Inventory.findByIdAndDelete(itemId)
        return res.status(200).send(`You have successfully ${deletedItem.title}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.put('/:itemId', async(req, res, next) =>{
    try {
        const itemId = req.params.itemId
        const updatedItem = await Inventory.findByIdAndUpdate(
            itemId,
            req.body,
            {new: true} // telling db we want the newest version back
        )
        return res.status(201).send(updatedItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
module.exports = inventoryRouter