const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {   firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty_Amount: 400,
        type: "Jedi",
        _id: uuidv4()
    },
    {   firstName: "Anakin",
        lastName: "Skywalker",
        living: false,
        bounty_Amount: 4200,
        type: "Sith",
        _id: uuidv4()},

    {   firstName: "Tom",
        lastName: "Jiggleworks",
        living: true,
        bounty_Amount: 200,
        type: "Jedi",
        _id: uuidv4()}
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty has been deleted")
})

bountyRouter.put("/:bountyId", (req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(item => item._id === bountyId)
    const updatedBounties = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounties)
})

module.exports = bountyRouter