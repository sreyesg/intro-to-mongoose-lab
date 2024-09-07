require('dotenv').config()
const mongoose = require('mongoose')
const prompt = require('prompt-sync')()

// Connect to Database
const connect= ( async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database running')
})
// Queries
// const runQueries = async () => {
//     await createCustomer()
//     console.log('runing queries')
// }

// Connect to dabase
connect()

// require models 
const Customer = require('./models/customer.js')

// declare queries

const createCustomer = async (name, age) => {
    const data = {
        name: name,
        age: age
    }
    const customer = await Customer.create(data)
    console.log('Customer created: ', customer)
    
}

const indexCustomers = async () => {

}



// APPLICATION CODE

const userMessage = 'What would you like to do?  \n\n'+
'1. create a customer. \n' + 
'2.view all customers. \n' + 
'3.update a customer. \n' + 
'4.delete a customer. \n' + 
'5. quit \n\n' + 
'number of action to run:'

let userChoice = Number(prompt(userMessage))


// define main function
const databaseActions = () => {
    console.log('running databaseActions')
    
    // if userChoice is 1 then, Define createCustomer query and send confirmation to user
    if(userChoice === 1){
        const name = prompt('Enter Customers name: ')
        const age = Number(prompt('Enter customers age: '))
        // console.log(name, age)
        createCustomer(name, age)
    }



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

databaseActions()


