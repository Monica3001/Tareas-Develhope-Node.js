// There should be a script that:

// Defines a function
// Exports that function with module.exports
// There should be another script that:

// Uses require() to import the function from the other script
// Calls the imported function

function someMessage(message, number){
    console.log(`the message is ${message} 
    and the number is ${number}`)
}
module.exports = someMessage