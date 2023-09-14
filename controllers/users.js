const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        const users = await db.User.find({})
        res.json({results: users})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

router.delete('/delete', async (req, res) => {
    try{
        const {userEmail} = req.query
        console.log('this is the user', userEmail)
        const deletedUser = await User.findOneAndDelete({ email: userEmail })
        return res.json({ message: 'User deleted succesfully'})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'internal server error'})
    }
})

// router.put('/update-save-state', async (req, res) => {
//     try {
//         const {saveName, gameCharHealth, gameBossHealth} = req.body
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({message: "internal server error"})
//     }
// })

module.exports = router