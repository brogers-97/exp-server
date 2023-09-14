const mongoose = require('mongoose')

// create the schema
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    saveState: [
        {
            saveName: {
                type: String,
                unique: true,
            },
            character: String,
            deckId: String,
            boss: String,
            characterHealth: Number,
            bossHealth: Number
        }
    ],
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
})

userSchema.methods.sayHello = function() {
    return "hi " + this.name
}

const User = mongoose.model('User', userSchema)
module.exports = User