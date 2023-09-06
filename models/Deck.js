const mongoose = require('mongoose')

// create the schema
const deckSchema = new mongoose.Schema({
    name: String,
    deckId: String,
    cards: [
        {
            attack: String,
            damage: Number,
            description: String,
        }
    ],
})


const Deck = mongoose.model('Deck', deckSchema)
module.exports = Deck