const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        living: {},
        bounty_Amount: {
            type: Number,
            required: true
        },
        type: {},
        
})

module.exports = mongoose.model("Bounty", bountySchema)