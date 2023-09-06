const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const decks = await db.Deck.find({})
        res.json({results: decks})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

module.exports = router