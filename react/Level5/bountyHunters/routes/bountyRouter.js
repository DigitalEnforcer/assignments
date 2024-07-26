const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const Bounty = require('../models/bounty')

// const bounties = [
//     {   firstName: "Luke",
//         lastName: "Skywalker",
//         living: true,
//         bounty_Amount: 400,
//         type: "Jedi",
//         _id: uuidv4()
//     },
//     {   firstName: "Anakin",
//         lastName: "Skywalker",
//         living: false,
//         bounty_Amount: 4200,
//         type: "Sith",
//         _id: uuidv4()},

//     {   firstName: "Tom",
//         lastName: "Jiggleworks",
//         living: true,
//         bounty_Amount: 200,
//         type: "Jedi",
//         _id: uuidv4()}
// ]

bountyRouter.get("/", async(req, res, next) => {
    try {
        const foundBounties = await Bounty.find()
        return res.status(200).send(foundBounties)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

bountyRouter.post("/", async(req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        return res.status(200).send(savedBounty)
    } catch (error) {
        res.status(500)
        return next (error)
    }
    
})

bountyRouter.delete("/:bountyId", async(req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const deletedBounty = await Bounty.findByIdAndDelete(bountyId)
        return res.status(200).send(`You have successfully deleted the ${deletedBounty.firstName} ${deletedBounty.lastName} bounty`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Bounty has been deleted")
})

bountyRouter.put("/:bountyId", async (req, res, next) => {
    try {
        const bountyId = req.params.bountyId
        const updatedBounty = await Bounty.findByIdAndUpdate(
            bountyId,
            req.body,
            {new: true})
        return res.status(201).send(updatedBounty)
    } catch (error) {
        res.status(500)
        return next(error)
    }
    
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    // const updatedBounties = Object.assign(bounties[bountyIndex], req.body)
    // res.send(updatedBounties)
})

module.exports = bountyRouter