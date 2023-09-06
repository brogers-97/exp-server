const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const axios = require('axios')
const User = require('./models/user')
const Character = require('./models/Character')
const Boss = require('./models/Boss')
const Deck = require('./models/Deck')
// require('./models')

app.use(express.urlencoded({ extended: false}))
app.use(cors())
app.use(express.json())

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/familyTree')
// const db = mongoose.connection

// Boss.create({
//     name: 'Big Bad',
//     health: 100
// })
//     .then(boss => {
//         console.log(boss)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Deck.create({
//     name: 'Barbarian',
//     deckId: 'barb',
//     cards: [
//         {
//             attack: 'Big Swing',
//             damage: 9,
//             description: 'Aim Your Mace At the Enemies Skull Causing Damage'
//         },
//         {
//             attack: 'Jabs',
//             damage: 3,
//             description: 'Punch The Enemy With Your Iron Fists Multiple Times'
//         }
//     ]
// })
//     .then(deck => {
//         console.log(deck)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Character.create({
//     name:'Barbarian',
//     health: 105
    
// })
//     .then(character => {
//         console.log(character)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// User.create({ 
//     name: 'SilencedKhan', 
//     saveState: [
//         {
//             saveName: 'Save 1',
//             character: 'Elf',
//             deck: 'Elf Deck',
//             boss: 'Goroth',
//             characterHealth: 27,
//             bossHealth: 74
//         },
//         {
//             saveName: 'Save 3',
//             character: 'Elf',
//             deck: 'Elf Deck',
//             boss: 'Goroth',
//             characterHealth: 11,
//             bossHealth: 32
//         },
//         {
//             saveName: 'tough SOB',
//             character: 'Barbarian',
//             deck: 'Barbarian Deck',
//             boss: 'Flucifer',
//             characterHealth: 4,
//             bossHealth: 185
//         }
//     ],
//     email: 'khan@i.ly'
    
// })
//     .then(user => {
//         console.log(user)
//     })
//     .catch(err => {
//         console.log(err)
//     })




app.get('/', (req, res) => {
    res.json({ message: 'welcome to the expedition API! 🤠'})
})





app.use('/users', require('./controllers/users.js'))
app.use('/characters', require('./controllers/characters.js'))
app.use('/bosses', require('./controllers/boss.js'))
app.use('/decks', require('./controllers/decks.js'))

app.listen(PORT, () => {
    console.log(`is that port ${PORT} I hear? 🙉`)
})
