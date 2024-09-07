require('dotenv').config()
const mongoose = require('mongoose')

const connect= ( async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('DB Connection openned')
    await runQueries()
    await mongoose.disconnect()
    console.log('Connection closed')
    
})

const runQueries = async () => {
    
    console.log('runing queries')
}


connect()

// require models 
const Customer = require('/models/customer.js')