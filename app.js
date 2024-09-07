require('dotenv').config()
const mongoose = require('mongoose')
const prompt = require('prompt-sync')()

CRUD = 'create'
// Connect to Database
const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database is running')
    await runQueries()
    await mongoose.disconnect()
    console.log('Database is closed')
}

// Queries
let runQueries 
// = async () => {
//     // let query 
//     if (CRUD === 'create'){
//         console.log('running  create')
//         // query = createCustomer()
//     } 
    // else if(CRUD === 'update') {
    // //     return await updateCustomer()
    // // } else if (CRUD === 'read') {
    // //     return await readCustomer()
    // // }else if (CRUD === 'delete'){
    // //     return await deleteCustomer()
    // }
    // await createCustomer()
    // console.log('this is the query object: ', query)
    // console.log('runing queries')
// }

// Connect to dabase


// require models 
const Customer = require('./models/customer.js')

// declare queries

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


// define main function: DatabaseActiosn

const databaseActions = () => {
    console.log('running databaseActions')
    
    // if userChoice is 1 then, Define createCustomer query and send confirmation to user
    if(userChoice === 1){
        
        // define createCustomer function
        const name = prompt('Enter Customers name: ')
        const age = Number(prompt('Enter customers age: '))        
        
        // declare customer query 
        const createCustomer = async () => {
            const data = {
                name: name,
                age: age
            }
            const customer = await Customer.create(data)
            console.log('Customer created: ', customer)
            
        }
        
        runQueries = async () => {
            await createCustomer()
        }
        connectToDB()
        
    }else if (userChoice === 2){

        const indexCustomers = async () => {
            const index = await Customer.find({})
            console.log(index)
        }
        runQueries = async ()=> {await indexCustomers()}
        connectToDB()
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


