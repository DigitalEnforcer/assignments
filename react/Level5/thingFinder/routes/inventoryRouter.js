const express = require("express")
const inventoryRouter = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredInventory = inventoryItems.filter(item => item.type === type)
    res.send(filteredInventory)
})

inventoryRouter.get("/search/type")

module.exports = inventoryRouter