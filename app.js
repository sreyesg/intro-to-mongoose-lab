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
    } else if (userChoice === 3){
        
        // collect Customer DB index
        const indexCustomers = async () => {
            const index = await Customer.find({})
            index.forEach((el) => {
                console.log(`id: ${el.id} -- name: ${el.name}`)    
            })
        
        }
        
        runQueries = async ()=> {await indexCustomers()}
        
        // declare Async UpdateFunction
        const updateFunction = async () => { 
         
            await connectToDB()   

            const id = prompt('copy and past the id of the customer you would like to update here: ')
            const name = prompt('What is the customers new aname?')
            const age = prompt('What is the customers new age?')

            // Declare update query
            const updateCustomer = async () => {
                const updatedCustomer = await Customer.findByIdAndUpdate(id,{name: name},{age: age},{new: true})
                console.log(updatedCustomer)
            }
            
            runQueries = async ()=> {await updateCustomer()}
            await connectToDB()
        }
        // call asynchronous update function
        updateFunction()
    
    }
}
databaseActions()


