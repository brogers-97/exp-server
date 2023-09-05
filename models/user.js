const mongoose = require('mongoose')

// create the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    meta: {
        age: Number,
        website: String
    }
}, {
    timestamps: true
})

userSchema.methods.sayHello = function() {
    return "hi " + this.name
}

const User = mongoose.model('User', userSchema)
module.exports = User