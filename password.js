const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Welcome to the password validator, please enter a password", function(input){
    console.log("what is input length", input.length)

    if(input.length >= 10){
        console.log("password was successfulyl made")
    }else{
        console.log("password needs to be at least 10 characters or longer")
    }
    
})