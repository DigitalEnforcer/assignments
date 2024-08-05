const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    journalEntry: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Journal', journalSchema)