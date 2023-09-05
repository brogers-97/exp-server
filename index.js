const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const axios = require('axios')
const User = require('./models/user')
const Character = require('./models/Character')
const Boss = require('./models/Boss')
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

// Character.create({
//     name:'Elf',
//     attacks: [{
//         attack: 'arrow shot',
//         damage: 10
//     }]
    
// })
//     .then(character => {
//         console.log(character)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// User.create({ 
//     name: 'Jake', 
//     email: 'jake@i.ly', 
//     meta: {
//         age: 26,
//         website: 'http.lmao'
//     }
// })
//     .then(user => {
//         console.log(user)
//     })
//     .catch(err => {
//         console.log(err)
//     })





// db.once('open', function() {
//     console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
// })
// db.on('error', function(err) {
//     console.error(`Daabase error:\n${err}`)
// })


app.get('/', (req, res) => {
    res.json({ message: 'welcome to the expedition API! 🤠'})
})





app.use('/users', require('./controllers/users.js'))
app.use('/characters', require('./controllers/characters.js'))
app.use('/bosses', require('./controllers/boss.js'))

app.listen(PORT, () => {
    console.log(`is that port ${PORT} I hear? 🙉`)
})
