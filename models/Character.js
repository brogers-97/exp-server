const mongoose = require('mongoose')

// const attackSchema = new mongoose.Schema({
//     name: String,
//     damage: Number,
// })

const characterSchema = new mongoose.Schema({
    name: String,
    attacks: [{
        attack: String,
        damage: Number,
    }],
})



module.exports = mongoose.model('Character', characterSchema)