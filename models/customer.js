const mongoose = require('mongoose')

// Schema
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
// model
const Customer = mongoose.model('Customer', customerSchema)
