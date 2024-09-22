const mongoose = require('mongoose')
const Schema = mongoose.Schema

const websiteSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    website: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Website', websiteSchema)