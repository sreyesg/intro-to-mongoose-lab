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


// connect()

// require models 
const Customer = require('./models/customer.js')



// application code

const userChoice = prompt('Welcome to the CRM \n\n' +
    'What would you like to do?  \n\n'+
    '1. create a customer. \n' + 
    '2.view all customers. \n' + 
    '3.update a customer. \n' + 
    '4.delete a customer. \n' + 
    '5. quit \n\n' + 
    'number of action to run:')


// define main function
const databaseActions = () => {
    // if userChoice is 1 then, 
    // Define createCustomer query
    // send confirmation to user

    // if userChoice is 2 then, 
    // Define indexCustomer query
    // send index to user
    
    // if userChoice is 3 then, 
    // Define updateCustomer query
    // send confirmation to user

    // if userChoice is 4 then,
    // Define deleteCustomer query
    // send confirmation to user

    // if userChoice is 5 then,
    // disconnect from database
    // send confirmation to user

}



