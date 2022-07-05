const mongoose = require('mongoose')
const {registerSchema} = require('swaggiffy');
const bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Book = mongoose.model('Book', bookSchema)
registerSchema('Book', bookSchema, { orm: 'mongoose' }); // for mongoose model
module.exports = Book