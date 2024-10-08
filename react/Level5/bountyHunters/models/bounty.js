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
        living: {
            type: Boolean,
            default: true
        },
        bounty_Amount: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['Sith', 'Jedi', 'Other'],
            required: true
        },
        
})

module.exports = mongoose.model("Bounty", bountySchema)