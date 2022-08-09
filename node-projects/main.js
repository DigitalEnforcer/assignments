var readline = require('readline-sync');


const num1 = readline.question("Please enter your first number: ")
const num2 = readline.question("Please enter your second number: ")
const userInput = readline.question ("Please enter the operation to perform [add, sub, mul, div]: ")

if (userInput === "add"){
    console.log ("The result is", addition(num1, num2))
}
    else if (userInput === "sub"){
        console.log ("The result is", subtraction(num1, num2))
    }
    else if (userInput === "mul"){
        console.log ("The result is", multiply(num1, num2))
    }
    else if (userInput === "div"){
        console.log ("The result is", divide(num1, num2))
    }
    else console.log ("Incorrect Entry... Please try again later")

function addition(num1, num2){
    return Number(num1) + Number(num2)
}

function subtraction(num1, num2){
    return Number(num1) - Number(num2)
}

function multiply(num1, num2){
    return Number(num1) * Number(num2)
}

function divide(num1, num2){
    return Number(num1)/Number(num2)
}

