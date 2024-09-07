require('dotenv').config()
const mongoose = require('mongoose')
const prompt = require('prompt-sync')()

// Connect to Database
const connect= ( async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('DB Connection openned')
    await runQueries()
    await mongoose.disconnect()
    console.log('Connection closed')
    
})
// Queries
const runQueries = async () => {
    
    console.log('runing queries')
}


connect()

// require models 
const Customer = require('/models/customer.js')



// application code
prompt('Welcome to the CRM')

prompt('What would you like to do?')
const createCustomer = prompt('1. Create a customer')
const indexCustomer = prompt('2. Create a customer')
const updateCustomer = ('3. Create a customer')
const deleteCustomer = ('1. Create a customer')
const quit = ('1. Create a customer')



console.log(`your choose ${selection}`)


