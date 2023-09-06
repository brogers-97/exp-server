const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: String,
    health: Number,
})



module.exports = mongoose.model('Character', characterSchema)