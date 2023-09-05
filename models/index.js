const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/familyTree')
const db = mongoose.connection

db.once('open', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})
db.on('error', function(err) {
    console.error(`Daabase error:\n${err}`)
})

module.exports = {
    User: require('./user'),
    Character: require('./Character'),
    Boss: require('./Boss')
}