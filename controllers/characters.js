const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const characters = await db.Character.find({})
        res.json({results: characters})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// router.get('/admin', async (req, res) => {
//     try {
//         const characters = await db.Character.find
//     } catch (error) {
        
//     }
// })

module.exports = router