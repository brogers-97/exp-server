const mongoose = require('mongoose')

// create the schema
const userSchema = new mongoose.Schema({
    name: String,
    saveState: [
        {
            saveName: String,
            character: String,
            deck: String,
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