const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const bosses = await db.Boss.find({})
        res.send(bosses)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

module.exports = router