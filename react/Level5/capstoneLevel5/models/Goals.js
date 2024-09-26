const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalsSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: String,
        required: true
    }
},  {timestamps: true})
module.exports = mongoose.model('Goals', goalsSchema)