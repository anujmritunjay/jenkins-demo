const validator = require('validator')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        trim: true
    },

    email:{
        required:true,
        type: String,
        validate: validator.isEmail,
        trim: true
    },


    password:{
        required: true,
        type: String,
    },

    address:{
        type: String,
        default: null,
    },

    type:{
        type: String,
        default: 'user',
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User;