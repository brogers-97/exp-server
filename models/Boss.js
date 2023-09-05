const mongoose = require('mongoose')

// create the schema
const bossSchema = new mongoose.Schema({
    name: String,
    health: Number,
})



const Boss = mongoose.model('Boss', bossSchema)
module.exports = Boss