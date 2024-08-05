const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reminderSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        default: false,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Reminder', reminderSchema)